import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";
import { Datepicker as RNKDatepicker } from "@ui-kitten/components";
import DropDownPicker from "react-native-dropdown-picker";
import InputTypeTextBoxStateDef from "./InputTypeTextBoxStateDef";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const ProfileForm = () => {
  const [dateOfBirth1DatePicker, setDateOfBirth1DatePicker] =
    useState(undefined);
  const [genreInputOpen, setGenreInputOpen] = useState(false);
  const [genreInputValue, setGenreInputValue] = useState();

  return (
    <View style={styles.editProfile}>
      <Text style={styles.nameTypo}>Name</Text>
      <InputTypeTextBoxStateDef
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
        placeholderRightIconBackgroundColor="unset"
      />
      <Text style={styles.exName}>Ex: Rita Moreira</Text>
      <Text style={[styles.dateOfBirth, styles.nameTypo]}>Date of birth</Text>
      <InputTypeTextBoxStateDef
        inputTypeTextBoxStateDefPosition="unset"
        inputTypeTextBoxStateDefBackgroundColor="unset"
        inputTypeTextBoxStateDefWidth="unset"
        inputTypeTextBoxStateDefHeight="unset"
        inputTypeTextBoxStateDefMarginTop={10}
        inputTypeTextBoxStateDefBorderStyle="unset"
        inputTypeTextBoxStateDefBorderColor="unset"
        inputTypeTextBoxStateDefFlexDirection="unset"
        inputTypeTextBoxStateDefPaddingHorizontal="unset"
        inputTypeTextBoxStateDefPaddingVertical="unset"
        inputTypeTextBoxStateDefTop="unset"
        inputTypeTextBoxStateDefLeft="unset"
        inputTypeTextBoxStateDefAlignSelf="unset"
      />
      <Text style={styles.exName}>Ex: DD/MM/YYYY</Text>
      <Text style={[styles.dateOfBirth, styles.nameTypo]}>Mobile Phone</Text>
      <InputTypeTextBoxStateDef
        inputTypeTextBoxStateDefPosition="unset"
        inputTypeTextBoxStateDefBackgroundColor="unset"
        inputTypeTextBoxStateDefElevation={4}
        inputTypeTextBoxStateDefWidth={350}
        inputTypeTextBoxStateDefHeight={50}
        inputTypeTextBoxStateDefMarginTop={10}
        inputTypeTextBoxStateDefBorderRadius={8}
        inputTypeTextBoxStateDefBorderStyle="solid"
        inputTypeTextBoxStateDefBorderColor="unset"
        inputTypeTextBoxStateDefFlexDirection="column"
        inputTypeTextBoxStateDefPaddingHorizontal="unset"
        inputTypeTextBoxStateDefPaddingVertical="unset"
        inputTypeTextBoxStateDefTop="unset"
        inputTypeTextBoxStateDefLeft="unset"
        inputTypeTextBoxStateDefAlignSelf="unset"
      />
      <Text style={[styles.dateOfBirth, styles.nameTypo]}>Genre</Text>
      <View style={styles.genreInput}>
        <DropDownPicker
          style={styles.dropdownpicker}
          open={genreInputOpen}
          setOpen={setGenreInputOpen}
          value={genreInputValue}
          setValue={setGenreInputValue}
          items={[]}
          dropDownContainerStyle={styles.genreInputdropDownContainer}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dateOfBirth1Value: {},
  genreInputdropDownContainer: {
    backgroundColor: "#f5f5f5",
    borderStyle: "solid",
    borderColor: "#edecf4",
    borderWidth: 1,
  },
  nameTypo: {
    height: 26,
    color: Color.colorDarkslateblue_200,
    fontSize: FontSize.size_xl,
    width: 232,
    textAlign: "left",
    fontFamily: FontFamily.headingH4,
    fontWeight: "700",
    lineHeight: 26,
    letterSpacing: 0,
  },
  exName: {
    fontSize: FontSize.size_xs,
    color: Color.colorGray_100,
    height: 19,
    marginTop: 10,
    width: 232,
    textAlign: "left",
    fontFamily: FontFamily.headingH4,
    fontWeight: "700",
    lineHeight: 26,
    letterSpacing: 0,
  },
  dateOfBirth: {
    marginTop: 10,
  },
  dropdownpicker: {
    backgroundColor: Color.colorWhitesmoke,
    borderColor: Color.inkInk06,
    borderWidth: 1,
    borderStyle: "solid",
  },
  genreInput: {
    borderRadius: Border.br_5xs,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 50,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_3xs,
    borderStyle: "solid",
    marginTop: 10,
    width: 350,
  },
  editProfile: {
    position: "absolute",
    top: 235,
    left: 8,
    height: 425,
    padding: Padding.p_3xs,
    width: 350,
  },
});

export default ProfileForm;
