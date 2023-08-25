import React from "react";
import { Text, StyleSheet } from "react-native";

export default () => (
    <Text style={style.MeuTexto}>Meu primeiro compomente!</Text>
)

const style = StyleSheet.create({
    MeuTexto:{
        fontSize: 36,
        backgroundColor: "red"
    }
})