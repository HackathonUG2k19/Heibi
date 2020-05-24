import React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { db } from "../config.js";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Header, Right, Left, Icon } from "native-base";

export function HomeScreen(props) {
  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Left>
          <Icon name="menu" onPress={() => props.navigation.openDrawer()} />
        </Left>
      </Header>
      <View style={styles.container}>
        <View style={styles.btnTop}>
          <View style={styles.btn}>
            <Button title="Tingting" onPress={() => Alert.alert("tada")} />
          </View>
          <View style={styles.btn}>
            <Button title="Dingding" onPress={() => Alert.alert("abcd")} />
          </View>
        </View>

        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <Button title="Button A" onPress={() => Alert.alert("tada")} />
          </View>
          <View style={styles.btn}>
            <Button title="Button B" onPress={() => Alert.alert("abcd")} />
          </View>
          <View style={styles.btn}>
            <Button title="Button C" onPress={() => Alert.alert("efgh")} />
          </View>
          <View style={styles.btn}>
            <Button title="Button D" onPress={() => Alert.alert("ijkl")} />
          </View>
        </View>

        <Text>Home</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    marginTop: 40
  },
  btwTop: {
    flex: 1,
    flexDirection: "column",
    width: "50%"
  },
  btnContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center"
  },
  btn: {
    backgroundColor: "skyblue",
    marginHorizontal: "15%",
    marginTop: "5%",
    justifyContent: "space-between",
    padding: 20
  }
});
