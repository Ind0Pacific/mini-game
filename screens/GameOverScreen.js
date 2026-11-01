import { StyleSheet, View, Image , Text } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/Colors";

function GameOverScreen() {
  return (
    <View style={styles.rootContainer}>
      <Title>Game OVER</Title>
      <View style={styles.imageConatiner}>
      <Image style={styles.image} src={require("../assets/images/success.png")} />
      </View>
      <View>
        <Text>
            Your device needs X no of rounds to guesss the number Y.
        </Text>
      </View>
    </View>
  );
}
export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer:{
    flex:1,
     padding:24,
     justifyContent: "center",
     alignItems: "center"
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
  image:{
    width:'100%',
    height:'100%',
  }
});
