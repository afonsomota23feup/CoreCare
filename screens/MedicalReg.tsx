import * as React from "react";
import { ScrollView, Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import MedicalHistoryContainerFrame from "../components/MedicalHistoryContainerFrame";
import NoteCard from "../components/NoteCard";
import NavbarSimple from "../components/NavbarSimple";
import { Border, Color, Padding } from "../GlobalStyles";

const MedicalReg = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.medicalreg}>
      <MedicalHistoryContainerFrame sectionTitle="Medical History" />
      <View style={styles.frame}>
        <View style={styles.frameLayout}>
          <View style={[styles.frame2, styles.frameLayout]}>
            <ScrollView
              style={styles.cardGrid}
              showsVerticalScrollIndicator={true}
              showsHorizontalScrollIndicator={true}
              contentContainerStyle={styles.cardGridScrollViewContent}
            >
              <View style={styles.rowFlexBox}>
                <NoteCard
                  today="Today"
                  noteCardPosition="unset"
                  noteCardMarginLeft="unset"
                />
                <View style={styles.row05Child} />
                <NoteCard
                  today="Yesterday"
                  noteCardPosition="unset"
                  noteCardMarginLeft={-43}
                />
              </View>
              <View style={[styles.row04, styles.rowFlexBox]}>
                <NoteCard
                  today="Wed, 7 Nov"
                  noteCardPosition="unset"
                  noteCardMarginLeft="unset"
                />
                <NoteCard
                  today="Thu, 8 Nov"
                  noteCardPosition="unset"
                  noteCardMarginLeft={11}
                />
              </View>
              <View style={[styles.row04, styles.rowFlexBox]}>
                <NoteCard
                  today="Fri, 9 Nov"
                  noteCardPosition="unset"
                  noteCardMarginLeft="unset"
                />
                <NoteCard
                  today="Sat, 10 Nov"
                  noteCardPosition="unset"
                  noteCardMarginLeft={11}
                />
              </View>
              <View style={[styles.row04, styles.rowFlexBox]}>
                <NoteCard
                  today="Sun, 11 Nov"
                  noteCardPosition="unset"
                  noteCardMarginLeft="unset"
                />
                <NoteCard
                  today="Mon, 12 Nov"
                  noteCardPosition="unset"
                  noteCardMarginLeft={11}
                />
              </View>
            </ScrollView>
            <Image
              style={styles.frameIcon}
              contentFit="cover"
              source={require("../assets/frame1.png")}
            />
          </View>
          <NavbarSimple
            iconHome2={require("../assets/iconhome-21.png")}
            iconBell={require("../assets/iconchart1.png")}
            iconSetting={require("../assets/iconbell1.png")}
            navbarSimplePosition="unset"
            navbarSimpleTop="unset"
            navbarSimpleRight="unset"
            navbarSimpleLeft="unset"
            navbarSimpleHeight="unset"
            navbarSimpleAlignSelf="stretch"
            navbarSimpleMarginTop={-918}
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
  cardGridScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameLayout: {
    height: 1597,
    width: 375,
    alignItems: "center",
    overflow: "hidden",
  },
  rowFlexBox: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  row05Child: {
    width: 100,
    height: 100,
    marginLeft: -43,
    overflow: "hidden",
  },
  row04: {
    marginTop: 10,
  },
  cardGrid: {
    borderRadius: Border.br_base,
    backgroundColor: Color.inkInk06,
    padding: Padding.p_base,
    maxWidth: 375,
    width: 375,
    flex: 1,
  },
  frameIcon: {
    width: 341,
    height: 56,
    marginTop: -999,
    overflow: "hidden",
  },
  frame2: {
    justifyContent: "flex-end",
  },
  frame: {
    position: "absolute",
    top: 96,
    left: 7,
    width: 376,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  medicalreg: {
    backgroundColor: Color.colorWhite,
    width: "100%",
    height: 844,
    overflow: "hidden",
    flex: 1,
  },
});

export default MedicalReg;
