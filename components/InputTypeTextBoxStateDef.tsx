import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

export type InputTypeTextBoxStateDefType = {
  label?: string;
  iconEye?: ImageSourcePropType;
  iconEye1?: boolean;

  /** Style props */
  inputTypeTextBoxStateDefPosition?: string;
  inputTypeTextBoxStateDefBackgroundColor?: string;
  inputTypeTextBoxStateDefElevation?: number;
  inputTypeTextBoxStateDefWidth?: number | string;
  inputTypeTextBoxStateDefHeight?: number | string;
  inputTypeTextBoxStateDefMarginTop?: number | string;
  inputTypeTextBoxStateDefBorderRadius?: number | string;
  inputTypeTextBoxStateDefBorderStyle?: string;
  inputTypeTextBoxStateDefBorderColor?: string;
  inputTypeTextBoxStateDefBorderWidth?: number | string;
  inputTypeTextBoxStateDefFlexDirection?: string;
  inputTypeTextBoxStateDefPaddingHorizontal?: number | string;
  inputTypeTextBoxStateDefPaddingVertical?: number | string;
  inputTypeTextBoxStateDefTop?: number | string;
  inputTypeTextBoxStateDefLeft?: number | string;
  inputTypeTextBoxStateDefAlignSelf?: string;
  placeholderRightIconBackgroundColor?: string;
  labelFontSize?: number;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const InputTypeTextBoxStateDef = ({
  label,
  iconEye,
  iconEye1,
  inputTypeTextBoxStateDefPosition,
  inputTypeTextBoxStateDefBackgroundColor,
  inputTypeTextBoxStateDefElevation,
  inputTypeTextBoxStateDefWidth,
  inputTypeTextBoxStateDefHeight,
  inputTypeTextBoxStateDefMarginTop,
  inputTypeTextBoxStateDefBorderRadius,
  inputTypeTextBoxStateDefBorderStyle,
  inputTypeTextBoxStateDefBorderColor,
  inputTypeTextBoxStateDefBorderWidth,
  inputTypeTextBoxStateDefFlexDirection,
  inputTypeTextBoxStateDefPaddingHorizontal,
  inputTypeTextBoxStateDefPaddingVertical,
  inputTypeTextBoxStateDefTop,
  inputTypeTextBoxStateDefLeft,
  inputTypeTextBoxStateDefAlignSelf,
  placeholderRightIconBackgroundColor,
  labelFontSize,
}: InputTypeTextBoxStateDefType) => {
  const inputTypeTextBoxStateDefStyle = useMemo(() => {
    return {
      ...getStyleValue("position", inputTypeTextBoxStateDefPosition),
      ...getStyleValue(
        "backgroundColor",
        inputTypeTextBoxStateDefBackgroundColor
      ),
      ...getStyleValue("elevation", inputTypeTextBoxStateDefElevation),
      ...getStyleValue("width", inputTypeTextBoxStateDefWidth),
      ...getStyleValue("height", inputTypeTextBoxStateDefHeight),
      ...getStyleValue("marginTop", inputTypeTextBoxStateDefMarginTop),
      ...getStyleValue("borderRadius", inputTypeTextBoxStateDefBorderRadius),
      ...getStyleValue("borderStyle", inputTypeTextBoxStateDefBorderStyle),
      ...getStyleValue("borderColor", inputTypeTextBoxStateDefBorderColor),
      ...getStyleValue("borderWidth", inputTypeTextBoxStateDefBorderWidth),
      ...getStyleValue("flexDirection", inputTypeTextBoxStateDefFlexDirection),
      ...getStyleValue(
        "paddingHorizontal",
        inputTypeTextBoxStateDefPaddingHorizontal
      ),
      ...getStyleValue(
        "paddingVertical",
        inputTypeTextBoxStateDefPaddingVertical
      ),
      ...getStyleValue("top", inputTypeTextBoxStateDefTop),
      ...getStyleValue("left", inputTypeTextBoxStateDefLeft),
      ...getStyleValue("alignSelf", inputTypeTextBoxStateDefAlignSelf),
    };
  }, [
    inputTypeTextBoxStateDefPosition,
    inputTypeTextBoxStateDefBackgroundColor,
    inputTypeTextBoxStateDefElevation,
    inputTypeTextBoxStateDefWidth,
    inputTypeTextBoxStateDefHeight,
    inputTypeTextBoxStateDefMarginTop,
    inputTypeTextBoxStateDefBorderRadius,
    inputTypeTextBoxStateDefBorderStyle,
    inputTypeTextBoxStateDefBorderColor,
    inputTypeTextBoxStateDefBorderWidth,
    inputTypeTextBoxStateDefFlexDirection,
    inputTypeTextBoxStateDefPaddingHorizontal,
    inputTypeTextBoxStateDefPaddingVertical,
    inputTypeTextBoxStateDefTop,
    inputTypeTextBoxStateDefLeft,
    inputTypeTextBoxStateDefAlignSelf,
  ]);

  const placeholderRightIconStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", placeholderRightIconBackgroundColor),
    };
  }, [placeholderRightIconBackgroundColor]);

  const labelStyle = useMemo(() => {
    return {
      ...getStyleValue("fontSize", labelFontSize),
    };
  }, [labelFontSize]);

  return (
    <View
      style={[styles.inputTypetextBoxStatedef, inputTypeTextBoxStateDefStyle]}
    >
      <View style={[styles.placeholderRightIcon, placeholderRightIconStyle]}>
        <Text style={[styles.label, labelStyle]}>{label}</Text>
        {!iconEye1 && (
          <Image style={styles.iconeye} contentFit="cover" source={iconEye} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    flex: 1,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    lineHeight: 26,
    fontWeight: "500",
    fontFamily: FontFamily.ralewayMedium,
    color: Color.colorDarkslateblue_100,
    textAlign: "left",
  },
  iconeye: {
    width: 24,
    height: 24,
    overflow: "hidden",
    display: "none",
    marginLeft: 24,
  },
  placeholderRightIcon: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
  },
  inputTypetextBoxStatedef: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.inkInk06,
    borderWidth: 1,
    width: 327,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_3xs,
  },
});

export default InputTypeTextBoxStateDef;
