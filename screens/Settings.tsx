import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import MedicalHistoryContainerFrame from "../components/MedicalHistoryContainerFrame";
import AccountFormContainer1 from "../components/AccountFormContainer1";
import NavbarSimple from "../components/NavbarSimple";
import { Color, FontFamily, Border, Padding, FontSize } from "../GlobalStyles";

const Settings = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.settings}>
      <MedicalHistoryContainerFrame sectionTitle="Settings" />
      <View style={[styles.frame, styles.frameLayout]}>
        <View style={[styles.frame1, styles.frameLayout]}>
          <View style={styles.frame2}>
            <View style={styles.profileInfo}>
              <View style={styles.profileImage}>
                <Image
                  style={styles.lifesaversAvatarIcon}
                  contentFit="cover"
                  source={require("../assets/lifesavers-avatar.png")}
                />
              </View>
              <Text style={styles.afonsoMota22}>Afonso Mota (22)</Text>
              <Text style={[styles.afonsomailcom, styles.afonsomailcomTypo]}>
                afonso@mail.com
              </Text>
              <Text style={[styles.accountCreatedOn, styles.afonsomailcomTypo]}>
                Account created on 19/06/2023
              </Text>
            </View>
          </View>
          <AccountFormContainer1 />
        </View>
        <View style={[styles.frame3, styles.frameLayout]}>
          <NavbarSimple
            iconHome2={require("../assets/iconhome-22.png")}
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
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    width: 376,
    alignItems: "center",
    overflow: "hidden",
  },
  afonsomailcomTypo: {
    color: Color.colorDarkslateblue_100,
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
    lineHeight: 18,
    marginTop: 12,
    textAlign: "center",
    alignSelf: "stretch",
  },
  lifesaversAvatarIcon: {
    width: 96,
    height: 96,
  },
  profileImage: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.inkInk06,
    width: 112,
    flexDirection: "row",
    padding: Padding.p_5xs,
  },
  afonsoMota22: {
    fontSize: FontSize.size_13xl,
    letterSpacing: 0,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: FontFamily.headingH4,
    color: Color.colorDarkslateblue_200,
    marginTop: 12,
    textAlign: "center",
    alignSelf: "stretch",
  },
  afonsomailcom: {
    fontSize: FontSize.size_xl,
    textDecoration: "underline",
  },
  accountCreatedOn: {
    fontSize: FontSize.size_sm,
  },
  profileInfo: {
    width: 343,
    height: 216,
    justifyContent: "center",
    alignItems: "center",
  },
  frame2: {
    width: 358,
    justifyContent: "center",
    overflow: "hidden",
  },
  frame1: {
    height: 581,
    justifyContent: "center",
    alignItems: "center",
  },
  frame3: {
    marginTop: 93,
    justifyContent: "center",
    alignItems: "center",
  },
  frame: {
    position: "absolute",
    top: 101,
    left: 7,
    height: 730,
    alignItems: "center",
  },
  settings: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Settings;
