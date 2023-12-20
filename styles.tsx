import { StyleSheet } from "react-native";

const fonts = {
  bold: "Poppins_600SemiBold",
  regular: "Poppins_400Regular",
};

export const LandingScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    width: "100%",
  },
  LandingScreenTitle: { fontFamily: fonts.bold, fontSize: 25 },
  LandingScreenBtn: {
    width: "85%", // Adjust the width as needed
    marginTop: 20,
    padding: 15,
    backgroundColor: "black",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 5,
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
  LandingScreenBtnText: {
    color: "white",
    fontSize: 25,
    fontFamily: fonts.bold,
  },
  image: {
    width: "50%",
  },
  bottomView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  thirdPartyImg: {
    width: 40,
    resizeMode: "contain",
    height: 45,
  },
});

export const SignInScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFBA00",
  },
  SignInScreenTitle: {
    fontSize: 40,
    marginBottom: 20,
    color: "black",
    fontFamily: fonts.bold,
    textAlign: "center",
  },
  SignInScreenInput: {
    width: "90%",
    height: 50,
    borderColor: "black",
    borderWidth: 1.5,
    marginBottom: 20,
    padding: 12,
    borderRadius: 5,
    fontSize: 15.5,
    fontFamily: fonts.regular,
    backgroundColor: "white",
  },
  SignInScreenBtn: {
    width: "90%",
    padding: 15,
    backgroundColor: "black",
    borderRadius: 5,
    alignItems: "center",
    marginTop: 15,
    color: "white",
  },
  SignInScreenBtnText: { color: "white", fontSize: 25, fontFamily: fonts.bold },
  usernameInput: {
    marginTop: 30,
  },
  goBackBtn: {
    marginTop: 20,
    padding: 10,
    alignItems: "center",
  },
  goBackBtnText: {
    color: "#4169E1",
    fontSize: 18,
    fontFamily: "Poppins_400Regular",
  },
});

export const homeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
    marginBottom: 20,
    color: "black",
    fontFamily: fonts.bold,
    textAlign: "center",
  },
});
