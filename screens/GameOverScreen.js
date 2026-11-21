import {
  StyleSheet,
  View,
  Image,
  Text,
  useWindowDimensions,
  ScrollView,
 } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/Colors";
import PrimaryButton from "../components/ui/PrimaryComponets";

function GameOverScreen({ rondsNumber, userNumber, onStartNewGame }) {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;
  if (width < 380) imageSize = 150;
  if (height < 400) imageSize = 80;

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
    <View style={styles.rootContainer}>
      <Title>Game OVER</Title>
      <View style={[styles.imageConatiner, imageSize]}>
        <Image
          style={styles.image}
          src={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your device needs <Text style={styles.Highlight}>{rondsNumber}</Text> no
        of rounds to guesss the number{" "}
        <Text style={styles.Highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
    </ScrollView>
  );
}
export default GameOverScreen;
//const deviceWidth = Dimensions.get('window').width ;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  screen:{
    flex:1,
  },
  imageConatiner: {
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
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  Highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
