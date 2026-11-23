import { useState } from "react";
import {
  View,
  StyleSheet,
  Alert,
  TextInput,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryComponets";
import Colors from "../constants/Colors.js";
import Card from "../components/ui/Card.js";
import InstructionText from "../components/ui/InstructionText.js";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const { width, height } = useWindowDimensions();

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInput() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber < 0 || chosenNumber > 100) {
      Alert.alert(
        "Invalid number",
        "Number has to be in between 0 to 100 only",
        [{ text: "Okay", style: "destructive", onPress: resetInput }],
      );
      return;
    }
    onPickNumber(chosenNumber);
  }
  const marginTopDistance = height < 380 ? 30 : 100;

  return (
    <ScrollView style={styles.screen} >
    <KeyboardAvoidingView style={styles.screen} behavior="position">
    <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
      <Title>Guess My Number!!</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInput}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
    </KeyboardAvoidingView>
    </ScrollView>
  );
}
export default StartGameScreen;
//const deviceHeight = Dimensions.get('window').height ;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // marginTop: deviceHeight < 380 ? 30 : 100,
    alignItems: "center",
  },
  screen: {
    flex:1
  },
  numberInput: {
    height: 50,
    width: 60,
    textAlign: "center",
    fontSize: 28,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 3,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 8,
  },
});
