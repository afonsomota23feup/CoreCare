import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import NavbarSimple from "../components/NavbarSimple";
import HorizontalCard from "../components/HorizontalCard";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const ChatPhysio = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.chatPhysio}>
      <View style={styles.homeContainer}>
        <View style={styles.titleUserProfile}>
          <Text style={styles.chatWithA}>Chat with a Physio</Text>
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
      <HorizontalCard
        yourDietChart="Chat with a Physio"
        horizontalCardPosition="absolute"
        horizontalCardWidth={343}
        horizontalCardMarginTop="unset"
        horizontalCardTop={106}
        horizontalCardLeft={26}
        horizontalCardBackgroundColor="#edecf4"
        yourDietChartLineHeight={26}
        yourDietChartFontSize={20}
        yourDietChartFontWeight="700"
        yourDietChartFontFamily="Raleway-Bold"
        illustrationFlexDirection="column"
        illustrationPadding={4}
        illustrationMarginLeft={10}
        lifesaversArtIconPosition="relative"
        lifesaversArtIconWidth={144}
        lifesaversArtIconHeight={108}
        onHorizontalCardPress={() => navigation.navigate("ChatPhysio")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chatWithA: {
    fontSize: FontSize.headingH4_size,
    letterSpacing: 0,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: FontFamily.headingH4,
    color: Color.colorDarkslateblue_200,
    textAlign: "left",
    flex: 1,
  },
  titleUserProfile: {
    width: 343,
    flexDirection: "row",
    alignItems: "center",
  },
  homeContainer: {
    position: "absolute",
    marginLeft: -187,
    top: 31,
    left: "50%",
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
  },
  chatPhysio: {
    backgroundColor: Color.colorWhite,
    width: "100%",
    height: 844,
    overflow: "hidden",
    flex: 1,
  },
});

export default ChatPhysio;
