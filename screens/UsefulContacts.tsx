import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import NavbarSimple from "../components/NavbarSimple";
import ContactFormContainer from "../components/ContactFormContainer";
import { Color } from "../GlobalStyles";

const UsefulContacts = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.usefulContacts}>
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
      <ContactFormContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  frame: {
    position: "absolute",
    top: 775,
    left: 7,
    width: 376,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  usefulContacts: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default UsefulContacts;
