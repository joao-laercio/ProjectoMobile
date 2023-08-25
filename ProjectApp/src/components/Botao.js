import React from "react";
import { Text, View, StyleSheet, TouchableHighlight, Dimensions } from "react-native";

const style = StyleSheet.create({
    butao: {
        backgroundColor: "gray",
        width: 60,
        height: 60,
        borderColor: "black",
        borderWidth: 1,
        textAlign: "center"
    }
})


export default props => {

    return (
        <TouchableHighlight onPress={() => {}}>
            <View style={style.butao}>
                <Text>{props.operador ? style.botaoOperador : style.botaoNumeros}</Text>
            </View>
        </TouchableHighlight>
    )
}