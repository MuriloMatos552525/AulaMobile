import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

export default props=>{
    const[valor,setValor]=useState(15)
    const [usuario,setUsuario]=useState(props.route.params?props.route.params:{})

    console.log(Object.keys(props.route.params))
    return(
        <View>
            <Text>Nome</Text>
            <TextInput style={style.input} value={usuario.nome}/>

            <Text>Email</Text>
            <TextInput style={style.input} value={usuario.Email}/>

        </View>
    )
}

const style = StyleSheet.create({
    input:  {
        borderWidth:1,
        width:300,
        height:50,
    }
})