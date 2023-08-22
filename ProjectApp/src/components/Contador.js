import React, {suseState} from "react";
import { Text, Button, TextInput, TextInputComponent, InputAccessoryView } from "react-native";
import Estilo from "../estilo";
import { useState } from "react";

export default props => {

  
    const [ numero, setNumero ] = useState(props.inicial)

    const zero = () => setNumero (0)
    
    const dec = () => setNumero (numero -1)

    const poc = () => setNumero (numero % 1)

    const div = () => setNumero (numero / 2)

    return (
        <>
            <Text style={Estilo.fonteG}>{numero}</Text>
            <Button style={Estilo.butao1} title="c" onPress={zero}/>
            <Button style={Estilo.butao2} title="( )" onPress={dec}/>
            <Button style={Estilo.butao3} title="%" onPress={poc}/>
            <Button style={Estilo.butao4} title="/" onPress={div}/>
            <Button style={Estilo.butao5} title="x" onPress={zero}/>
            <Button style={Estilo.butao6} title="-" onPress={dec}/>
            <Button style={Estilo.butao7} title="+" onPress={dec}/>
            <Button style={Estilo.butao8} title="=" onPress={dec}/>
            

        </>
    )
}