import React from "react";
import { Text } from 'react-native';
import Estilo from "../estilo";

export default (props) => {

    return(
    <Text styles = {Estilo.fonteG}>Meu numero {props.max}, é maior que numero {props.min}.</Text>
)
}