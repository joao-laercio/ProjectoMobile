import { StyleSheet, View } from "react-native";

const Row = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

// create styles of Row
const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    flexDirection: "row",
    flexWrap: "wrap",
    
  },
});

export default Row;
