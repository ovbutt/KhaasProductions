import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TouchableOpacity
} from "react-native";
import Button from "./../components/Button";
import TextInput from "./../components/TextInput";
import Colors from "./../res/utils/Colors";

export default class SignupScreen extends Component {
  render() {
    return (
      <ImageBackground
        source={require("./../res/images/signpScreenBg.png")}
        style={{
          height: "100%",
          width: "100%"
        }}
      >
        <View
          style={{
            marginTop: 60
          }}
        >
          <Image
            source={require("./../res/images/Logo-Khaas.png")}
            style={{
              alignSelf: "center",
              marginBottom: 30
            }}
          />
          <TextInput placeholder="Name" />
          <TextInput placeholder="Email" />
          <TextInput placeholder="Phone Number" />
          <TextInput placeholder="Password" />
          <TextInput placeholder="Confirm Password" />
          <View style={{ marginTop: 30, marginBottom: 10 }}>
            <Button
              style={{
                backgroundColor: Colors.secondary,
                color: Colors.white
              }}
              onPress={() => this.props.navigation.navigate("Main")}
            >
              Sign Up
            </Button>
          </View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack();
            }}
            style={{
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text
              style={{
                color: Colors.white,
                alignSelf: "center"
              }}
            >
              Already have an account?{" "}
              <Text
                style={{
                  color: Colors.white,
                  textDecorationLine: "underline"
                }}
              >
                Login
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({});
