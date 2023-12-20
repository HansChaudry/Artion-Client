import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LoginPageStyles } from "../styles";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

export default function LoginScreen() {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={{ ...LoginPageStyles.LoginPageTitle }}>Welcome Back !</Text>
      <StatusBar style="auto" />
      <TextInput
        style={{
          ...LoginPageStyles.LoginPageInput,
          ...LoginPageStyles.usernameInput,
        }}
        placeholder="Email"
        autoCapitalize="none"
      />

      <TextInput
        style={{
          ...LoginPageStyles.LoginPageInput,
        }}
        placeholder="Password"
        secureTextEntry
      />
      <TouchableOpacity
        style={{
          ...LoginPageStyles.LoginPageBtn,
        }}
        disabled
        onPress={() => {}}
      >
        <Text
          style={{
            ...LoginPageStyles.LoginPageBtnText,
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={LoginPageStyles.thirdPartyBtn}
        disabled
        onPress={() => {}}
      >
        <Image
          source={require("../assets/icons/google.png")}
          style={LoginPageStyles.thirdPartyImg}
        />
        <Text style={LoginPageStyles.thirdPartyBtnText}>
          Log in with Google
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={LoginPageStyles.goBackBtn}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text style={LoginPageStyles.goBackBtnText}>Back to Landing Page</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
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
