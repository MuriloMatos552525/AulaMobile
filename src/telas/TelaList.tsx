import React, { useEffect, useState } from "react";
import { FlatList, Text, View, Image, Button } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from "../styles/styles";

export default function TelaList({ navigation }) {
    const [filmes, setFilmes] = useState([]);
    const [error, setError] = useState(null); // Estado para armazenar possíveis erros

    useEffect(() => {
        const carregarFilmes = async () => {
            try {
                console.log("Carregando filmes...");
                const keys = await AsyncStorage.getAllKeys();
                console.log("Chaves encontradas:", keys);
                const filmesArray = await AsyncStorage.multiGet(keys);
                console.log("Filmes encontrados:", filmesArray);
                setFilmes(filmesArray.map(([key, value]) => ({ key, ...JSON.parse(value) })));
                console.log("Filmes carregados com sucesso:", filmes);
            } catch (error) {
                console.error('Erro ao carregar os filmes:', error);
                setError(error); // Armazenar o erro no estado
            }
        };

        carregarFilmes();
    }, []);

    const deletarFilme = async (key) => {
        try {
            await AsyncStorage.removeItem(key);
            setFilmes(filmes.filter(filme => filme.key !== key));
        } catch (error) {
            console.error('Erro ao deletar o filme:', error);
        }
    };

    const renderFilme = ({ item }) => (
        <View style={styles.filmeContainer}>
            {item.capa ? ( // Verifica se a URI da capa está presente
                <Image source={{ uri: item.capa }} style={styles.capa} />
            ) : (
                <Text>Capa não disponível</Text>
            )}
            <View style={styles.infoContainer}>
                <Text style={styles.titulo}>{item.titulo}</Text>
                <Text style={styles.descricao}>{item.descricao}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Excluir" onPress={() => deletarFilme(item.key)} />
                <Button title="Detalhes" onPress={() => navigation.navigate('TelaDetalhes', { filme: item })} />
                <Button title="Editar" onPress={() => navigation.navigate('TelaEdicao', { filme: item })} />
            </View>
        </View>
    );

    if (error) { // Se houver um erro ao carregar os filmes
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Erro ao carregar os filmes</Text>
                <Text>{error.message}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Lista de Filmes</Text>
            <FlatList
                data={filmes}
                renderItem={renderFilme}
                keyExtractor={(item) => item.key}
            />
            <Button title="Adicionar Filme" onPress={() => navigation.navigate('TelaForm')} />
        </View>
    );
}
