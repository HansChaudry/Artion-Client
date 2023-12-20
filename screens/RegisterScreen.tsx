import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SignInScreenStyles } from "../styles";

export default function RegisterScreen() {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={{ ...SignInScreenStyles.SignInScreenTitle }}>
        Join Artions!
      </Text>
      <StatusBar style="auto" />
      <TextInput
        style={{
          ...SignInScreenStyles.SignInScreenInput,
        }}
        placeholder="First Name"
        autoCapitalize="none"
      />
      <TextInput
        style={{
          ...SignInScreenStyles.SignInScreenInput,
        }}
        placeholder="Last Name"
        autoCapitalize="none"
      />
      <TextInput
        style={{
          ...SignInScreenStyles.SignInScreenInput,
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
      <TextInput
        style={{
          ...SignInScreenStyles.SignInScreenInput,
        }}
        placeholder="Confirm Password"
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
          Register
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
