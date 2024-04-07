import React,{createContext} from "react";
import DadosUsuarios from '../dados/DadosFilmes'
const UsuarioContext = createContext({})

export default UsuarioContext 
export const UsuarioProvider = props => {
    return(
        <UsuarioContext.Provider value ={{
            state:DadosUsuarios
        }}>

        {props.children}
        </UsuarioContext.Provider>
    )
}