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
import { useState } from "react";

interface registerScreenState {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password1: string;
  password2: string;
}

export default function RegisterScreen() {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState<registerScreenState>({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password1: "",
    password2: "",
  });
  const handleInfoChange = (info: { name: string; value: string }) => {
    setUserInfo((prev) => ({ ...prev, [info.name]: info.value }));
  };
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
        value={userInfo?.first_name}
        onChange={(event) => {
          handleInfoChange({
            name: "first_name",
            value: event.nativeEvent.text,
          });
        }}
      />
      <TextInput
        style={{
          ...SignInScreenStyles.SignInScreenInput,
        }}
        placeholder="Last Name"
        autoCapitalize="none"
        value={userInfo?.last_name}
        onChange={(event) => {
          handleInfoChange({
            name: "last_name",
            value: event.nativeEvent.text,
          });
        }}
      />
      <TextInput
        style={{
          ...SignInScreenStyles.SignInScreenInput,
        }}
        placeholder="Username"
        autoCapitalize="none"
        value={userInfo?.username}
        onChange={(event) => {
          handleInfoChange({
            name: "username",
            value: event.nativeEvent.text,
          });
        }}
      />
      <TextInput
        style={{
          ...SignInScreenStyles.SignInScreenInput,
        }}
        placeholder="Email"
        autoCapitalize="none"
        value={userInfo?.email}
        onChange={(event) => {
          handleInfoChange({
            name: "email",
            value: event.nativeEvent.text,
          });
        }}
      />
      <TextInput
        style={{
          ...SignInScreenStyles.SignInScreenInput,
        }}
        placeholder="Password"
        secureTextEntry
        value={userInfo?.password1}
        onChange={(event) => {
          handleInfoChange({
            name: "password1",
            value: event.nativeEvent.text,
          });
        }}
      />
      <TextInput
        style={{
          ...SignInScreenStyles.SignInScreenInput,
        }}
        placeholder="Confirm Password"
        secureTextEntry
        value={userInfo?.password2}
        onChange={(event) => {
          handleInfoChange({
            name: "password2",
            value: event.nativeEvent.text,
          });
        }}
      />
      <TouchableOpacity
        style={{
          ...SignInScreenStyles.SignInScreenBtn,
        }}
        onPress={() => {
          console.log(userInfo);
          // navigation.navigate("Home");
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
