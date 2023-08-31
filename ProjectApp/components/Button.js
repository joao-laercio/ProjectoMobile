import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";

export default ({ onPress, text, size, theme }) => {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];
  const tex2tStyles = [styles.text2];

  if (size === "double") {
    buttonStyles.push(styles.buttonDouble);
  }

  if (theme === "secondary") {
    buttonStyles.push(styles.buttonSecondary);
    textStyles.push(styles.textSecondary);}
    if (theme === "botao") {
      textStyles.push(styles.text2);
    }
  
   else if (theme === "accent") {
    buttonStyles.push(styles.buttonAccent);
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};

// set dimmenstion
const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#DDDDDD",
    flex: 5,
    alignItems: "center",
    justifyContent: "center",
    margin: 2,
    width: Dimensions.get("window").width / 4,
    height: Dimensions.get("window").width / 4,
  },
  text: {
    color: "black",
    fontSize: 30,
  },
  text2: {
    alignItems: '',
    textAlign:'center',
    backgroundColor:'#686969',
    color: "white",
    fontSize: 30,
    width: Dimensions.get("window").width / 4,
    height: Dimensions.get("window").width / 4,
  },
  textSecondary: {
    color: "#01786A",
  },
  buttonDouble: {
    width: screen.width / 2 - 10,
    flex: 0,
    alignItems: "flex-start",
    paddingLeft: 40,
  },
  buttonSecondary: {
    backgroundColor: "#CCCCCC",
    width: Dimensions.get("window").width / 4,
    height: Dimensions.get("window").width / 4,
  },
  buttonAccent: {
    backgroundColor: "red",
    width: Dimensions.get("window").width / 4,
    height: Dimensions.get("window").width / 4,
   
  },
  
  
});
