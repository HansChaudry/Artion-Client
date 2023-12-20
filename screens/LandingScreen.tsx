import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Landing() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Welcome to Artion !!!</Text>
      <StatusBar style="auto" />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Log In");
        }}
        style={styles.button}
      >
        <Text>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Sign Up");
        }}
        style={styles.button}
      >
        <Text>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "60%", // Adjust the width as needed
    marginTop: 20,
    padding: 15,
    backgroundColor: "#FFBA00",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#FFBA00",
    borderRadius: 10,
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
});
