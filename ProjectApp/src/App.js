import React from "react";
import { View, Text, Button, Alert } from "react-native";
// import MeuTexto from "./components/MeuTexto";
// import MinMax from "./components/MinMax";
// import Contador from "./components/Contador";
import Botao from "./components/Botao";
import Estilo from "./estilo";
import Display from "./components/display";


export default () => {
    return(
        <View style={Estilo.App}>
            <View style={Estilo.display}>
                <Display/>
                
                
            </View>
            
            <View style={Estilo.botao}>
                <Botao valor="C" operador/>
                <Botao valor="()" operador/>
                <Botao valor="%" operador/>
                <Botao valor="<<" operador/>
                <Botao valor="7"/>
                <Botao valor="8"/>
                <Botao valor="9"/>
                <Botao valor="x" operador/>
                <Botao valor="4"/>
                <Botao valor="5"/>
                <Botao valor="6"/>
                <Botao valor="-" operador/>
                <Botao valor="1"/>
                <Botao valor="2"/>
                <Botao valor="3"/>
                <Botao valor="+" operador/>
                <Botao valor="."/>
                <Botao valor="0"/>
                <Botao valor="/"/>
                <Botao valor="=" operador/>

                
            </View>
        </View>
)}