import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import InputTypeTextBoxStateDef from "./InputTypeTextBoxStateDef";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const ContainerFrame = () => {
  return (
    <View style={styles.frame}>
      <View style={styles.editProfile}>
        <Text style={styles.nameTypo}>Name</Text>
        <InputTypeTextBoxStateDef
          label="Afonso Mota"
          iconEye={require("../assets/iconeye.png")}
          iconEye1={false}
          inputTypeTextBoxStateDefPosition="unset"
          inputTypeTextBoxStateDefBackgroundColor="#f5f5f5"
          inputTypeTextBoxStateDefElevation={4}
          inputTypeTextBoxStateDefWidth={350}
          inputTypeTextBoxStateDefHeight={50}
          inputTypeTextBoxStateDefMarginTop={10}
          inputTypeTextBoxStateDefBorderRadius={8}
          inputTypeTextBoxStateDefBorderStyle="solid"
          inputTypeTextBoxStateDefBorderColor="#edecf4"
          inputTypeTextBoxStateDefBorderWidth={1}
          inputTypeTextBoxStateDefFlexDirection="column"
          inputTypeTextBoxStateDefPaddingHorizontal="unset"
          inputTypeTextBoxStateDefPaddingVertical="unset"
          inputTypeTextBoxStateDefTop="unset"
          inputTypeTextBoxStateDefLeft="unset"
          inputTypeTextBoxStateDefAlignSelf="unset"
          placeholderRightIconBackgroundColor="#f5f5f5"
          labelFontSize={18}
        />
        <Text style={[styles.name1, styles.nameTypo]}>Date of birth</Text>
        <InputTypeTextBoxStateDef
          label="19/06/2001"
          iconEye={require("../assets/iconeye.png")}
          iconEye1={false}
          inputTypeTextBoxStateDefPosition="unset"
          inputTypeTextBoxStateDefBackgroundColor="#f5f5f5"
          inputTypeTextBoxStateDefElevation={4}
          inputTypeTextBoxStateDefWidth={350}
          inputTypeTextBoxStateDefHeight={50}
          inputTypeTextBoxStateDefMarginTop={10}
          inputTypeTextBoxStateDefBorderRadius={8}
          inputTypeTextBoxStateDefBorderStyle="solid"
          inputTypeTextBoxStateDefBorderColor="#edecf4"
          inputTypeTextBoxStateDefBorderWidth={1}
          inputTypeTextBoxStateDefFlexDirection="column"
          inputTypeTextBoxStateDefPaddingHorizontal="unset"
          inputTypeTextBoxStateDefPaddingVertical="unset"
          inputTypeTextBoxStateDefTop="unset"
          inputTypeTextBoxStateDefLeft="unset"
          inputTypeTextBoxStateDefAlignSelf="unset"
          placeholderRightIconBackgroundColor="#f5f5f5"
          labelFontSize={18}
        />
        <Text style={[styles.name1, styles.nameTypo]}>Mobile Phone</Text>
        <InputTypeTextBoxStateDef
          label="+351 938240809"
          iconEye={require("../assets/iconeye.png")}
          iconEye1={false}
          inputTypeTextBoxStateDefPosition="unset"
          inputTypeTextBoxStateDefBackgroundColor="#f5f5f5"
          inputTypeTextBoxStateDefElevation={4}
          inputTypeTextBoxStateDefWidth={350}
          inputTypeTextBoxStateDefHeight={50}
          inputTypeTextBoxStateDefMarginTop={10}
          inputTypeTextBoxStateDefBorderRadius={8}
          inputTypeTextBoxStateDefBorderStyle="solid"
          inputTypeTextBoxStateDefBorderColor="#edecf4"
          inputTypeTextBoxStateDefBorderWidth={1}
          inputTypeTextBoxStateDefFlexDirection="column"
          inputTypeTextBoxStateDefPaddingHorizontal="unset"
          inputTypeTextBoxStateDefPaddingVertical="unset"
          inputTypeTextBoxStateDefTop="unset"
          inputTypeTextBoxStateDefLeft="unset"
          inputTypeTextBoxStateDefAlignSelf="unset"
          placeholderRightIconBackgroundColor="#f5f5f5"
          labelFontSize={18}
        />
        <Text style={[styles.name1, styles.nameTypo]}>Sex</Text>
        <InputTypeTextBoxStateDef
          label="Male"
          iconEye={require("../assets/iconeye.png")}
          iconEye1={false}
          inputTypeTextBoxStateDefPosition="unset"
          inputTypeTextBoxStateDefBackgroundColor="#f5f5f5"
          inputTypeTextBoxStateDefElevation={4}
          inputTypeTextBoxStateDefWidth={350}
          inputTypeTextBoxStateDefHeight={50}
          inputTypeTextBoxStateDefMarginTop={10}
          inputTypeTextBoxStateDefBorderRadius={8}
          inputTypeTextBoxStateDefBorderStyle="solid"
          inputTypeTextBoxStateDefBorderColor="#edecf4"
          inputTypeTextBoxStateDefBorderWidth={1}
          inputTypeTextBoxStateDefFlexDirection="column"
          inputTypeTextBoxStateDefPaddingHorizontal="unset"
          inputTypeTextBoxStateDefPaddingVertical="unset"
          inputTypeTextBoxStateDefTop="unset"
          inputTypeTextBoxStateDefLeft="unset"
          inputTypeTextBoxStateDefAlignSelf="unset"
          placeholderRightIconBackgroundColor="#f5f5f5"
          labelFontSize={18}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nameTypo: {
    height: 26,
    width: 232,
    textAlign: "left",
    color: Color.colorDarkslateblue_200,
    fontFamily: FontFamily.headingH4,
    fontWeight: "700",
    lineHeight: 26,
    letterSpacing: 0,
    fontSize: FontSize.size_xl,
  },
  name1: {
    marginTop: 10,
  },
  editProfile: {
    width: 350,
    height: 425,
    padding: Padding.p_3xs,
  },
  frame: {
    width: 374,
    overflow: "hidden",
    justifyContent: "center",
  },
});

export default ContainerFrame;
