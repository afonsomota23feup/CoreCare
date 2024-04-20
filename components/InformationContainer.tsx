import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Button as RNEButton } from "@rneui/themed";
import { Padding, FontSize, FontFamily, Color } from "../GlobalStyles";

const InformationContainer = () => {
  return (
    <View style={[styles.frame, styles.textLayout]}>
      <View style={[styles.text, styles.textLayout]}>
        <View style={styles.indicators}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/default.png")}
          />
          <Image
            style={[styles.activeIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/active.png")}
          />
          <Image
            style={[styles.activeIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/default.png")}
          />
        </View>
        <Text
          style={[styles.educationInformation, styles.skipButtonSpaceBlock]}
        >{`Education & Information`}</Text>
        <Text
          style={[styles.discoverConciseResources, styles.skipButtonSpaceBlock]}
        >{`Discover concise resources tailored to assist individuals, encompassing common concerns, educational articles, and instructional videos.
`}</Text>
        <RNEButton
          style={[styles.skipButton, styles.skipButtonSpaceBlock]}
          title="Skip Tour"
          radius="5"
          iconPosition="left"
          type="clear"
          titleStyle={styles.skipButtonBtn}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  skipButtonBtn: {
    color: "#82799d",
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Raleway-SemiBold",
  },
  textLayout: {
    height: 178,
    position: "absolute",
  },
  iconLayout: {
    height: 6,
    width: 6,
  },
  skipButtonSpaceBlock: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  activeIcon: {
    marginLeft: 6,
  },
  indicators: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Padding.p_5xs,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  educationInformation: {
    fontSize: FontSize.size_13xl,
    letterSpacing: -1,
    lineHeight: 42,
    fontWeight: "700",
    fontFamily: FontFamily.headingH4,
    color: Color.colorDarkslateblue_200,
    textAlign: "center",
    marginTop: 16,
  },
  discoverConciseResources: {
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    lineHeight: 26,
    fontWeight: "500",
    fontFamily: FontFamily.ralewayMedium,
    color: Color.colorSlategray,
    height: 85,
    textAlign: "center",
    marginTop: 16,
  },
  skipButton: {
    flexDirection: "row",
  },
  text: {
    top: 0,
    right: 15,
    left: 0,
  },
  frame: {
    top: 476,
    left: 16,
    width: 358,
    overflow: "hidden",
  },
});

export default InformationContainer;
