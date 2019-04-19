import React, { Component } from "react";
import { Text, StyleSheet, View, ImageBackground } from "react-native";
import Colors from "./../res/utils/Colors";
import Button from "./../components/Button";

export default class LandingScreen extends Component {
  render() {
    return (
      <ImageBackground
        source={require("./../res/images/LandingPageBg.png")}
        style={{ flex: 1, height: "100%", width: "100%" }}
      >
        <View style={{ marginTop: 260 }}>
          <View style={{ marginLeft: 20 }}>
            <Text
              style={{ color: Colors.white, fontSize: 30, fontWeight: "bold" }}
            >
              Welcome to Khaas
            </Text>
            <Text
              style={{ color: Colors.white, fontSize: 30, fontWeight: "bold" }}
            >
              Production App
            </Text>
            <Text
              style={{
                color: Colors.grey,
                fontSize: 16,
                width: "70%",
                marginTop: 30
              }}
            >
              Please select one from below to proceed with the app
            </Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              marginTop: 40
            }}
          >
            <Button onPress={() => this.props.navigation.navigate("Login")}>
              Sign In
            </Button>
            <View style={{ marginTop: 10 }}>
              <Button
                style={{
                  backgroundColor: Colors.secondary,
                  color: Colors.white
                }}
                onPress={() => this.props.navigation.navigate("Signup")}
              >
                Sign Up
              </Button>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({});
