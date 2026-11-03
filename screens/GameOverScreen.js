import { StyleSheet, View, Image, Text } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/Colors";
import PrimaryButton from "../components/ui/PrimaryComponets"; 

function GameOverScreen() {
  return (
    <View style={styles.rootContainer}>
      <Title>Game OVER</Title>
      <View style={styles.imageConatiner}>
        <Image
          style={styles.image}
          src={require("../assets/images/success.png")}
        />
      </View>
        <Text style={styles.summaryText}>
          Your device needs <Text style={styles.Highlight}>X</Text> no of rounds
          to guesss the number <Text style={styles.Highlight}>Y</Text>.
        </Text>
        <PrimaryButton>Start New Game</PrimaryButton>
    </View>
  );
}
export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageConatiner: {
    width: 200,
    height: 200,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary500,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize:24,
    textAlign:"center",
    marginBottom:24,
  },
  Highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
