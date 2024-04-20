import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import TitleBar from "./TitleBar";
import { Padding, Border, Color } from "../GlobalStyles";

const AccountFormContainer = () => {
  return (
    <View style={[styles.frame, styles.frameFlexBox]}>
      <View style={[styles.frame1, styles.frameFlexBox]}>
        <TitleBar
          iconBack={require("../assets/iconback.png")}
          login="Account"
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
      <View style={styles.frame2}>
        <View style={[styles.profileInfo, styles.frameFlexBox]}>
          <View style={styles.profileImage}>
            <View style={[styles.profileImage1, styles.editIconSpaceBlock]}>
              <Image
                style={styles.lifesaversAvatarIcon}
                contentFit="cover"
                source={require("../assets/lifesavers-avatar.png")}
              />
            </View>
            <View style={[styles.editIcon, styles.editIconSpaceBlock]}>
              <Image
                style={styles.iconedit}
                contentFit="cover"
                source={require("../assets/iconedit.png")}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  editIconSpaceBlock: {
    padding: Padding.p_5xs,
    borderRadius: Border.br_81xl,
    flexDirection: "row",
  },
  frame1: {
    justifyContent: "center",
    overflow: "hidden",
    width: 376,
    alignItems: "center",
  },
  lifesaversAvatarIcon: {
    width: 96,
    height: 96,
  },
  profileImage1: {
    backgroundColor: Color.inkInk06,
    width: 112,
  },
  iconedit: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  editIcon: {
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    width: 36,
    marginLeft: -26,
  },
  profileImage: {
    width: 122,
    height: 112,
    flexDirection: "row",
    alignItems: "center",
  },
  profileInfo: {
    width: 343,
    height: 128,
    justifyContent: "center",
  },
  frame2: {
    width: 358,
    marginTop: 24,
    justifyContent: "center",
    overflow: "hidden",
  },
  frame: {
    position: "absolute",
    top: 31,
    left: 7,
    height: 198,
    justifyContent: "center",
    overflow: "hidden",
    width: 376,
    alignItems: "center",
  },
});

export default AccountFormContainer;
