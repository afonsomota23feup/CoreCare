import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

const SessionContainer = () => {
  return (
    <View style={[styles.frame, styles.frameFlexBox]}>
      <View style={[styles.frame1, styles.frameFlexBox]}>
        <Text style={[styles.label, styles.labelTypo]}>Finish session</Text>
      </View>
      <View style={[styles.frame2, styles.frameFlexBox]}>
        <View style={styles.homeContainer}>
          <View style={styles.titleUserProfile}>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector.png")}
            />
            <Text style={[styles.backStrength, styles.labelTypo]}>
              Back strength
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    justifyContent: "center",
    overflow: "hidden",
  },
  labelTypo: {
    fontFamily: FontFamily.headingH4,
    fontWeight: "700",
    flex: 1,
  },
  label: {
    fontSize: FontSize.size_base,
    lineHeight: 18,
    color: Color.colorWhite,
    textAlign: "center",
    width: 279,
  },
  frame1: {
    width: 342,
  },
  vectorIcon: {
    width: 18,
    height: 11,
  },
  backStrength: {
    fontSize: FontSize.headingH4_size,
    letterSpacing: 0,
    lineHeight: 32,
    color: Color.colorDarkslateblue_200,
    textAlign: "left",
    marginLeft: 16,
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
  frame2: {
    marginTop: 1,
    alignItems: "center",
    width: 376,
    justifyContent: "center",
    overflow: "hidden",
  },
  frame: {
    height: 51,
    alignItems: "center",
    width: 376,
    justifyContent: "center",
    overflow: "hidden",
  },
});

export default SessionContainer;
