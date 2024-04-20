import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import AccountFormContainer from "../components/AccountFormContainer";
import ContainerFrame from "../components/ContainerFrame";
import NavbarSimple from "../components/NavbarSimple";
import { Color } from "../GlobalStyles";

const AccountSettings = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.accountSettings}>
      <AccountFormContainer />
      <View style={[styles.frame, styles.frameLayout]}>
        <ContainerFrame />
        <View style={[styles.frame1, styles.frameLayout]}>
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
    overflow: "hidden",
  },
  frame1: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 115,
  },
  frame: {
    position: "absolute",
    top: 235,
    left: 7,
    height: 596,
    justifyContent: "flex-end",
  },
  accountSettings: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default AccountSettings;
