import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const ExerciseContainer = () => {
  return (
    <View style={[styles.frame, styles.frameFlexBox]}>
      <View style={styles.frame1}>
        <View style={[styles.frame2, styles.frame2Layout]}>
          <View style={styles.frame2Layout} />
          <View style={styles.frame3}>
            <Image
              style={styles.image1Icon}
              contentFit="cover"
              source={require("../assets/image-1.png")}
            />
          </View>
        </View>
        <View style={[styles.frame4, styles.frameFlexBox]}>
          <Text style={styles.startOnAll}>{`Start on all fours
Lift arm and leg
Keep them parallel
Repeat with opposite side
Do it 20 times per side`}</Text>
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
  frame2Layout: {
    height: 409,
    width: 343,
  },
  image1Icon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 315,
    height: 200,
  },
  frame3: {
    width: 324,
    height: 341,
    marginTop: -331,
    overflow: "hidden",
  },
  frame2: {
    justifyContent: "flex-end",
    alignItems: "center",
    overflow: "hidden",
  },
  startOnAll: {
    fontSize: FontSize.headingH4_size,
    letterSpacing: 0,
    lineHeight: 32,
    fontFamily: FontFamily.cagliostroRegular,
    color: Color.colorDarkslateblue_200,
    textAlign: "center",
  },
  frame4: {
    width: 335,
  },
  frame1: {
    width: 343,
    alignItems: "center",
    overflow: "hidden",
  },
  frame: {
    width: 344,
    marginTop: 54,
    alignItems: "center",
  },
});

export default ExerciseContainer;
