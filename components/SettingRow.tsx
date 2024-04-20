import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

export type SettingRowType = {
  iconPerson?: ImageSourcePropType;
  account?: string;
  iconRightArrow?: ImageSourcePropType;

  /** Style props */
  settingRowPosition?: string;
  settingRowAlignSelf?: string;
  settingRowMarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SettingRow = ({
  iconPerson,
  account,
  iconRightArrow,
  settingRowPosition,
  settingRowAlignSelf,
  settingRowMarginTop,
}: SettingRowType) => {
  const settingRowStyle = useMemo(() => {
    return {
      ...getStyleValue("position", settingRowPosition),
      ...getStyleValue("alignSelf", settingRowAlignSelf),
      ...getStyleValue("marginTop", settingRowMarginTop),
    };
  }, [settingRowPosition, settingRowAlignSelf, settingRowMarginTop]);

  return (
    <View style={[styles.settingRow, settingRowStyle]}>
      <Image style={styles.iconperson} contentFit="cover" source={iconPerson} />
      <Text style={styles.account}>{account}</Text>
      <Image
        style={styles.iconrightArrow}
        contentFit="cover"
        source={iconRightArrow}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconperson: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  account: {
    flex: 1,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    lineHeight: 26,
    fontWeight: "500",
    fontFamily: FontFamily.ralewayMedium,
    color: Color.inkInk02,
    textAlign: "left",
    marginLeft: 16,
  },
  iconrightArrow: {
    width: 24,
    height: 24,
    marginLeft: 16,
    overflow: "hidden",
  },
  settingRow: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
});

export default SettingRow;
