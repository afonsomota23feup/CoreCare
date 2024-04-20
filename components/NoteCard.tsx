import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

export type NoteCardType = {
  today?: string;

  /** Style props */
  noteCardPosition?: string;
  noteCardMarginLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const NoteCard = ({
  today,
  noteCardPosition,
  noteCardMarginLeft,
}: NoteCardType) => {
  const noteCardStyle = useMemo(() => {
    return {
      ...getStyleValue("position", noteCardPosition),
      ...getStyleValue("marginLeft", noteCardMarginLeft),
    };
  }, [noteCardPosition, noteCardMarginLeft]);

  return (
    <View style={[styles.noteCard, noteCardStyle]}>
      <Text style={[styles.today, styles.todayTypo]}>{today}</Text>
      <Text style={[styles.loremIpsumDolor, styles.todayTypo]}>
        Lorem ipsum dolor sit amet, consectetur Lo...
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  todayTypo: {
    textAlign: "left",
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
    alignSelf: "stretch",
  },
  today: {
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    lineHeight: 26,
    color: Color.colorDarkslateblue_200,
  },
  loremIpsumDolor: {
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    color: Color.colorDarkslateblue_100,
    marginTop: 8,
  },
  noteCard: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xl,
    alignSelf: "stretch",
    flex: 1,
  },
});

export default NoteCard;
