import { Avatar, Button, Icon, ListItem, Text } from "react-native-elements";
import { FlatList,View } from "react-native";
import dadosUsuario from "../dados/DadosUsuarios";


function getUsuarios({item}){
    return(
        <ListItem >
            <Avatar source={{uri: item.fotoPerfil}} rounded size={60}/>
            <ListItem.Content>
                <ListItem.Title>{item.nome}</ListItem.Title>
                <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
            </ListItem.Content>

            <ListItem.Content right style={{flexDirection:'row'}}>
                <Button 
                    icon={<Icon name='edit' color='orange' />} 
                    type="clear"
                />
                <Button 
                    icon={<Icon name='delete' color='red' />} 
                    type="clear"
                />
            </ListItem.Content>
            
        </ListItem>
    )
}

export default props =>{

    return(
        <View>
        <Text>TELA LISTAGEM</Text>
        <FlatList
            data={dadosUsuario}
            renderItem={getUsuarios}
        />
        </View>
    )
}