import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
  TouchableWithoutFeedback
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { db } from "../config.js";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Header, Right, Left, Icon } from "native-base";

export function WashingMachine(props) {
  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Left>
          <Icon name="menu" onPress={() => props.navigation.openDrawer()} />
        </Left>
      </Header>
      <View style={styles.container}>
        <View style={styles.circle} />
        <View style={{ marginHorizontal: 32, marginTop: 30 }}>
          <Text style={styles.header}>Available Washing Machines In Bakul</Text>
          <Text style={styles.header}>2</Text>
          <TouchableOpacity style={styles.continue}>
            <Ionicons name="md-add-circle-outline" size={80} color="#9075E3" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.continue}>
            <Ionicons
              name="md-remove-circle-outline"
              size={80}
              color="#9075E3"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F5F7"
  },
  circle: {
    width: 500,
    height: 500,
    borderRadius: 500 / 2,
    backgroundColor: "#FFF",
    position: "absolute",
    left: -120,
    top: -20
  },
  header: {
    fontWeight: "800",
    fontSize: 30,
    color: "#514E5A",
    marginTop: 32
  },
  input: {
    marginTop: 32,
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#BAB7C3",
    borderRadius: 30,
    paddingHorizontal: 16,
    color: "#514E5A",
    fontWeight: "600"
  },
  continue: {
    marginTop: 45,
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    alignItems: "center",
    justifyContent: "center"
  }
});
