import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ImageSourcePropType } from "react-native";
import { Color, Padding } from "../GlobalStyles";

export type NavbarSimpleType = {
  iconHome2?: ImageSourcePropType;
  iconChart?: ImageSourcePropType;
  iconBell?: ImageSourcePropType;
  iconSetting?: ImageSourcePropType;

  /** Style props */
  navbarSimplePosition?: string;
  navbarSimpleTop?: number | string;
  navbarSimpleRight?: number | string;
  navbarSimpleLeft?: number | string;
  navbarSimpleHeight?: number | string;
  navbarSimpleAlignSelf?: string;
  navbarSimpleMarginTop?: number | string;
  iconHome2Overflow?: string;
  iconChartOverflow?: string;
  iconChartPosition?: string;
  iconChartWidth?: number | string;
  iconChartHeight?: number | string;
  iconBellPosition?: string;
  iconBellWidth?: number | string;
  iconBellHeight?: number | string;
  iconBellOverflow?: string;
  iconSettingPosition?: string;
  iconSettingWidth?: number | string;
  iconSettingHeight?: number | string;

  /** Action props */
  onIconHome2Press?: () => void;
  onIconChartPress?: () => void;
  onIconChartPress1?: () => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const NavbarSimple = ({
  iconHome2,
  iconChart,
  iconBell,
  iconSetting,
  navbarSimplePosition,
  navbarSimpleTop,
  navbarSimpleRight,
  navbarSimpleLeft,
  navbarSimpleHeight,
  navbarSimpleAlignSelf,
  navbarSimpleMarginTop,
  iconHome2Overflow,
  iconChartOverflow,
  iconChartPosition,
  iconChartWidth,
  iconChartHeight,
  iconBellPosition,
  iconBellWidth,
  iconBellHeight,
  iconBellOverflow,
  iconSettingPosition,
  iconSettingWidth,
  iconSettingHeight,
  onIconHome2Press,
  onIconChartPress,
  onIconChartPress1,
}: NavbarSimpleType) => {
  const navbarSimpleStyle = useMemo(() => {
    return {
      ...getStyleValue("position", navbarSimplePosition),
      ...getStyleValue("top", navbarSimpleTop),
      ...getStyleValue("right", navbarSimpleRight),
      ...getStyleValue("left", navbarSimpleLeft),
      ...getStyleValue("height", navbarSimpleHeight),
      ...getStyleValue("alignSelf", navbarSimpleAlignSelf),
      ...getStyleValue("marginTop", navbarSimpleMarginTop),
    };
  }, [
    navbarSimplePosition,
    navbarSimpleTop,
    navbarSimpleRight,
    navbarSimpleLeft,
    navbarSimpleHeight,
    navbarSimpleAlignSelf,
    navbarSimpleMarginTop,
  ]);

  const iconHome2Style = useMemo(() => {
    return {
      ...getStyleValue("overflow", iconHome2Overflow),
    };
  }, [iconHome2Overflow]);

  const iconChartStyle = useMemo(() => {
    return {
      ...getStyleValue("overflow", iconChartOverflow),
      ...getStyleValue("position", iconChartPosition),
      ...getStyleValue("width", iconChartWidth),
      ...getStyleValue("height", iconChartHeight),
    };
  }, [iconChartOverflow, iconChartPosition, iconChartWidth, iconChartHeight]);

  const iconBellStyle = useMemo(() => {
    return {
      ...getStyleValue("position", iconBellPosition),
      ...getStyleValue("width", iconBellWidth),
      ...getStyleValue("height", iconBellHeight),
      ...getStyleValue("overflow", iconBellOverflow),
    };
  }, [iconBellPosition, iconBellWidth, iconBellHeight, iconBellOverflow]);

  const iconSettingStyle = useMemo(() => {
    return {
      ...getStyleValue("position", iconSettingPosition),
      ...getStyleValue("width", iconSettingWidth),
      ...getStyleValue("height", iconSettingHeight),
    };
  }, [iconSettingPosition, iconSettingWidth, iconSettingHeight]);

  return (
    <View style={[styles.navbarsimple, navbarSimpleStyle]}>
      <Image
        style={[styles.iconhome2, iconHome2Style]}
        contentFit="cover"
        source={iconHome2}
        onPress={onIconHome2Press}
      />
      <Image
        style={[styles.iconhome2, iconChartStyle]}
        contentFit="cover"
        source={iconChart}
        onPress={onIconChartPress}
      />
      <Image
        style={[styles.iconhome2, iconBellStyle]}
        contentFit="cover"
        source={iconBell}
        onPress={onIconChartPress1}
      />
      <Image
        style={[styles.iconhome2, iconSettingStyle]}
        contentFit="cover"
        source={iconSetting}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconhome2: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  navbarsimple: {
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_base,
  },
});

export default NavbarSimple;
