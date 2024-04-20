import * as React from "react";
import { Button as RNEButton } from "@rneui/themed";
import { StyleSheet, ImageBackground, View, Text } from "react-native";
import { Image } from "expo-image";
import { Padding, FontSize, FontFamily, Color } from "../GlobalStyles";

const ResourceAccessContainer = () => {
  return (
    <View style={[styles.frame, styles.frameLayout]}>
      <ImageBackground
        style={[styles.frameIcon, styles.frameLayout]}
        resizeMode="cover"
        source={require("../assets/frame2.png")}
      >
        <RNEButton
          radius={5}
          iconPosition="left"
          type="solid"
          color="#8c8c8c"
          containerStyle={styles.vectorIconBtn}
          buttonStyle={styles.vectorIconBtn1}
        />
      </ImageBackground>
      <View style={styles.text}>
        <View style={styles.indicators}>
          <Image
            style={styles.defaultIconLayout}
            contentFit="cover"
            source={require("../assets/default.png")}
          />
          <Image
            style={[styles.defaultIcon1, styles.defaultIconLayout]}
            contentFit="cover"
            source={require("../assets/default.png")}
          />
          <Image
            style={[styles.defaultIcon1, styles.defaultIconLayout]}
            contentFit="cover"
            source={require("../assets/active.png")}
          />
        </View>
        <Text
          style={[styles.accessToResources, styles.accessFlexBox]}
        >{`Access to resources & support`}</Text>
        <Text style={[styles.accessToHelplines, styles.accessFlexBox]}>
          Access to helplines for emergency and emotional support, all
          conveniently available on our platform.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconBtn: {
    left: "0%",
    right: "94.17%",
    top: "91.71%",
    bottom: "2.57%",
    position: "absolute",
  },
  vectorIconBtn1: {
    height: "5.71%",
    width: "5.83%",
  },
  frameLayout: {
    overflow: "hidden",
    width: 343,
  },
  defaultIconLayout: {
    height: 6,
    width: 6,
  },
  accessFlexBox: {
    marginTop: 16,
    textAlign: "center",
    alignSelf: "stretch",
  },
  frameIcon: {
    height: 350,
  },
  defaultIcon1: {
    marginLeft: 6,
  },
  indicators: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: Padding.p_5xs,
    alignSelf: "stretch",
    alignItems: "center",
  },
  accessToResources: {
    fontSize: FontSize.size_13xl,
    letterSpacing: -1,
    lineHeight: 42,
    fontWeight: "700",
    fontFamily: FontFamily.headingH4,
    color: Color.colorDarkslateblue_200,
  },
  accessToHelplines: {
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    lineHeight: 26,
    fontWeight: "500",
    fontFamily: FontFamily.ralewayMedium,
    color: Color.colorSlategray,
    height: 85,
  },
  text: {
    height: 178,
    marginTop: 35,
    alignSelf: "stretch",
  },
  frame: {
    position: "absolute",
    top: 71,
    left: 16,
    height: 563,
    alignItems: "center",
  },
});

export default ResourceAccessContainer;
