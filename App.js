import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { db } from "./config.js";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Header, Right, Left, Icon } from "native-base";
import { HomeScreen } from "./screens/HomeScreen";
import { WashingMachine } from "./screens/WashingMachine";
import { LoginScreen } from "./screens/LoginScreen";
import { DLFScreen } from "./screens/DLFscreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Logout">
        <Drawer.Screen name="Logout" component={LoginScreen} />
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Washing Machines" component={WashingMachine} />
        <Drawer.Screen name="DLF" component={DLFScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// drawerContent={props => <CustomDrawerContent {...props} />
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
