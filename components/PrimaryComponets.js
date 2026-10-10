import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children }) {
  function pressHandler() {
    console.log("Pressed");
  }
  return (
    <View
      style={({ pressed }) =>
        pressed
          ? [styles.buttonInnerContainer, styles.Pressed]
          : styles.buttonOuterContainer
      }
    >
      <Pressable
        style={styles.buttonInnerContainer}
        onPress={pressHandler}
        android_ripple={{ color: "#f13593" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}
export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28, 
    margin: 4,
    overflow: "hidden", 
  },

  buttonInnerContainer: {
    backgroundColor: "#c40d68",
    paddingVertical: 8,
    paddingHorizontal: 14,
    elevation: 2,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
  },
  Pressed: {
    opacity: 0.75,
  },
});
