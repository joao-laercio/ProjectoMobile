import React, { Component } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Button from "./components/Button";
import Row from "./components/Row";
import calculator, { initialState } from "./util/calculator";

// create class component of App
export default class App extends Component {
  state = initialState;

  // handle tap method
  HandleTap = (type, value) => {
    this.setState((state) => calculator(type, value, state));
  };

  // render method
  render() {
    return (
      <View style={styles.container}>
        {/* Status bae here */}
        <SafeAreaView>
          <Text style={styles.value}>
            {parseFloat(this.state.currentValue).toLocaleString()}
          </Text>

          {/* Do create componentRow */}
          <Row>
            <Button
              text="C"
              theme="secondary"
              onPress={() => this.HandleTap("clear")}
            />

            <Button
              text="()"
              theme="secondary"
              onPress={() => this.HandleTap("posneg")}
            />

            <Button
              text="%"
              theme="secondary"
              onPress={() => this.HandleTap("percentage")}
            />
            <Button text="<<" theme="secondary" onPress={() => this.HandleTap("number", "0")} />

          </Row>

          {/* Number */}
          <Row>
            <Button text="7" onPress={() => this.HandleTap("number", 7)} />
            <Button text="8" onPress={() => this.HandleTap("number", 8)} />
            <Button text="9" onPress={() => this.HandleTap("number", 9)} />
            <Button
              text="x"
              theme="secondary"
              onPress={() => this.HandleTap("operator", "*")}
            />
          </Row>

          <Row>
            <Button text="5" onPress={() => this.HandleTap("number", 5)} />
            <Button text="6" onPress={() => this.HandleTap("number", 6)} />
            <Button text="7" onPress={() => this.HandleTap("number", 7)} />
            <Button
              text="-"
              theme="secondary"
              onPress={() => this.HandleTap("operator", "-")}
            />
          </Row>

          <Row>
            <Button text="1" onPress={() => this.HandleTap("number", 1)} />
            <Button text="2" onPress={() => this.HandleTap("number", 2)} />
            <Button text="3" onPress={() => this.HandleTap("number", 3)} />
            <Button
              text="+"
              theme="secondary"
              onPress={() => this.HandleTap("operator", "+")}
            />
          </Row>

          <Row>
            <Button text="." onPress={() => this.HandleTap("number", ".")} />
            <Button text="0" onPress={() => this.HandleTap("number", 0)} />

            <Button
              text="/"
              
              onPress={() => this.HandleTap("operator", "/")}/>
            
              <Button
                text="="
                theme="botao"
                onPress={() => this.HandleTap("equal", "=")}
              />
            
              
          </Row>
          <Row></Row>
        </SafeAreaView>
      </View>
    );
  }
}

// create styles of app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "flex-end",
  },
  value: {
  
    color: "black",
    fontSize: 40,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },
  botao:{
      color: "black",
      fontSize: 30,
   
  }
});
