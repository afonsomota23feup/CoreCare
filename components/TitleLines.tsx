import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

export type TitleLinesType = {
  welcomeBack?: string;
  login?: string;

  /** Style props */
  titleLinesPosition?: string;
  titleLinesTop?: number | string;
  titleLinesRight?: number | string;
  titleLinesLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TitleLines = ({
  welcomeBack,
  login,
  titleLinesPosition,
  titleLinesTop,
  titleLinesRight,
  titleLinesLeft,
}: TitleLinesType) => {
  const titleLinesStyle = useMemo(() => {
    return {
      ...getStyleValue("position", titleLinesPosition),
      ...getStyleValue("top", titleLinesTop),
      ...getStyleValue("right", titleLinesRight),
      ...getStyleValue("left", titleLinesLeft),
    };
  }, [titleLinesPosition, titleLinesTop, titleLinesRight, titleLinesLeft]);

  return (
    <View style={[styles.titleLines, titleLinesStyle]}>
      <Text style={[styles.welcomeBack, styles.loginTypo]}>{welcomeBack}</Text>
      <Text style={[styles.login, styles.loginTypo]}>{login}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loginTypo: {
    textAlign: "center",
    color: Color.colorDarkslateblue_200,
    fontFamily: FontFamily.headingH4,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  welcomeBack: {
    fontSize: FontSize.size_xl,
    letterSpacing: 0,
    lineHeight: 26,
  },
  login: {
    fontSize: FontSize.size_13xl,
    letterSpacing: -1,
    lineHeight: 42,
    marginTop: 4,
  },
  titleLines: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: 0,
  },
});

export default TitleLines;
