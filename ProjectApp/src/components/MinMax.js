import React from "react";
import { Text } from "react-native";
import Estilo from "../estilo";


export default props => {

    return (
        <Text style={Estilo.fontG}>O numero {props.max} e maior que o numero {props.min}!</Text>
    )

}