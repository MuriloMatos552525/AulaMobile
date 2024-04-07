// src/telas/TelaDetalhes.tsx
import React from "react";
import { Text, View, Image } from "react-native";

export default function TelaDetalhes({ route }) {
    const { titulo, descricao, cartaz } = route.params.filme;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={{ uri: cartaz }} style={{ width: 200, height: 300 }} />
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>{titulo}</Text>
            <Text style={{ margin: 10 }}>{descricao}</Text>
        </View>
    );
}
