import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import HorizontalCard from "../components/HorizontalCard";
import NavbarSimple from "../components/NavbarSimple";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const HomePage = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.homePage}>
      <View style={styles.frame}>
        <View style={styles.homeContainer}>
          <View style={styles.titleUserProfile}>
            <Text style={styles.hiAfonso}>👋🏻 Hi Afonso!</Text>
            <View style={styles.profileImage}>
              <Image
                style={styles.cityscapesIsolatedIcon}
                contentFit="cover"
                source={require("../assets/cityscapes-isolated.png")}
              />
            </View>
          </View>
          <HorizontalCard
            yourDietChart="Medical History"
            horizontalCardPosition="unset"
            horizontalCardWidth={343}
            horizontalCardMarginTop={16}
            horizontalCardTop="unset"
            horizontalCardLeft="unset"
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
            onHorizontalCardPress={() => navigation.navigate("MedicalReg")}
          />
          <HorizontalCard
            yourDietChart="Learn"
            horizontalCardPosition="unset"
            horizontalCardWidth={343}
            horizontalCardMarginTop={16}
            horizontalCardTop="unset"
            horizontalCardLeft="unset"
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
          />
          <HorizontalCard
            yourDietChart="Exercise"
            horizontalCardPosition="unset"
            horizontalCardWidth={343}
            horizontalCardMarginTop={16}
            horizontalCardTop="unset"
            horizontalCardLeft="unset"
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
          />
          <HorizontalCard
            yourDietChart="Find Help"
            horizontalCardPosition="unset"
            horizontalCardWidth={343}
            horizontalCardMarginTop={16}
            horizontalCardTop="unset"
            horizontalCardLeft="unset"
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
  hiAfonso: {
    fontSize: FontSize.headingH4_size,
    letterSpacing: 0,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: FontFamily.headingH4,
    color: Color.colorDarkslateblue_200,
    textAlign: "left",
    flex: 1,
  },
  cityscapesIsolatedIcon: {
    width: 30,
    height: 30,
  },
  profileImage: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.inkInk06,
    padding: Padding.p_5xs,
    marginLeft: 16,
    flexDirection: "row",
  },
  titleUserProfile: {
    width: 343,
    flexDirection: "row",
    alignItems: "center",
  },
  homeContainer: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    height: 618,
  },
  frame: {
    position: "absolute",
    top: 31,
    left: 8,
    width: 375,
    justifyContent: "flex-end",
    alignItems: "center",
    height: 618,
    overflow: "hidden",
  },
  homePage: {
    backgroundColor: Color.colorWhite,
    width: "100%",
    height: 844,
    overflow: "hidden",
    flex: 1,
  },
});

export default HomePage;
