import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

function InstructionText({ children }) {
  return <Text style={styles.instructionText}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.primary700,
    fontSize: 24,
  },
});