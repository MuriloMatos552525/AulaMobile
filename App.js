import React from 'react';

import TelaForm from './src/telas/TelaForm';
import TelaList from './src/telas/TelaList';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Button, Icon } from 'react-native-elements';
import { UsuarioProvider } from './src/content/UsuariosContext';

const Stack = createNativeStackNavigator()

export default function App() {
  

  return (
    <UsuarioProvider>
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='TelaList'
        screenOptions={{headerStyle:{
          backgroundColor:'green'
        },headerTintColor:'white'
      }}      
      >
        <Stack.Screen 
          name="TelaList"
          component={TelaList}
          options={({navigation})=>{
            return{
            title:"TELA DE LISTAGEM",
            headerRight:()=>(
              <Button
               onPress={()=>navigation.navigate("TelaForm")}
               type='clear'
               icon={<Icon name='add' size={30} color='white'/>}
              />
            )
            }
          }}
        />
        <Stack.Screen 
          name="TelaForm"
          component={TelaForm}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </UsuarioProvider>
  )
}

