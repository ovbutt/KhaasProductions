import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Image
} from "react-native";
import { RoundButton, TextField } from "./../components";
import Colors from "./../res/utils/Colors";

export default class LoginScreen extends Component {
  constructor() {
    super();
    this.state = { email: "", pasword: "" };
  }
  render() {
    return (
      <ImageBackground
        source={require("./../res/images/loginScreenBg.png")}
        style={{ height: "100%", width: "100%" }}
      >
        <View style={{ marginTop: 100 }}>
          <Image
            source={require("./../res/images/Logo-Khaas.png")}
            style={{ alignSelf: "center", marginBottom: 60 }}
          />
          <TextField placeholder="Email" value={this.state.email} />
          <TextField placeholder="Password" value={this.state.pasword} />
          <View style={{ marginTop: 50, marginBottom: 10 }}>
            <RoundButton
              style={{
                backgroundColor: Colors.secondary,
                color: Colors.white
              }}
              onPress={() => this.props.navigation.navigate("Main")}
            >
              Sign In
            </RoundButton>
          </View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Signup");
            }}
            style={{
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text style={{ color: Colors.white, alignSelf: "center" }}>
              Don't have an account?{" "}
              <Text
                style={{
                  color: Colors.white,
                  textDecorationLine: "underline"
                }}
              >
                Create new account
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
