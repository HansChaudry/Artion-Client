import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Image,
  Platform,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SignInScreenStyles } from "../styles";
import axios, { Axios } from "axios";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface signInScreenState {
  username: string;
  password: string;
}

export default function SignInScreen() {
  const [userInfo, setUserInfo] = useState<signInScreenState>({
    username: "",
    password: "",
  });
  const navigation = useNavigation();

  const handleInfoChange = (info: { name: string; value: string }) => {
    setUserInfo((prev) => ({ ...prev, [info.name]: info.value }));
  };

  const handleSignIn = async () => {
    const data = new FormData();
    data.append("username", userInfo.username);
    data.append("password", userInfo.password);
    try {
      const response = await axios.post(
        `http://${
          Platform.OS === "ios" ? "localhost" : "10.0.2.2"
        }:8000/users/signin`,
        data
      );

      AsyncStorage.setItem(
        "sessionID",
        response?.headers["set-cookie"][0].split(";")[0].replace(/"/g, "")
      );
      navigation.navigate("Home");
    } catch (error) {
      Alert.alert(
        "Sign In Error",
        "Please enter a correct username and password.\n\nNote that both fields may be case-sensitive.",
        [
          {
            text: "OK",
            onPress: () => {},
          },
        ]
      );
    }
  };

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
        value={userInfo.username}
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
        placeholder="Password"
        secureTextEntry
        value={userInfo.password}
        onChange={(event) => {
          handleInfoChange({
            name: "password",
            value: event.nativeEvent.text,
          });
        }}
      />
      <TouchableOpacity
        style={{
          ...SignInScreenStyles.SignInScreenBtn,
        }}
        onPress={handleSignIn}
      >
        <Text
          style={{
            ...SignInScreenStyles.SignInScreenBtnText,
          }}
        >
          Sign in
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
