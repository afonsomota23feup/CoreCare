import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import NavbarSimple from "../components/NavbarSimple";
import StyleTypeFill from "../components/StyleTypeFill";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const TrainningNeck = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.trainningNeck}>
      <View style={styles.frame}>
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
      <View style={styles.frame1}>
        <View style={styles.frame2}>
          <View style={styles.homeContainer}>
            <View style={styles.homeContainer1}>
              <View style={styles.titleUserProfile}>
                <Image
                  style={styles.vectorIcon}
                  contentFit="cover"
                  source={require("../assets/vector.png")}
                />
                <Text style={styles.backStretch}>Back stretch</Text>
              </View>
            </View>
          </View>
          <View style={styles.frame3}>
            <Image
              style={styles.image2Icon}
              contentFit="cover"
              source={require("../assets/image-2.png")}
            />
            <Text style={styles.archBackExhale}>{`Arch back, exhale.
Round back, inhale.
Repeat movements.
Maintain flow.`}</Text>
          </View>
        </View>
        <StyleTypeFill
          label="Finish session"
          styleTypeFillPosition="unset"
          styleTypeFillBorderRadius={8}
          styleTypeFillBackgroundColor="#432c81"
          styleTypeFillPaddingHorizontal="unset"
          styleTypeFillPaddingVertical="unset"
          styleTypeFillTop="unset"
          styleTypeFillLeft="unset"
          styleTypeFillAlignSelf="start"
          styleTypeFillMarginTop={32}
          styleTypeFillHeight={42}
          styleTypeFillMarginLeft={40}
          labelFontWeight="600"
          labelFontFamily="Raleway-SemiBold"
          onSignUpButtonPress={() => navigation.navigate("TrainingReg")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frame: {
    position: "absolute",
    top: 775,
    left: 7,
    width: 376,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  vectorIcon: {
    position: "relative",
    width: 18,
    height: 11,
  },
  backStretch: {
    flex: 1,
    position: "relative",
    fontSize: FontSize.headingH4_size,
    letterSpacing: 0,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: FontFamily.headingH4,
    color: Color.colorDarkslateblue_200,
    textAlign: "left",
    marginLeft: 16,
  },
  titleUserProfile: {
    width: 343,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  homeContainer1: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
  },
  homeContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    height: 32,
    marginLeft: 1,
  },
  image2Icon: {
    position: "relative",
    width: 266,
    height: 406,
  },
  archBackExhale: {
    fontSize: FontSize.headingH4_size,
    letterSpacing: 0,
    lineHeight: 32,
    fontFamily: FontFamily.cagliostroRegular,
    color: Color.colorDarkslateblue_200,
    textAlign: "center",
    height: 128,
    marginRight: 35,
    marginTop: 32,
  },
  frame3: {
    width: 268,
    height: 566,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    marginTop: 48,
  },
  frame2: {
    width: 408,
    height: 646,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  frame1: {
    position: "absolute",
    top: 31,
    left: -9,
    width: 408,
    height: 720,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  trainningNeck: {
    position: "relative",
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default TrainningNeck;
