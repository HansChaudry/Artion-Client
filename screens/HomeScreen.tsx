import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { homeScreenStyles } from "../styles";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <Text style={homeScreenStyles.title}>Home</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
