import * as React from "react";
import { Text, StyleSheet, View, ImageBackground } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import TitleLines from "../components/TitleLines";
import InputTypeTextBoxStateDef from "../components/InputTypeTextBoxStateDef";
import StyleTypeFill from "../components/StyleTypeFill";
import BottomLink from "../components/BottomLink";
import { Padding, Color } from "../GlobalStyles";
import { ScrollView } from "react-native-gesture-handler";
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const Login = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  
  // fetch('http://localhost:3000')
  // .then(response => response.text())
  // .then(text => console.log(text))
  // .catch(error => console.error('Error:', error));

  console.log('Hello');


  return (
    <GestureHandlerRootView style={{flex: 1, marginTop:10}}>
      <TitleLines
        welcomeBack="Welcome Back"
        login="Login"
        titleLinesPosition="absolute"
        titleLinesTop={43}
        titleLinesRight={0}
        titleLinesLeft={0}
      />
      <View style={styles.loginData}>
        <ImageBackground
          style={styles.fitzStandingIcon}
          resizeMode="cover"
          source={require("../assets/fitzstanding.png")}
        />
        <View style={styles.loginFormSpaceBlock}>
          <TextInput
            style={styles.textWrapper}
            mode="outlined"
            placeholder="Email"
            placeholderTextColor="#7b6ba8"
            theme={{
              fonts: {
                regular: { fontFamily: "Raleway-Regular", fontWeight: "100" },
              },
              colors: { text: "#432c81" },
            }}
            value={email}
            onChangeText={setEmail}    
            textAlignVertical="bottom" // Align placeholder text to bottom      
          />
          <TextInput
            style={styles.textWrapper}
            mode="outlined"
            placeholder="Password"
            placeholderTextColor="#7b6ba8"
            theme={{
              fonts: {
                regular: { fontFamily: "Raleway-Regular", fontWeight: "100" },
              },
              colors: { text: "#432c81" },
            }}
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <Button
          style={styles.loginFormSpaceBlock}
          mode="contained"
          labelStyle={styles.loginButtonBtn}
          onPress={() => navigation.navigate("HomePage")}
        >
          Login
        </Button>
        <Button
          style={styles.loginFormSpaceBlock}
          mode="outlined"
          labelStyle={styles.forgotPasswordLinkBtn}
        >
          Forgot Password?
        </Button>

        <StyleTypeFill
          styleTypeFillPosition="unset"
          styleTypeFillBackgroundColor="unset"
          styleTypeFillPaddingHorizontal="unset"
          styleTypeFillPaddingVertical="unset"
          styleTypeFillTop="unset"
          styleTypeFillLeft="unset"
          styleTypeFillAlignSelf="stretch"
          styleTypeFillMarginTop={0}
          styleTypeFillHeight="unset"
          styleTypeFillMarginLeft="unset"
          onLoginButtonClick={() => {}}
        />
        <BottomLink
          dontHaveAnAccount="Don’t have an account?"
          signUp="Sign Up"
          bottomLinkPosition="unset"
          bottomLinkAlignSelf="stretch"
          bottomLinkMarginTop={10}
          signUpFontWeight="unset"
          signUpFontFamily="unset"
          signUpColor="unset"
          signUpTextAlign="unset"
          onLoginPress={() => navigation.navigate("SignUp")}
        />
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  forgotPasswordLinkBtn: {
    color: "#432c81",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Raleway-Medium",
  },
  loginButtonBtn: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Raleway-SemiBold",
  },

  fitzStandingIcon: {
    width: 379,
    height: 309,
  },
  textWrapper: {
    justifyContent: "flex-end",
    marginTop: 16,
    alignSelf: "stretch",
    width: "100%", // Adjust the width of the input text box
    height: 50, // Adjust the height of the input text box
  },

  loginFormSpaceBlock: {
    marginTop: 20,
    alignSelf: "stretch",
  },
  loginData: {
    position: "absolute",
    top: 136,
    right: 0,
    left: 0,
    height: 708,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: 0,
  },
  login: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
  input: {
    marginTop: 16,
    alignSelf: "stretch",
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
  },
});

export default Login;
