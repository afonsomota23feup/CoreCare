import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

export type HorizontalCardType = {
  yourDietChart?: string;

  /** Style props */
  horizontalCardPosition?: string;
  horizontalCardWidth?: number | string;
  horizontalCardMarginTop?: number | string;
  horizontalCardTop?: number | string;
  horizontalCardLeft?: number | string;
  horizontalCardBackgroundColor?: string;
  yourDietChartLineHeight?: number;
  yourDietChartFontSize?: number | string;
  yourDietChartFontWeight?: string;
  yourDietChartFontFamily?: string;
  illustrationFlexDirection?: string;
  illustrationPadding?: number | string;
  illustrationMarginLeft?: number | string;
  lifesaversArtIconPosition?: string;
  lifesaversArtIconWidth?: number | string;
  lifesaversArtIconHeight?: number | string;

  /** Action props */
  onHorizontalCardPress?: () => void;
  onPropPress?: () => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const HorizontalCard = ({
  yourDietChart,
  horizontalCardPosition,
  horizontalCardWidth,
  horizontalCardMarginTop,
  horizontalCardTop,
  horizontalCardLeft,
  horizontalCardBackgroundColor,
  yourDietChartLineHeight,
  yourDietChartFontSize,
  yourDietChartFontWeight,
  yourDietChartFontFamily,
  illustrationFlexDirection,
  illustrationPadding,
  illustrationMarginLeft,
  lifesaversArtIconPosition,
  lifesaversArtIconWidth,
  lifesaversArtIconHeight,
  onHorizontalCardPress,
  onPropPress,
}: HorizontalCardType) => {
  const horizontalCardStyle = useMemo(() => {
    return {
      ...getStyleValue("position", horizontalCardPosition),
      ...getStyleValue("width", horizontalCardWidth),
      ...getStyleValue("marginTop", horizontalCardMarginTop),
      ...getStyleValue("top", horizontalCardTop),
      ...getStyleValue("left", horizontalCardLeft),
      ...getStyleValue("backgroundColor", horizontalCardBackgroundColor),
    };
  }, [
    horizontalCardPosition,
    horizontalCardWidth,
    horizontalCardMarginTop,
    horizontalCardTop,
    horizontalCardLeft,
    horizontalCardBackgroundColor,
  ]);

  const yourDietChartStyle = useMemo(() => {
    return {
      ...getStyleValue("lineHeight", yourDietChartLineHeight),
      ...getStyleValue("fontSize", yourDietChartFontSize),
      ...getStyleValue("fontWeight", yourDietChartFontWeight),
      ...getStyleValue("fontFamily", yourDietChartFontFamily),
    };
  }, [
    yourDietChartLineHeight,
    yourDietChartFontSize,
    yourDietChartFontWeight,
    yourDietChartFontFamily,
  ]);

  const illustrationStyle = useMemo(() => {
    return {
      ...getStyleValue("flexDirection", illustrationFlexDirection),
      ...getStyleValue("padding", illustrationPadding),
      ...getStyleValue("marginLeft", illustrationMarginLeft),
    };
  }, [illustrationFlexDirection, illustrationPadding, illustrationMarginLeft]);

  const lifesaversArtIconStyle = useMemo(() => {
    return {
      ...getStyleValue("position", lifesaversArtIconPosition),
      ...getStyleValue("width", lifesaversArtIconWidth),
      ...getStyleValue("height", lifesaversArtIconHeight),
    };
  }, [
    lifesaversArtIconPosition,
    lifesaversArtIconWidth,
    lifesaversArtIconHeight,
  ]);

  return (
    <View
      style={[styles.horizontalCard, horizontalCardStyle]}
      onPress={onHorizontalCardPress}
    >
      <Text style={[styles.yourDietChart, yourDietChartStyle]}>
        {yourDietChart}
      </Text>
      <View style={[styles.illustration, illustrationStyle]}>
        <Image
          style={[styles.lifesaversArtIcon, lifesaversArtIconStyle]}
          contentFit="cover"
          source={require("../assets/lifesavers-art.png")}
          onPress={onPropPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  yourDietChart: {
    flex: 1,
    fontSize: FontSize.size_xl,
    letterSpacing: 0,
    lineHeight: 26,
    fontWeight: "700",
    fontFamily: FontFamily.headingH4,
    color: Color.colorDarkslateblue_200,
    textAlign: "left",
  },
  lifesaversArtIcon: {
    width: 144,
    height: 108,
  },
  illustration: {
    padding: Padding.p_9xs,
    marginLeft: 10,
  },
  horizontalCard: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.inkInk06,
    width: 350,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
  },
});

export default HorizontalCard;
