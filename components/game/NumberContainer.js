import { View, StyleSheet, Text } from "react-native";
import Colors from "../../constants/Color";
function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>{children}</Text>
    </View>
  );
}

export default NumberContaine;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 4,
    borderColor : Colors.primaryYellow,
    padding: 24,
    margin:24,
    borderRadius:8,
    alignItems:"center",
    justifyContent:"center",
  },
  numberText: {
    color: Colors.primary500,
    fontSize:36,
    fontWeight:"bold",
  },
});
