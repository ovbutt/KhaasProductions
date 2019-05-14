import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  AsyncStorage
} from "react-native";
import { RoundButton, TextField } from "./../components";
import Colors from "./../res/utils/Colors";
import firebase from "react-native-firebase";
import Icon from "react-native-vector-icons/Ionicons";

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const ACCESS_ID = "access_id";
export default class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      pasword: "",
      show: false,
      loading: false,
      userId: ""
    };
  }
  onLoginSuccess = () => {
    this.setState({ password: "", loading: false });
    this.props.navigation.navigate("Main");
  };
  onLoginFailed = error => {
    this.setState({ password: "", loading: false });
    alert("Log In Failed! " + error);
  };
  onLogin = () => {
    const { email, password } = this.state;
    this.setState({ loading: true });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        this.storeUserId(user.user.uid);
        this.onLoginSuccess();
        console.log("User Logged In: ", user);
      })
      .catch(error => {
        const { code, message } = error;
        this.onLoginFailed(error);
        console.log("User Logged In Error: ", error);
      });
  };
  async storeUserId(userId) {
    //const { token, userName, userEmail } = this.state;
    //console.log('states', token, userName, userEmail)
    try {
      await AsyncStorage.setItem(ACCESS_ID, userId);
      console.log("User Id Saved", userId);
    } catch (error) {
      console.log("User Id cannot be saved");
    }
  }
  toggleShow = () => {
    const { show } = this.state;
    return (
      <TouchableOpacity
        onPress={() => this.setState({ show: !show })}
        style={{ position: "absolute", right: 30 }}
      >
        <Icon name={show ? "ios-eye-off" : "ios-eye"} size={25} color="white" />
      </TouchableOpacity>
    );
  };
  toggleButton() {
    const { loading, email, password } = this.state;
    if (loading) {
      return (
        <ActivityIndicator
          color={Colors.secondary}
          size="large"
          animating={loading}
          style={{ alignSelf: "center" }}
        />
      );
    } else {
      return (
        <RoundButton
          style={{
            backgroundColor: Colors.secondary,
            color: Colors.white
          }}
          onPress={() => {
            if (!email) {
              alert("Email cannot be empty");
            } else if (!emailRegex.test(email)) {
              alert("Please enter a valid email (for e.g example@email.com)");
            } else if (!password) {
              alert("Password cannot be empty");
            } else if (password.length < 6) {
              alert("Password cannot be less than 6 characters");
            } else {
              this.onLogin();
            }
          }}
        >
          Sign In
        </RoundButton>
      );
    }
  }
  render() {
    const { email, password, show } = this.state;
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
          <TextField
            placeholder="Email"
            value={email}
            secureTextEntry={false}
            onChangeText={email => this.setState({ email })}
            keyboardType="email"
          />
          <View>
            <TextField
              placeholder="Password"
              value={password}
              secureTextEntry={show ? false : true}
              onChangeText={password => this.setState({ password })}
            />
            {this.toggleShow()}
          </View>
          <View style={{ marginTop: 50, marginBottom: 30 }}>
            {this.toggleButton()}
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
