import { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryComponets";
import Colors from '../constants/Colors.js'

function StartGameScreen({onPickNumber}) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

    function resetInput(){
      setEnteredNumber('');
    }
  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber < 0 || chosenNumber > 100) {
      Alert.alert(
        "Invalid number",
        "Number has to be in between 0 to 100 only",
        [{text: 'Okay' , style: "destructive"  , onPress: resetInput} ]
      );
      return;
    }
    onPickNumber(chosenNumber);
  }
  return (
    <View style={styles.rootContainer}>
      <title>Guess My NUmber!!</title>
    <View style={styles.inputContainer}>
      <Text> Enter a Number</Text>
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
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
    </View>
  );
}
export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer:{
    flex:1,
    marginTop:100,
    alignItems:"center",
  },
  instructionText:{
    color: Colors.primary700,
    fontSize:24,
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36 ,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary700,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
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
