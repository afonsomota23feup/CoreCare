import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  Pressable,
  View,
  Text,
} from "react-native";
import { Image } from "expo-image";
import { Button as RNEButton } from "@rneui/themed";
import { Padding, FontSize, FontFamily, Color } from "../GlobalStyles";

const Tutorial1 = () => {
  return (
    <View style={styles.tutorial1}>
      <View style={styles.frame}>
        <ImageBackground
          style={styles.lifesaversHandIcon}
          resizeMode="cover"
          source={require("../assets/lifesavershand.png")}
        />
        <View style={styles.frame1}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
        </View>
      </View>
      <View style={styles.text}>
        <View style={styles.indicators}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/active1.png")}
          />
          <Image
            style={[styles.defaultIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/default1.png")}
          />
          <Image
            style={[styles.defaultIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/default1.png")}
          />
        </View>
        <Text
          style={[styles.careRegistration, styles.skipButtonSpaceBlock]}
        >{`Care Registration & Tracking`}</Text>
        <Text
          style={[styles.usersCanEasily, styles.skipButtonSpaceBlock]}
        >{`Users can easily access their comprehensive care history, empowering them to track their progress over time. `}</Text>
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
  iconLayout: {
    height: 6,
    width: 6,
  },
  skipButtonSpaceBlock: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  lifesaversHandIcon: {
    width: 343,
    height: 350,
  },
  vectorIcon: {
    height: "68.97%",
    top: "0%",
    right: "0%",
    bottom: "31.03%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  frame1: {
    width: 20,
    height: 29,
    marginLeft: -10,
    overflow: "hidden",
  },
  frame: {
    top: 91,
    width: 353,
    alignItems: "center",
    flexDirection: "row",
    height: 350,
    left: 16,
    position: "absolute",
    overflow: "hidden",
  },
  defaultIcon: {
    marginLeft: 6,
  },
  indicators: {
    justifyContent: "center",
    paddingTop: Padding.p_5xs,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  careRegistration: {
    fontSize: FontSize.size_13xl,
    letterSpacing: -1,
    lineHeight: 42,
    fontWeight: "700",
    fontFamily: FontFamily.headingH4,
    color: Color.colorDarkslateblue_200,
    textAlign: "center",
    marginTop: 16,
  },
  usersCanEasily: {
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
    marginTop: 16,
    flexDirection: "row",
  },
  text: {
    top: 476,
    right: 16,
    height: 178,
    left: 16,
    position: "absolute",
  },
  tutorial1: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Tutorial1;
