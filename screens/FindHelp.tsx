import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import HelpFormContainer from "../components/HelpFormContainer";
import NavbarSimple from "../components/NavbarSimple";
import { Color } from "../GlobalStyles";

const FindHelp = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.findHelp}>
      <HelpFormContainer />
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
    </View>
  );
};

const styles = StyleSheet.create({
  findHelp: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default FindHelp;
