import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import Colors from "./../res/utils/Colors";

export default class SplashScreen extends Component {
  componentWillMount() {
    setTimeout(() => {
      this.props.navigation.navigate("LandingScreen");
    }, 3000);
  }
  render() {
    return (
      <View
        style={{
          backgroundColor: Colors.primary,
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Image
          source={require("./../res/images/LogoSplash.png")}
         // style={{ height: 150, width: 250 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
