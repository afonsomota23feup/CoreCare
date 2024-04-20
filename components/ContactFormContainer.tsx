import * as React from "react";
import { Text, StyleSheet, View, Pressable, Linking } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import HorizontalCard from "./HorizontalCard";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const ContactFormContainer = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.frame}>
      <View style={styles.homeContainer}>
        <View style={styles.homeContainer}>
          <View style={styles.titleUserProfile}>
            <Text style={styles.usefulContacts}>Useful Contacts</Text>
          </View>
          <HorizontalCard
            horizontalCardPosition="unset"
            horizontalCardWidth={343}
            horizontalCardMarginTop={16}
            horizontalCardTop="unset"
            horizontalCardLeft="unset"
            horizontalCardBackgroundColor="rgba(67, 44, 129, 0.06)"
            yourDietChartLineHeight={26}
            yourDietChartFontWeight="unset"
            yourDietChartFontFamily="unset"
            illustrationFlexDirection="unset"
            illustrationPadding="unset"
            illustrationMarginLeft="unset"
            lifesaversArtIconPosition="unset"
            lifesaversArtIconWidth="unset"
            lifesaversArtIconHeight="unset"
            onHorizontalCardPress={() => navigation.navigate("AskAI")}
          />
          <HorizontalCard
            horizontalCardPosition="unset"
            horizontalCardWidth={343}
            horizontalCardMarginTop={16}
            horizontalCardTop="unset"
            horizontalCardLeft="unset"
            horizontalCardBackgroundColor="rgba(67, 44, 129, 0.06)"
            yourDietChartLineHeight={26}
            yourDietChartFontWeight="unset"
            yourDietChartFontFamily="unset"
            illustrationFlexDirection="unset"
            illustrationPadding="unset"
            illustrationMarginLeft="unset"
            onHorizontalCardPress={() => navigation.navigate("AskAI")}
          />
          <HorizontalCard
            horizontalCardPosition="unset"
            horizontalCardWidth={343}
            horizontalCardMarginTop={16}
            horizontalCardTop="unset"
            horizontalCardLeft="unset"
            horizontalCardBackgroundColor="rgba(67, 44, 129, 0.06)"
            yourDietChartLineHeight={26}
            yourDietChartFontWeight="unset"
            yourDietChartFontFamily="unset"
            illustrationFlexDirection="unset"
            illustrationPadding="unset"
            illustrationMarginLeft="unset"
            onHorizontalCardPress={() => navigation.navigate("AskAI")}
          />
          <HorizontalCard
            horizontalCardPosition="unset"
            horizontalCardWidth={343}
            horizontalCardMarginTop={16}
            horizontalCardTop="unset"
            horizontalCardLeft="unset"
            horizontalCardBackgroundColor="rgba(67, 44, 129, 0.06)"
            yourDietChartLineHeight={26}
            yourDietChartFontWeight="unset"
            yourDietChartFontFamily="unset"
            illustrationFlexDirection="unset"
            illustrationPadding="unset"
            illustrationMarginLeft="unset"
            onHorizontalCardPress={() => navigation.navigate("AskAI")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  usefulContacts: {
    flex: 1,
    fontSize: FontSize.headingH4_size,
    letterSpacing: 0,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: FontFamily.headingH4,
    color: Color.colorDarkslateblue_200,
    textAlign: "left",
  },
  titleUserProfile: {
    width: 343,
    flexDirection: "row",
    alignItems: "center",
  },
  homeContainer: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
  },
  frame: {
    position: "absolute",
    top: 31,
    left: -9,
    width: 408,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ContactFormContainer;
