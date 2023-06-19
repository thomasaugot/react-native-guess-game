import { StyleSheet, Text } from "react-native";
import Colors from "../../util/colors";

const InstructionText = ({ children, style }) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
    paddingTop: 20,
    paddingBottom: 10,
    textAlign: "center",
  },
});
