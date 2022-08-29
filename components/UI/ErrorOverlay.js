import {
  View,
  ActivityIndicator,
  StyleSheet,
  Button,
  Text,
} from "react-native";
import { GlobalStyles } from "../../constants/styles";

function ErrorOverlay({ message, onConfirm }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>An Error occured</Text>
      <Text style={styles.text}>{message}</Text>
      <Button onPress={onConfirm} title="Okay" />
    </View>
  );
}

export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary700,
  },

  text: {
    color: "white",
    textAlign: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  message: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
