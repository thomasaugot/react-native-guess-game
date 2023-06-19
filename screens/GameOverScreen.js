import { View, Text, Image, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../util/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/images/success.png")} />
      </View>
      <Text style={styles.generalText}>
        Your phone needed <Text style={styles.highlighttext}>{roundsNumber}</Text> rounds to guess
        the number <Text style={styles.highlighttext}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.prim,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  generalText: {
    fontFamily: "open-sans",
    fontSize: 22,
    textAlign: "center",
    marginBottom: 28,
  },
  highlighttext: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
