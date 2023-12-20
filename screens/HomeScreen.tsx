import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { homeScreenStyles } from "../styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

export default function HomeScreen() {
  const session = async () => {
    const info = await AsyncStorage.getItem("sessionID");
    console.log(info);
  };
  useEffect(() => {
    session();
  }, []);
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
