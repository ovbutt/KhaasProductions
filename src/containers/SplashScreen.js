import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import * as Animatable from "react-native-animatable";
import Colors from "./../res/utils/Colors";

export default class SplashScreen extends Component {
  componentWillMount() {
    setTimeout(() => {
      this.props.navigation.navigate("LandingScreen");
    }, 3000);
  }
  render() {
    return (
      <Animatable.View
        animation="fadeIn"
        style={{
          backgroundColor: Colors.primary,
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Animatable.Image
          animation="zoomIn"
          source={require("./../res/images/LogoSplash.png")}
          // style={{ height: 150, width: 250 }}
        />
      </Animatable.View>
    );
  }
}

const styles = StyleSheet.create({});
