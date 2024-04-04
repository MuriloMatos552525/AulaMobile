import React,{createContext} from "react";
import DadosUsuarios from '../dados/DadosUsuarios'
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