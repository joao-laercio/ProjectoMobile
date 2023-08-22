import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Estilo from '../estilo';

export default () => (
    <Text styles = {Estilo.MeuTexto}>Meu primeiro componente!</Text>
)
    const style = StyleSheet.create({
        MeuTexto:{
            fontSize: 36,
            backgroundColor: "red"
        }
    })
    
