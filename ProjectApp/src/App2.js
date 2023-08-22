import React from "react";
import { View, Text, Button, Alert } from 'react-native';
// import MeuTexto from "./components/MeuTexto";
import Estilo from "./estilo";
import MinMax from "./components/MinMax";
import Contador from "./components/Contador";



export default () =>  (
<View style={Estilo.App}>
    <Contador inicial={10}/>
    {/* <Contador inicial={20}/>
    <Contador inicial={30}/> */}
    {/* <MinMax min= {4} max={15}/>
    <MinMax min= {8} max={12}/>
    <MinMax min= {6} max={13}/> */}
    {/* <Text style={Estilo.Texto}>Primeiro App!</Text> */}
    {/* <MeuTexto/> */}
    {/* <Button
        title="Cadastro"
        onPress={() => Alert.alert('Botão Pressionado')}
      /> */}

</View>)