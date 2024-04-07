// src/telas/TelaList.tsx
import React, { useEffect, useState } from "react";
import { FlatList, Text, View, Image, Button } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TelaList({ navigation }) {
    const [filmes, setFilmes] = useState([]);

    const carregarFilmes = async () => {
        try {
            const keys = await AsyncStorage.getAllKeys();
            const filmesArray = await AsyncStorage.multiGet(keys);
            setFilmes(filmesArray.map(([key, value]) => ({ key, ...JSON.parse(value) })));
        } catch (error) {
            console.error('Erro ao carregar os filmes:', error);
        }
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            carregarFilmes();
        });

        return unsubscribe;
    }, [navigation]);

    const deletarFilme = async (key) => {
        try {
            await AsyncStorage.removeItem(key);
            carregarFilmes(); // Atualiza a lista de filmes após a exclusão
        } catch (error) {
            console.error('Erro ao deletar o filme:', error);
        }
    };

    const renderFilme = ({ item }) => (
        <View>
            <Image source={{ uri: item.cartaz }} style={{ width: 100, height: 150 }} />
            <Text>{item.titulo}</Text>
            <Text>{item.descricao}</Text>
            <Button title="Excluir" onPress={() => deletarFilme(item.key)} />
            <Button title="Detalhes" onPress={() => navigation.navigate('TelaDetalhes', { filme: item })} />
            <Button title="Editar" onPress={() => navigation.navigate('TelaEdicao', { filme: item })} />
        </View>
    );

    return (
        <View>
            <Text>Lista de Filmes</Text>
            <FlatList
                data={filmes}
                renderItem={renderFilme}
                keyExtractor={(item) => item.key}
            />
            <Button title="Adicionar Filme" onPress={() => navigation.navigate('TelaForm')} />
        </View>
    );
}
