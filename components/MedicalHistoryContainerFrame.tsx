import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import TitleBar from "./TitleBar";

export type MedicalHistoryContainerFrameType = {
  sectionTitle?: string;
};

const MedicalHistoryContainerFrame = ({
  sectionTitle,
}: MedicalHistoryContainerFrameType) => {
  return (
    <View style={styles.frame}>
      <TitleBar
        iconBack={require("../assets/iconback.png")}
        login="Medical History"
        showIconBack
        titleBarPosition="unset"
        titleBarBackgroundColor="#fff"
        titleBarWidth={375}
        titleBarTop="unset"
        titleBarRight="unset"
        titleBarLeft="unset"
        loginFontSize={27}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frame: {
    position: "absolute",
    top: 31,
    left: 7,
    width: 376,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MedicalHistoryContainerFrame;
