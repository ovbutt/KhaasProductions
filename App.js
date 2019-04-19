import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./src/navigations/MainNavigation";

export default class App extends Component {
  render() {
    return <AppNavigator />;
  }
}
