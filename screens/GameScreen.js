import { View, Text, StyleSheet } from "react-native";
import { useState } from "react ";
import Title from "../components/Title";


function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}


function GameScreen({userNumber}) {
  const initialGuess = generateRandomBetween(0 , 101 ,userNumber ); 
  const [currentGuess , setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <Text>
        
      </Text>
      <Text>Higher or lower?</Text>
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
