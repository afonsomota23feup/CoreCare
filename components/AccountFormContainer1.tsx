import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import SettingRow from "./SettingRow";
import { Padding } from "../GlobalStyles";

const AccountFormContainer1 = () => {
  return (
    <View style={styles.frame}>
      <View style={styles.optionsList}>
        <SettingRow
          iconPerson={require("../assets/iconperson.png")}
          account="Edit Account"
          iconRightArrow={require("../assets/iconright-arrow.png")}
          settingRowPosition="unset"
          settingRowAlignSelf="stretch"
          settingRowMarginTop="unset"
        />
        <SettingRow
          iconPerson={require("../assets/iconbell3.png")}
          account="Notification"
          iconRightArrow={require("../assets/iconright-arrow.png")}
          settingRowPosition="unset"
          settingRowAlignSelf="stretch"
          settingRowMarginTop={24}
        />
        <SettingRow
          iconPerson={require("../assets/iconeye1.png")}
          account="Appearance"
          iconRightArrow={require("../assets/iconright-arrow.png")}
          settingRowPosition="unset"
          settingRowAlignSelf="stretch"
          settingRowMarginTop={24}
        />
        <SettingRow
          iconPerson={require("../assets/iconsecurity.png")}
          account={`Privacy & Security`}
          iconRightArrow={require("../assets/iconright-arrow.png")}
          settingRowPosition="unset"
          settingRowAlignSelf="stretch"
          settingRowMarginTop={24}
        />
        <SettingRow
          iconPerson={require("../assets/iconvolume.png")}
          account="Sound"
          iconRightArrow={require("../assets/iconright-arrow.png")}
          settingRowPosition="unset"
          settingRowAlignSelf="stretch"
          settingRowMarginTop={24}
        />
        <SettingRow
          iconPerson={require("../assets/iconlanguage.png")}
          account="Language"
          iconRightArrow={require("../assets/iconright-arrow.png")}
          settingRowPosition="unset"
          settingRowAlignSelf="stretch"
          settingRowMarginTop={24}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  optionsList: {
    width: 375,
    height: 327,
    paddingLeft: Padding.p_base,
    paddingRight: Padding.p_5xs,
  },
  frame: {
    width: 376,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 38,
  },
});

export default AccountFormContainer1;
