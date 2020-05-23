import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { db } from "../config.js";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Header, Right, Left, Icon } from "native-base";

export function NotificationScreen(props) {
  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Left>
          <Icon name="menu" onPress={() => props.navigation.openDrawer()} />
        </Left>
      </Header>
      <View style={styles.container}>
        <Text> notifcations</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
