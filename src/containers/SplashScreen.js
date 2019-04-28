import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import * as Animatable from "react-native-animatable";
import Colors from "./../res/utils/Colors";
import firebase from "react-native-firebase";

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.unsubscriber = null;
    this.state = {
      user: null,
      loggedIn: null
    };
  }

  componentWillMount() {
    const { user, loggedIn } = this.state;
    this.unsubscriber = firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
      if (!user) {
        console.log("Setting LoggedIn false");
        this.setState({ loggedIn: false });
      } else {
        console.log("Setting LoggedIn true");
        this.setState({ loggedIn: true });
      }
      console.log("User state in splash screen: ", user);
    });
    setTimeout(() => {
      const { loggedIn } = this.state;
      console.log("LoggedIn: ", loggedIn);
      this.props.navigation.navigate(loggedIn ? "Main" : "Auth");
    }, 3000);
  }

  componentWillUnmount() {
    if (this.unsubscriber) {
      this.unsubscriber();
    }
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
