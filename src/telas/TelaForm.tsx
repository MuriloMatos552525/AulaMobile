import React, { useState } from "react";
import { Text, TextInput, View, Button } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from "../styles/styles";

export default function TelaForm({ navigation }) {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [capa, setCapa] = useState('');

    const salvarFilme = async () => {
        const filme = { titulo, descricao, capa };
        try {
            await AsyncStorage.setItem('filme_' + Date.now(), JSON.stringify(filme));
            navigation.navigate('TelaList'); // Redireciona de volta para a tela de lista
        } catch (error) {
            console.error('Erro ao salvar o filme:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Título</Text>
            <TextInput
                style={styles.input}
                value={titulo}
                onChangeText={setTitulo}
                placeholderTextColor="#a9a9a9"
            />

            <Text style={styles.label}>Descrição</Text>
            <TextInput
                style={styles.input}
                value={descricao}
                onChangeText={setDescricao}
                placeholderTextColor="#a9a9a9"
            />

            <Text style={styles.label}>Capa (URL)</Text>
            <TextInput
                style={styles.input}
                value={capa}
                onChangeText={setCapa}
                placeholderTextColor="#a9a9a9"
            />

            <Button title="Salvar" onPress={salvarFilme} />
        </View>
    );
}
