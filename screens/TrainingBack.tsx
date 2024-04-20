import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import SessionContainer from "../components/SessionContainer";
import ExerciseContainer from "../components/ExerciseContainer";
import StyleTypeFill from "../components/StyleTypeFill";
import NavbarSimple from "../components/NavbarSimple";
import { Color } from "../GlobalStyles";

const TrainingBack = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.trainingBack}>
      <View style={[styles.frame, styles.frameFlexBox1]}>
        <View style={[styles.frame1, styles.frameFlexBox1]}>
          <SessionContainer />
          <ExerciseContainer />
        </View>
        <View style={[styles.frame2, styles.frameFlexBox]}>
          <StyleTypeFill
            label="Finish session"
            styleTypeFillPosition="unset"
            styleTypeFillBorderRadius={8}
            styleTypeFillBackgroundColor="#432c81"
            styleTypeFillPaddingHorizontal="unset"
            styleTypeFillPaddingVertical="unset"
            styleTypeFillTop="unset"
            styleTypeFillLeft="unset"
            styleTypeFillAlignSelf="stretch"
            styleTypeFillMarginTop="unset"
            styleTypeFillHeight="unset"
            styleTypeFillMarginLeft="unset"
            labelFontWeight="700"
            labelFontFamily="Raleway-Bold"
            onSignUpButtonPress={() => navigation.navigate("TrainingReg")}
          />
        </View>
      </View>
      <View style={[styles.frame3, styles.frameFlexBox]}>
        <NavbarSimple
          iconHome2={require("../assets/iconhome-2.png")}
          iconBell={require("../assets/iconchart3.png")}
          iconSetting={require("../assets/iconbell2.png")}
          navbarSimplePosition="unset"
          navbarSimpleTop="unset"
          navbarSimpleRight="unset"
          navbarSimpleLeft="unset"
          navbarSimpleHeight="unset"
          navbarSimpleAlignSelf="stretch"
          navbarSimpleMarginTop="unset"
          iconHome2Overflow="hidden"
          iconChartOverflow="unset"
          iconChartPosition="relative"
          iconChartWidth={24}
          iconChartHeight={24}
          iconBellPosition="unset"
          iconBellWidth="100%"
          iconBellHeight="100%"
          iconBellOverflow="hidden"
          iconSettingPosition="relative"
          iconSettingWidth={24}
          iconSettingHeight={24}
          onIconChartPress={() => navigation.navigate("TrainingReg")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox1: {
    alignItems: "center",
    width: 376,
    overflow: "hidden",
  },
  frameFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  frame1: {
    height: 674,
    justifyContent: "flex-end",
  },
  frame2: {
    width: 328,
    marginTop: 24,
  },
  frame: {
    top: 0,
    height: 740,
    left: 0,
    position: "absolute",
    alignItems: "center",
  },
  frame3: {
    top: 763,
    width: 376,
    justifyContent: "center",
    left: 0,
    position: "absolute",
  },
  trainingBack: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default TrainingBack;
