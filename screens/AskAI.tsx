import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import NavbarSimple from "../components/NavbarSimple";
import InputTypeTextBoxStateDef from "../components/InputTypeTextBoxStateDef";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const AskAI = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.askAi}>
      <View style={styles.homeContainer}>
        <View style={styles.titleUserProfile}>
          <Text style={styles.askAi1}>Ask AI</Text>
        </View>
      </View>
      <NavbarSimple
        iconHome2={require("../assets/iconhome-2.png")}
        iconBell={require("../assets/iconchart.png")}
        iconSetting={require("../assets/iconbell.png")}
        navbarSimplePosition="absolute"
        navbarSimpleTop={775}
        navbarSimpleRight={7}
        navbarSimpleLeft={8}
        navbarSimpleHeight="unset"
        navbarSimpleAlignSelf="unset"
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
      <Image
        style={styles.sendIcon}
        contentFit="cover"
        source={require("../assets/send.png")}
      />
      <InputTypeTextBoxStateDef
        label="Type to ask"
        iconEye={require("../assets/iconeye.png")}
        iconEye1={false}
        inputTypeTextBoxStateDefPosition="absolute"
        inputTypeTextBoxStateDefBackgroundColor="#f5f5f5"
        inputTypeTextBoxStateDefElevation={4}
        inputTypeTextBoxStateDefWidth={297}
        inputTypeTextBoxStateDefHeight={50}
        inputTypeTextBoxStateDefMarginTop="unset"
        inputTypeTextBoxStateDefBorderRadius={8}
        inputTypeTextBoxStateDefBorderStyle="solid"
        inputTypeTextBoxStateDefBorderColor="#edecf4"
        inputTypeTextBoxStateDefBorderWidth={1}
        inputTypeTextBoxStateDefFlexDirection="column"
        inputTypeTextBoxStateDefPaddingHorizontal="unset"
        inputTypeTextBoxStateDefPaddingVertical="unset"
        inputTypeTextBoxStateDefTop={711}
        inputTypeTextBoxStateDefLeft={20}
        inputTypeTextBoxStateDefAlignSelf="unset"
        placeholderRightIconBackgroundColor="#f5f5f5"
        labelFontSize={18}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  askAi1: {
    fontSize: FontSize.headingH4_size,
    letterSpacing: 0,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: FontFamily.headingH4,
    color: Color.colorDarkslateblue_200,
    textAlign: "left",
    flex: 1,
  },
  titleUserProfile: {
    width: 343,
    flexDirection: "row",
    alignItems: "center",
  },
  homeContainer: {
    marginLeft: -187,
    top: 31,
    left: "50%",
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    position: "absolute",
  },
  sendIcon: {
    top: 723,
    left: 339,
    width: 23,
    height: 23,
    position: "absolute",
    overflow: "hidden",
  },
  askAi: {
    backgroundColor: Color.colorWhite,
    width: "100%",
    height: 844,
    overflow: "hidden",
    flex: 1,
  },
});

export default AskAI;
