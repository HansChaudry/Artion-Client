import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LandingScreenStyles } from "../styles";

export default function Landing() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={LandingScreenStyles.LandingScreenTitle}>Welcome to</Text>
      <Image
        source={require("../assets/logo.jpeg")}
        style={{
          ...LandingScreenStyles.thirdPartyImg,
          width: 200,
          height: 200,
        }}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Sign In");
        }}
        style={LandingScreenStyles.LandingScreenBtn}
      >
        <Text style={LandingScreenStyles.LandingScreenBtnText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Register");
        }}
        style={{
          ...LandingScreenStyles.LandingScreenBtn,
          backgroundColor: "white",
        }}
      >
        <Text
          style={{
            ...LandingScreenStyles.LandingScreenBtnText,
            color: "black",
          }}
        >
          Register
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          marginVertical: 18,
        }}
      >
        <View style={{ borderWidth: 1, width: "30%", height: 1 }} />
        <Text style={{ fontFamily: "Poppins_400Regular", fontSize: 16 }}>
          or continue with
        </Text>
        <View style={{ borderWidth: 1, width: "30%", height: 1 }} />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          width: "50%",
        }}
      >
        <Pressable onPress={() => console.log("Google")}>
          <Image
            source={require("../assets/icons/google.png")}
            style={LandingScreenStyles.thirdPartyImg}
          />
        </Pressable>
        <Pressable onPress={() => console.log("Facebook")}>
          <Image
            source={require("../assets/icons/facebook.png")}
            style={{
              ...LandingScreenStyles.thirdPartyImg,
              width: 45,
              height: 45,
            }}
          />
        </Pressable>
        <Pressable onPress={() => console.log("Apple")}>
          <Image
            source={require("../assets/icons/apple-logo.png")}
            style={LandingScreenStyles.thirdPartyImg}
          />
        </Pressable>
      </View>
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
