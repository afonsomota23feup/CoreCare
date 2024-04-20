import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

export type BottomLinkType = {
  dontHaveAnAccount?: string;
  signUp?: string;

  /** Style props */
  bottomLinkPosition?: string;
  bottomLinkAlignSelf?: string;
  bottomLinkMarginTop?: number | string;
  signUpFontSize?: number | string;
  signUpLineHeight?: number | string;
  signUpFontWeight?: string;
  signUpFontFamily?: string;
  signUpColor?: string;
  signUpTextAlign?: string;

  /** Action props */
  onLoginPress?: () => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const BottomLink = ({
  dontHaveAnAccount,
  signUp,
  bottomLinkPosition,
  bottomLinkAlignSelf,
  bottomLinkMarginTop,
  signUpFontSize,
  signUpLineHeight,
  signUpFontWeight,
  signUpFontFamily,
  signUpColor,
  signUpTextAlign,
  onLoginPress,
}: BottomLinkType) => {
  const bottomLinkStyle = useMemo(() => {
    return {
      ...getStyleValue("position", bottomLinkPosition),
      ...getStyleValue("alignSelf", bottomLinkAlignSelf),
      ...getStyleValue("marginTop", bottomLinkMarginTop),
    };
  }, [bottomLinkPosition, bottomLinkAlignSelf, bottomLinkMarginTop]);

  const signUpStyle = useMemo(() => {
    return {
      ...getStyleValue("fontSize", signUpFontSize),
      ...getStyleValue("lineHeight", signUpLineHeight),
      ...getStyleValue("fontWeight", signUpFontWeight),
      ...getStyleValue("fontFamily", signUpFontFamily),
      ...getStyleValue("color", signUpColor),
      ...getStyleValue("textAlign", signUpTextAlign),
    };
  }, [
    signUpFontSize,
    signUpLineHeight,
    signUpFontWeight,
    signUpFontFamily,
    signUpColor,
    signUpTextAlign,
  ]);

  return (
    <View style={[styles.bottomLink, bottomLinkStyle]}>
      <Text style={[styles.dontHaveAn, styles.signUpTypo]}>
        {dontHaveAnAccount}
      </Text>
      <Text
        style={[styles.signUp, styles.signUpTypo, signUpStyle]}
        onPress={onLoginPress}
      >
        {signUp}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  signUpTypo: {
    textAlign: "left",
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
    lineHeight: 21,
    fontSize: FontSize.size_sm,
  },
  dontHaveAn: {
    color: Color.colorSlategray,
  },
  signUp: {
    color: Color.colorDarkslateblue_200,
    marginLeft: 8,
  },
  bottomLink: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
  },
});

export default BottomLink;
