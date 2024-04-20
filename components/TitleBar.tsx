import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

export type TitleBarType = {
  iconBack?: ImageSourcePropType;
  login?: string;
  showIconBack?: boolean;

  /** Style props */
  titleBarPosition?: string;
  titleBarBackgroundColor?: string;
  titleBarWidth?: number | string;
  titleBarTop?: number | string;
  titleBarRight?: number | string;
  titleBarLeft?: number | string;
  loginFontSize?: number;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TitleBar = ({
  iconBack,
  login,
  showIconBack,
  titleBarPosition,
  titleBarBackgroundColor,
  titleBarWidth,
  titleBarTop,
  titleBarRight,
  titleBarLeft,
  loginFontSize,
}: TitleBarType) => {
  const titleBarStyle = useMemo(() => {
    return {
      ...getStyleValue("position", titleBarPosition),
      ...getStyleValue("backgroundColor", titleBarBackgroundColor),
      ...getStyleValue("width", titleBarWidth),
      ...getStyleValue("top", titleBarTop),
      ...getStyleValue("right", titleBarRight),
      ...getStyleValue("left", titleBarLeft),
    };
  }, [
    titleBarPosition,
    titleBarBackgroundColor,
    titleBarWidth,
    titleBarTop,
    titleBarRight,
    titleBarLeft,
  ]);

  const loginStyle = useMemo(() => {
    return {
      ...getStyleValue("fontSize", loginFontSize),
    };
  }, [loginFontSize]);

  return (
    <View style={[styles.titleBar, titleBarStyle]}>
      {showIconBack && (
        <Image style={styles.iconback} contentFit="cover" source={iconBack} />
      )}
      <Text style={[styles.login, loginStyle]}>{login}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconback: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  login: {
    fontSize: FontSize.size_xl,
    letterSpacing: 0,
    lineHeight: 26,
    fontWeight: "700",
    fontFamily: FontFamily.headingH4,
    color: Color.colorDarkslateblue_200,
    textAlign: "left",
    width: 279,
    marginLeft: 0,
  },
  titleBar: {
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    width: 375,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_3xs,
  },
});

export default TitleBar;
