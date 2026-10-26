import { View, StyleSheet, Alert } from "react-native";
import { useState, useEffect } from "react ";
import Title from "../components/Title";
import NumberContaine from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryComponets ";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 0;
let maxBoundary = 101;

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(0, 101, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater " && currentGuess > userNumber)
    ) {
      Alert.alert(
        "You know that this is a lie and still you choose this , Why?",
        [{ text: "Say Sorry to system", style: "cancel" }],
      );
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess,
    );
    setCurrentGuess(newRndNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContaine>{}currentGuess</NumberContaine>
      <InstructionText>Higher or lower?</InstructionText>
      <Card>
        <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
          -
        </PrimaryButton>
        <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
          +
        </PrimaryButton>
      </Card>

      <View></View>
    </View>
  );
}

export default GameScreen;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
