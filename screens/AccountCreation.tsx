import * as React from "react";
import { Image, TouchableOpacity } from "react-native"; // Import TouchableOpacity from react-native
import { StyleSheet, View, Text, TextInput } from "react-native";
import { Button } from "react-native-paper";
import ProfileForm from "../components/ProfileForm";
import TitleBar from "../components/TitleBar";
import StyleTypeFill from "../components/StyleTypeFill";
import { Color } from "../GlobalStyles";
import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Platform } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding } from "../GlobalStyles";
import { loginButtonBtnStyle } from "../GlobalStyles";
import { loginFormSpaceBlock } from "../GlobalStyles";


const AccountCreation = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [genre, setGenre] = useState(false);

  const onChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

   // Format the date to a string
   const dateString = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;

  return (
    <View style={styles.accountCreation}>
      <View style={styles.titleBar}>
        <TitleBar
          iconBack={require("../assets/iconeye.png")}
          login="Finish Account"
          titleBarPosition="absolute"
          titleBarBackgroundColor="#fff"
          titleBarWidth="100%"
          titleBarTop={43}
          titleBarRight={0}
          titleBarLeft={0}
          loginFontSize={27}
        />
      </View>

      <View style={styles.profileInfo}>
        <Image
          style={styles.profileImageIcon}
          source={require("../assets/profile-image.png")}
        />
      </View>

      <View style={styles.form}>
        <Text style={styles.infoText}>Name</Text>
        <TextInput
          style={styles.textBox}
          placeholderTextColor="unset"
        />
        <Text style={styles.exName}>Ex: Rita Moreira</Text>

        <Text style={styles.infoText}>Birthday</Text>

        <TouchableOpacity onPress={showDatepicker}>
          <Text style={styles.textBox} >{show ? "Select Date" : dateString}</Text>
        </TouchableOpacity>
      {show && (
        <DateTimePicker
          style={styles.textBox}
          mode="date"
          display="default"
          value={date}
          onChange={onChange}
        />
      )}

        <Text style={styles.infoText}>Phone Number</Text>
        <TextInput
          style={styles.textBox}
          placeholderTextColor="unset"
        />
        <Text style={styles.exName}>Ex: 912345678</Text>

        <Text style={styles.infoText}>Genre</Text>
            <Picker
              style={styles.textBox}
              selectedValue={genre}
              onValueChange={(itemValue) => setGenre(itemValue)}
            >
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
              <Picker.Item label="Other" value="other" />
            </Picker>
                              <Button
                                style={loginFormSpaceBlock}
                                mode="contained"
                                labelStyle={{ ...loginButtonBtnStyle, fontWeight: "bold" }}
                                onPress={() => navigation.navigate("HomePage")}
                              >
                                Finish
                              </Button>
            
      </View>
      

    </View>
  );
};

const styles = StyleSheet.create({
   titleBar: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    height: 10,
    width: 350,
  },
  profileImageIcon: {
    width: 107,
    height: 104,
  },
  profileInfo: {
    position: "absolute",
    top: 101,
    right: 31,
    left: 16,
    height: 128,
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },

  accountCreation: {
    position: "absolute",
    top: 136,
    right: 0,
    left: 0,
    height: 708,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: 0,
  },  
  form: {    
    paddingTop:0,
    justifyContent: "center",
    flex: 1,
    padding: 10,
  },
  textBox: {
    backgroundColor: "#f5f5f5",
    elevation: 4,
    width: 375,
    height: 50,
    marginTop: 10,
    borderRadius: 8,
    borderStyle: "solid",
    borderColor: "#edecf4",
    borderWidth: 1,
    flexDirection: "column",
    alignItems: "center",
    includeFontPadding: true,
    fontSize: 16,
    fontFamily: "Raleway-Regular",
    fontWeight: "700",

  },
  exName: {
    color: Color.colorGray_100,
    width: 232,
    textAlign: "left",
    fontWeight: "700",
    lineHeight: 26,
    letterSpacing: 0,
  },
  infoText: {
    color: '#432C81',
    fontSize: 20,
    fontFamily: 'Raleway-Regular',
    fontWeight: '700',
    lineHeight: 26,
    paddingTop: 15,
  },

})

export default AccountCreation;
