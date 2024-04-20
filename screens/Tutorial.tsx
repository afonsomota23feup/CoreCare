import * as React from "react";
import { Button as RNEButton } from "@rneui/themed";
import { StyleSheet, ImageBackground, View } from "react-native";
import InformationContainer from "../components/InformationContainer";
import { Color } from "../GlobalStyles";

const Tutorial = () => {
  return (
    <View style={styles.tutorial2}>
      <InformationContainer />
      <View style={styles.frame}>
        <View style={[styles.frame1, styles.framePosition]}>
          <RNEButton
            radius="5"
            iconPosition="left"
            type="clear"
            color="#8c8c8c"
            containerStyle={styles.vectorIconBtn}
            buttonStyle={styles.vectorIconBtn1}
          />
          <ImageBackground
            style={[styles.frameIcon, styles.framePosition]}
            resizeMode="cover"
            source={require("../assets/frame.png")}
          >
            <RNEButton
              radius={5}
              iconPosition="left"
              type="solid"
              color="#8c8c8c"
              containerStyle={styles.vectorIcon1Btn}
              buttonStyle={styles.vectorIcon1Btn1}
            />
          </ImageBackground>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconBtn: {
    left: "0%",
    right: "94.49%",
    top: "94.29%",
    bottom: "0%",
    position: "absolute",
  },
  vectorIconBtn1: {
    height: "5.71%",
    width: "5.51%",
  },
  vectorIcon1Btn: {
    left: "88.05%",
    right: "6.12%",
    top: "94.29%",
    bottom: "0%",
    position: "absolute",
  },
  vectorIcon1Btn1: {
    height: "5.71%",
    width: "5.83%",
  },
  framePosition: {
    top: 0,
    height: 350,
    position: "absolute",
    overflow: "hidden",
  },
  frameIcon: {
    marginLeft: -161.5,
    left: "50%",
    width: 343,
  },
  frame1: {
    left: 27,
    width: 363,
  },
  frame: {
    top: 82,
    left: 0,
    width: 390,
    height: 350,
    position: "absolute",
    overflow: "hidden",
  },
  tutorial2: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Tutorial;
