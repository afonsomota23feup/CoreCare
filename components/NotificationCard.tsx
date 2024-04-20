import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Padding, FontSize, FontFamily, Color, Border } from "../GlobalStyles";

export type NotificationCardType = {
  round?: ImageSourcePropType;
  loremIpsumDolorSitAmetCon?: string;

  /** Style props */
  notificationCardPosition?: string;
  notificationCardMarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const NotificationCard = ({
  round,
  loremIpsumDolorSitAmetCon,
  notificationCardPosition,
  notificationCardMarginTop,
}: NotificationCardType) => {
  const notificationCardStyle = useMemo(() => {
    return {
      ...getStyleValue("position", notificationCardPosition),
      ...getStyleValue("marginTop", notificationCardMarginTop),
    };
  }, [notificationCardPosition, notificationCardMarginTop]);

  return (
    <View style={[styles.notificationCard, notificationCardStyle]}>
      <View style={styles.mainContainer}>
        <View style={styles.leftCircle}>
          <Image style={styles.roundIcon} contentFit="cover" source={round} />
        </View>
        <View style={styles.titleText}>
          <Text
            style={[styles.notificationTitle, styles.loremIpsumDolorFlexBox]}
          >
            Notification Title
          </Text>
          <Text style={[styles.loremIpsumDolor, styles.loremIpsumDolorFlexBox]}>
            {loremIpsumDolorSitAmetCon}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loremIpsumDolorFlexBox: {
    textAlign: "left",
    alignSelf: "stretch",
  },
  roundIcon: {
    width: 10,
    height: 10,
  },
  leftCircle: {
    height: 72,
    paddingTop: Padding.p_5xs,
    flexDirection: "row",
  },
  notificationTitle: {
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    lineHeight: 26,
    fontWeight: "500",
    fontFamily: FontFamily.ralewayMedium,
    color: Color.colorDarkslateblue_200,
  },
  loremIpsumDolor: {
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    fontFamily: FontFamily.interRegular,
    color: Color.colorDarkslateblue_100,
    marginTop: 4,
  },
  titleText: {
    marginLeft: 16,
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    flexDirection: "row",
  },
  notificationCard: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.inkInk06,
    borderWidth: 1,
    padding: Padding.p_base,
    flexDirection: "row",
    alignSelf: "stretch",
  },
});

export default NotificationCard;
