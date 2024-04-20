import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import TitleBar from "../components/TitleBar";
import NavbarSimple from "../components/NavbarSimple";
import NotificationCard from "../components/NotificationCard";
import { Color } from "../GlobalStyles";

const Notification1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.notification}>
      <View style={styles.frame}>
        <TitleBar
          iconBack={require("../assets/iconback1.png")}
          login="Notification"
          showIconBack
          titleBarPosition="unset"
          titleBarBackgroundColor="#fff"
          titleBarWidth={375}
          titleBarTop="unset"
          titleBarRight="unset"
          titleBarLeft="unset"
          loginFontSize={27}
        />
        <NavbarSimple
          iconChart={require("../assets/iconhome-22.png")}
          iconSetting={require("../assets/iconchart.png")}
          navbarSimplePosition="absolute"
          navbarSimpleTop={763}
          navbarSimpleRight={0}
          navbarSimpleLeft={0}
          navbarSimpleHeight={52}
          navbarSimpleAlignSelf="unset"
          navbarSimpleMarginTop="unset"
          iconHome2Overflow="unset"
          iconChartOverflow="hidden"
          iconChartPosition="unset"
          iconChartWidth="100%"
          iconChartHeight="100%"
          iconBellPosition="relative"
          iconBellWidth={24}
          iconBellHeight={24}
          iconBellOverflow="unset"
          iconSettingPosition="unset"
          iconSettingWidth="100%"
          iconSettingHeight="100%"
          onIconHome2Press={() => navigation.navigate("HomePage")}
          onIconChartPress1={() => navigation.navigate("TrainingReg")}
        />
      </View>
      <View style={styles.cardList}>
        <NotificationCard
          round={require("../assets/round.png")}
          loremIpsumDolorSitAmetCon="Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, ipsum dolor"
          notificationCardPosition="unset"
          notificationCardMarginTop="unset"
        />
        <NotificationCard
          round={require("../assets/round1.png")}
          loremIpsumDolorSitAmetCon="Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, ipsum dolor"
          notificationCardPosition="unset"
          notificationCardMarginTop={16}
        />
        <NotificationCard
          round={require("../assets/round2.png")}
          loremIpsumDolorSitAmetCon="Lorem ipsum dolor sit amet, consectetur"
          notificationCardPosition="unset"
          notificationCardMarginTop={16}
        />
        <NotificationCard
          round={require("../assets/round1.png")}
          loremIpsumDolorSitAmetCon="Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, ipsum dolor"
          notificationCardPosition="unset"
          notificationCardMarginTop={16}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frame: {
    top: 13,
    left: 8,
    width: 375,
    height: 827,
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  cardList: {
    top: 85,
    right: 23,
    left: 24,
    height: 531,
    position: "absolute",
  },
  notification: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Notification1;
