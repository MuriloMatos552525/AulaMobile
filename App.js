// app.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TelaForm from './src/telas/TelaForm';
import TelaList from './src/telas/TelaList';
import TelaDetalhes from './src/telas/TelaDetalhes';
import TelaEdicao from './src/telas/TelaEdicao';

const Stack = createNativeStackNavigator();

export default function App() {
  AsyncStorage.clear(); // Limpa os dados de teste do AsyncStorage
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaList">
        <Stack.Screen name="TelaList" component={TelaList} options={{ title: 'Lista de Filmes' }} />
        <Stack.Screen name="TelaForm" component={TelaForm} options={{ title: 'Adicionar Filme' }} />
        <Stack.Screen name="TelaDetalhes" component={TelaDetalhes} options={{ title: 'Detalhes do Filme' }} />
        <Stack.Screen name="TelaEdicao" component={TelaEdicao} options={{ title: 'Editar Filme' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
