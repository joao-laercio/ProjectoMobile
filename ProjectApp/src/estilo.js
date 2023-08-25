import { StyleSheet } from "react-native";

export default StyleSheet.create({
    App: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        padding: 60
    },
    
    display: {
        flex:3,
        textAlign: "center",
        color:'black',
        paddingLeft:100

    },
    botao: {   

        flexGrow:5,
        flexDirection:'row',
        flexWrap:'wrap',
                
    },
    botaoOperador: {   
        color:'red'
                
    },
    botaoNumeros: {   
        fontSize:10,
        borderColorColor:'green',
       
                
    }

})