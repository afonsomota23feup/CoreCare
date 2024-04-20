import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

export type StyleTypeFillType = {
  label?: string;

  /** Style props */
  styleTypeFillPosition?: string;
  styleTypeFillBorderRadius?: number | string;
  styleTypeFillBackgroundColor?: string;
  styleTypeFillPaddingHorizontal?: number | string;
  styleTypeFillPaddingVertical?: number | string;
  styleTypeFillTop?: number | string;
  styleTypeFillLeft?: number | string;
  styleTypeFillAlignSelf?: string;
  styleTypeFillMarginTop?: number | string;
  styleTypeFillHeight?: number | string;
  styleTypeFillMarginLeft?: number | string;
  labelFontWeight?: string;
  labelFontFamily?: string;

  /** Action props */
  onSignUpButtonPress?: () => void;
  onLoginButtonClick?: () => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StyleTypeFill = ({
  label,
  styleTypeFillPosition,
  styleTypeFillBorderRadius,
  styleTypeFillBackgroundColor,
  styleTypeFillPaddingHorizontal,
  styleTypeFillPaddingVertical,
  styleTypeFillTop,
  styleTypeFillLeft,
  styleTypeFillAlignSelf,
  styleTypeFillMarginTop,
  styleTypeFillHeight,
  styleTypeFillMarginLeft,
  labelFontWeight,
  labelFontFamily,
  onSignUpButtonPress,
  onLoginButtonClick,
}: StyleTypeFillType) => {
  const styleTypeFillStyle = useMemo(() => {
    return {
      ...getStyleValue("position", styleTypeFillPosition),
      ...getStyleValue("borderRadius", styleTypeFillBorderRadius),
      ...getStyleValue("backgroundColor", styleTypeFillBackgroundColor),
      ...getStyleValue("paddingHorizontal", styleTypeFillPaddingHorizontal),
      ...getStyleValue("paddingVertical", styleTypeFillPaddingVertical),
      ...getStyleValue("top", styleTypeFillTop),
      ...getStyleValue("left", styleTypeFillLeft),
      ...getStyleValue("alignSelf", styleTypeFillAlignSelf),
      ...getStyleValue("marginTop", styleTypeFillMarginTop),
      ...getStyleValue("height", styleTypeFillHeight),
      ...getStyleValue("marginLeft", styleTypeFillMarginLeft),
    };
  }, [
    styleTypeFillPosition,
    styleTypeFillBorderRadius,
    styleTypeFillBackgroundColor,
    styleTypeFillPaddingHorizontal,
    styleTypeFillPaddingVertical,
    styleTypeFillTop,
    styleTypeFillLeft,
    styleTypeFillAlignSelf,
    styleTypeFillMarginTop,
    styleTypeFillHeight,
    styleTypeFillMarginLeft,
  ]);

  const label1Style = useMemo(() => {
    return {
      ...getStyleValue("fontWeight", labelFontWeight),
      ...getStyleValue("fontFamily", labelFontFamily),
    };
  }, [labelFontWeight, labelFontFamily]);

  return (
    <View
      style={[styles.styleTypefill, styleTypeFillStyle]}
      onPress={onSignUpButtonPress}
      onClick={onLoginButtonClick}
    >
      <Text style={[styles.label, label1Style]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    flex: 1,
    fontSize: FontSize.size_base,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: FontFamily.ralewaySemiBold,
    color: Color.colorWhite,
    textAlign: "center",
  },
  styleTypefill: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorDarkslateblue_200,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_xs,
  },
});

export default StyleTypeFill;
