// src/telas/TelaEdicao.tsx
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TelaEdicao({ route, navigation }) {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [capa, setCapa] = useState('');

    useEffect(() => {
        const { filme } = route.params;
        setTitulo(filme.titulo);
        setDescricao(filme.descricao);
        setCapa(filme.capa);
    }, []);

    const salvarEdicao = async () => {
        const { filme } = route.params;
        const novoFilme = { ...filme, titulo, descricao, capa };
        try {
            await AsyncStorage.setItem(filme.key, JSON.stringify(novoFilme));
            navigation.goBack();
        } catch (error) {
            console.error('Erro ao salvar a edição do filme:', error);
        }
    };

    return (
        <View>
            <Text>Título</Text>
            <TextInput
                style={style.input}
                value={titulo}
                onChangeText={setTitulo}
            />

            <Text>Descrição</Text>
            <TextInput
                style={style.input}
                value={descricao}
                onChangeText={setDescricao}
            />

            <Text>Capa (URL)</Text>
            <TextInput
                style={style.input}
                value={capa}
                onChangeText={setCapa}
            />

            <Button title="Salvar" onPress={salvarEdicao} />
        </View>
    );
}

const style = StyleSheet.create({
    input: {
        borderWidth: 1,
        width: 300,
        height: 50,
    }
});
