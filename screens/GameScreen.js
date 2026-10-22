import { View, Text, StyleSheet } from "react-native";
import { useState } from "react ";
import Title from "../components/Title";
import NumberContaine from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryComponets "


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

function GameScreen({userNumber}) {
  const initialGuess = generateRandomBetween(minBoundary , maxBoundary ,userNumber ); 
  const [currentGuess , setCurrentGuess] = useState(initialGuess);

  function nextGuessHandler(direction){
      if(direction == 'lower'){
        maxBoundary = currentGuess;
        generateRandomBetween(minBoundary , maxBoundary , currentGuess);
      }
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContaine>{}currentGuess</NumberContaine>
      <Text>Higher or lower?</Text>
      <View>
         <PrimaryButton onPress={}>+</PrimaryButton>
      <PrimaryButton onPress={}>-</PrimaryButton>
      </View>
 
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
