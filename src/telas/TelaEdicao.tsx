// TelaEdicao.tsx
import React, { useState } from "react";
import { View, Text, TextInput, Button, Image } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from "../styles/styles";

export default function TelaEdicao({ route, navigation }) {
    const { filme } = route.params;
    const [titulo, setTitulo] = useState(filme.titulo);
    const [descricao, setDescricao] = useState(filme.descricao);
    const [capa, setCapa] = useState(filme.capa);

    const salvarEdicao = async () => {
        try {
            const novoFilme = { ...filme, titulo, descricao, capa };
            await AsyncStorage.mergeItem(filme.key, JSON.stringify(novoFilme));
            navigation.goBack();
        } catch (error) {
            console.error('Erro ao salvar a edição:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Editar Filme</Text>
            <View style={styles.filmeContainer}>
                <Text style={styles.label}>Título:</Text>
                <TextInput
                    style={styles.input}
                    value={titulo}
                    onChangeText={setTitulo}
                />
            </View>
            <View style={styles.filmeContainer}>
                <Text style={styles.label}>Descrição:</Text>
                <TextInput
                    style={styles.input}
                    value={descricao}
                    onChangeText={setDescricao}
                />
            </View>
            <View style={styles.filmeContainer}>
                <Text style={styles.label}>Capa (URL):</Text>
                <TextInput
                    style={styles.input}
                    value={capa}
                    onChangeText={setCapa}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Salvar" onPress={salvarEdicao} />
            </View>
        </View>
    );
}
