import * as React from "react";
import { Button } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import ResourceAccessContainer from "../components/ResourceAccessContainer";
import StyleTypeFill from "../components/StyleTypeFill";
import { Color } from "../GlobalStyles";

const Tutorial2 = () => {
  return (
    <View style={styles.tutorial3}>
      <ResourceAccessContainer />
      <StyleTypeFill
        styleTypeFillPosition="absolute"
        styleTypeFillBackgroundColor="unset"
        styleTypeFillPaddingHorizontal="unset"
        styleTypeFillPaddingVertical="unset"
        styleTypeFillTop={711}
        styleTypeFillLeft={16}
        styleTypeFillAlignSelf="unset"
        styleTypeFillMarginTop="unset"
        styleTypeFillHeight="unset"
        styleTypeFillMarginLeft="unset"
      />
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
    width: 343,
  },
  tutorial3: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Tutorial2;
