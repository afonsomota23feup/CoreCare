import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import HorizontalCard from "./HorizontalCard";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const TrainingFormContainer = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.homeContainer}>
      <View style={styles.titleUserProfile}>
        <Text style={styles.training}>Training</Text>
      </View>
      <HorizontalCard
        yourDietChart="Back strength"
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
        yourDietChart="Back stretch"
        horizontalCardPosition="unset"
        horizontalCardWidth={343}
        horizontalCardMarginTop={16}
        horizontalCardTop="unset"
        horizontalCardLeft="unset"
        horizontalCardBackgroundColor="#edecf4"
        yourDietChartLineHeight={32}
        yourDietChartFontSize={20}
        yourDietChartFontWeight="700"
        yourDietChartFontFamily="Raleway-Bold"
        illustrationFlexDirection="column"
        illustrationPadding={4}
        illustrationMarginLeft={10}
        lifesaversArtIconPosition="relative"
        lifesaversArtIconWidth={144}
        lifesaversArtIconHeight={108}
        onHorizontalCardPress={() => navigation.navigate("TrainningNeck")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  training: {
    flex: 1,
    fontSize: FontSize.headingH4_size,
    letterSpacing: 0,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: FontFamily.headingH4,
    color: Color.colorDarkslateblue_200,
    textAlign: "left",
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
});

export default TrainingFormContainer;
