
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import HomePage from "./screens/HomePage";
import Login from "./screens/Login";
import Welcome from "./screens/Welcome";
import AskAI from "./screens/AskAI";
import AskAIResponse from "./screens/AskAIResponse";
import ChatPhysio from "./screens/ChatPhysio";
import SignUp from "./screens/SignUp";
import Tutorial from "./screens/Tutorial";
import MedicalReg from "./screens/MedicalReg";
import TrainingReg from "./screens/TrainingReg";
import AccountCreation from "./screens/AccountCreation";
import TrainningNeck from "./screens/TrainningNeck";
import UsefulContacts from "./screens/UsefulContacts";
import TrainingBack from "./screens/TrainingBack";
import AccountSettings from "./screens/AccountSettings";
import Settings from "./screens/Settings";
import Trainning from "./screens/Trainning";
import FindHelp from "./screens/FindHelp";
import Notification1 from "./screens/Notification1";
import Tutorial1 from "./screens/Tutorial1";
import Tutorial2 from "./screens/Tutorial2";
import TitleLines from "./components/TitleLines";
import InputTypeTextBoxStateDef from "./components/InputTypeTextBoxStateDef";
import StyleTypeFill from "./components/StyleTypeFill";
import BottomLink from "./components/BottomLink";
import NavbarSimple from "./components/NavbarSimple";
import HorizontalCard from "./components/HorizontalCard";
import TitleBar from "./components/TitleBar";
import NoteCard from "./components/NoteCard";
import SettingRow from "./components/SettingRow";
import NotificationCard from "./components/NotificationCard";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as eva from "@eva-design/eva";

const Stack = createNativeStackNavigator();

import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Raleway-Regular": require("./assets/fonts/Raleway-Regular.ttf"),
    "Raleway-Medium": require("./assets/fonts/Raleway-Medium.ttf"),
    "Raleway-SemiBold": require("./assets/fonts/Raleway-SemiBold.ttf"),
    "Raleway-Bold": require("./assets/fonts/Raleway-Bold.ttf"),
    "Cagliostro-Regular": require("./assets/fonts/Cagliostro-Regular.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
  });

  function MaterialIcon({ name, style }: { name: string, style: any }) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <MIcon name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }

  const IconProvider = (name: string) => ({
    toReactElement: (props: any) => MaterialIcon({ name, ...props }),
  });

  function createIconsMap() {
    return new Proxy(
      {},
      {
        get(target, name) {
          return IconProvider(name.toString());
        },
      }
    );
  }
  const MaterialIconsPack = {
    name: "material",
    icons: createIconsMap(),
  };

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <IconRegistry icons={[MaterialIconsPack]} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
              <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HomePage"
                component={HomePage}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AccountCreation"
                component={AccountCreation}
                options={{ headerShown: false }}
              />

              {/* Rest of the screens */}
            </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
export default App;
