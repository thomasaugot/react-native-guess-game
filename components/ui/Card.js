import { View, StyleSheet } from "react-native";
import Colors from "../../util/colors";

const Card = ({ children }) => {
  return <View style={StyleSheet.card}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.primary800,
    elevation: 4, // for Android only
    shadowColor: "black", // for IOS only
    shadowOffset: { width: 0, height: 2 }, // for IOS only
    shadowRadius: 6, // for IOS only
    shadowOpacity: 0.25, // for IOS only},
  },
});
