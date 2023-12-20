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
import { SignInScreenStyles } from "../styles";

export default function SignInScreen() {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={{ ...SignInScreenStyles.SignInScreenTitle }}>
        Welcome Back !
      </Text>
      <StatusBar style="auto" />
      <TextInput
        style={{
          ...SignInScreenStyles.SignInScreenInput,
          ...SignInScreenStyles.usernameInput,
        }}
        placeholder="Email"
        autoCapitalize="none"
      />

      <TextInput
        style={{
          ...SignInScreenStyles.SignInScreenInput,
        }}
        placeholder="Password"
        secureTextEntry
      />
      <TouchableOpacity
        style={{
          ...SignInScreenStyles.SignInScreenBtn,
        }}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text
          style={{
            ...SignInScreenStyles.SignInScreenBtnText,
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={SignInScreenStyles.goBackBtn}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text style={SignInScreenStyles.goBackBtnText}>
          Back to Landing Screen
        </Text>
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
