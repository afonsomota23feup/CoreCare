import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

export type QuestionChatContainerType = {
  questionText?: string;

  /** Style props */
  propTop?: number | string;
  propLeft?: number | string;
  propWidth?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const QuestionChatContainer = ({
  questionText,
  propTop,
  propLeft,
  propWidth,
}: QuestionChatContainerType) => {
  const questionChatStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
      ...getStyleValue("width", propWidth),
    };
  }, [propTop, propLeft, propWidth]);

  return (
    <View
      style={[styles.questionChat, styles.placeholderLayout, questionChatStyle]}
    >
      <View style={[styles.placeholder, styles.placeholderLayout]}>
        <Text style={styles.label}>{questionText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  placeholderLayout: {
    width: 270,
    backgroundColor: Color.colorWhitesmoke,
  },
  label: {
    flex: 1,
    fontSize: FontSize.size_3xs,
    letterSpacing: 0,
    lineHeight: 26,
    fontWeight: "500",
    fontFamily: FontFamily.ralewayMedium,
    color: Color.colorDarkslateblue_100,
    textAlign: "left",
  },
  placeholder: {
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    alignItems: "center",
    paddingRight: Padding.p_6xl,
  },
  questionChat: {
    position: "absolute",
    top: 76,
    left: 97,
    borderRadius: Border.br_xl,
    height: 26,
    alignItems: "flex-end",
  },
});

export default QuestionChatContainer;
