import * as React from "react";
import { TextInput, Button } from "react-native-paper";
import { StyleSheet, View, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import InputTypeTextBoxStateDef from "./InputTypeTextBoxStateDef";
import StyleTypeFill from "./StyleTypeFill";
import BottomLink from "./BottomLink";
import { Padding } from "../GlobalStyles";

const FormFrame = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.frame}>
      <View style={styles.signUpData}>
        <View style={styles.signUpForm}>
          <InputTypeTextBoxStateDef
            inputTypeTextBoxStateDefPosition="unset"
            inputTypeTextBoxStateDefBackgroundColor="#fff"
            inputTypeTextBoxStateDefWidth="unset"
            inputTypeTextBoxStateDefHeight="unset"
            inputTypeTextBoxStateDefMarginTop="unset"
            inputTypeTextBoxStateDefBorderRadius={8}
            inputTypeTextBoxStateDefBorderStyle="solid"
            inputTypeTextBoxStateDefBorderColor="#edecf4"
            inputTypeTextBoxStateDefBorderWidth={1}
            inputTypeTextBoxStateDefFlexDirection="column"
            inputTypeTextBoxStateDefPaddingHorizontal="unset"
            inputTypeTextBoxStateDefPaddingVertical="unset"
            inputTypeTextBoxStateDefTop="unset"
            inputTypeTextBoxStateDefLeft="unset"
            inputTypeTextBoxStateDefAlignSelf="stretch"
          />
          <InputTypeTextBoxStateDef
            inputTypeTextBoxStateDefPosition="unset"
            inputTypeTextBoxStateDefBackgroundColor="unset"
            inputTypeTextBoxStateDefWidth="unset"
            inputTypeTextBoxStateDefHeight="unset"
            inputTypeTextBoxStateDefMarginTop={16}
            inputTypeTextBoxStateDefBorderRadius={8}
            inputTypeTextBoxStateDefBorderStyle="solid"
            inputTypeTextBoxStateDefBorderColor="unset"
            inputTypeTextBoxStateDefFlexDirection="column"
            inputTypeTextBoxStateDefPaddingHorizontal="unset"
            inputTypeTextBoxStateDefPaddingVertical="unset"
            inputTypeTextBoxStateDefTop="unset"
            inputTypeTextBoxStateDefLeft="unset"
            inputTypeTextBoxStateDefAlignSelf="stretch"
          />
        </View>
        <TextInput
          style={styles.passwordWrapper}
          mode="outlined"
          placeholderTextColor="#7b6ba8"
          theme={{
            fonts: { regular: { fontFamily: "Raleway", fontWeight: "Medium" } },
            colors: { text: "#432c81" },
          }}
        />
        <StyleTypeFill
          styleTypeFillPosition="unset"
          styleTypeFillBackgroundColor="unset"
          styleTypeFillPaddingHorizontal="unset"
          styleTypeFillPaddingVertical="unset"
          styleTypeFillTop="unset"
          styleTypeFillLeft="unset"
          styleTypeFillAlignSelf="stretch"
          styleTypeFillMarginTop={24}
          styleTypeFillHeight="unset"
          styleTypeFillMarginLeft="unset"
          onSignUpButtonPress={() => navigation.navigate("AccountCreation")}
        />
        <BottomLink
          dontHaveAnAccount="Already have an account?"
          signUp="Login"
          bottomLinkPosition="unset"
          bottomLinkAlignSelf="stretch"
          bottomLinkMarginTop={24}
          signUpFontWeight="unset"
          signUpFontFamily="unset"
          signUpColor="unset"
          signUpTextAlign="unset"
          onLoginPress={() => navigation.navigate("Login")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signUpButtonBtn: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Raleway-SemiBold",
  },
  signUpButtonBtn1: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  loginBtn: {
    color: "#432c81",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Raleway-Medium",
  },
  signUpForm: {
    alignSelf: "stretch",
  },
  passwordWrapper: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginTop: 24,
    alignSelf: "stretch",
  },
  signUpData: {
    top: 0,
    right: 14,
    left: 0,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: 0,
    position: "absolute",
  },
  frame: {
    top: 498,
    left: -7,
    width: 404,
    height: 289,
    overflow: "hidden",
    position: "absolute",
  },
});

export default FormFrame;
