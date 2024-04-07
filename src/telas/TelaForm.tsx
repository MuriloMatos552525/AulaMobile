// src/telas/TelaForm.tsx
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TelaForm({ navigation }) {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [capa, setCapa] = useState('');

    const salvarFilme = async () => {
        const filme = { titulo, descricao, capa };
        try {
            await AsyncStorage.setItem('filme_' + Date.now(), JSON.stringify(filme));
            navigation.goBack('TelaList', { refresh: true });
        } catch (error) {
            console.error('Erro ao salvar o filme:', error);
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

            <Button title="Salvar" onPress={salvarFilme} />
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
