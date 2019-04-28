import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import firebase from "react-native-firebase";
import { RoundButton, TextField } from "./../components";
import Colors from "./../res/utils/Colors";
//import Regex from "./../res/utils/Regex";
// number: /^((+92)|(0092))-{0,1}d{3}-{0,1}d{7}$|^d{11}$|^d{4}-d{7}$/,
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const nameRegex = /^[^\\/&]*$/;

export default class SignupScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phoneNum: "",
      password: "",
      confirmPass: "",
      loading: false
    };
  }

  onSignupSuccess = () => {
    this.setState({ password: "", loading: false, confirmPass: "" });
    this.props.navigation.navigate("Main");
  };
  onSignupFailed = error => {
    this.setState({ password: "", loading: false, confirmPass: "" });
    alert("Sign Up Failed! " + error);
  };

  toggleButton() {
    const {
      loading,
      email,
      password,
      confirmPass,
      name,
      phoneNum
    } = this.state;
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
            console.log(email, password, confirmPass, name, phoneNum);
            if (!name) {
              alert("Name cannot be empty");
            } else if (!nameRegex.test(name)) {
              alert("Name cannot contain numbers");
            } else if (!email) {
              alert("Email cannot be empty");
            } else if (!emailRegex.test(email)) {
              alert("Please enter a valid Email (for e.g example@email.com) ");
            } else if (!phoneNum) {
              alert("Phone Number cannot be empty");
            } else if (!phoneNum.startsWith("+923")) {
              alert(
                "Phone Number should start with +923 (for e.g +923211234567)"
              );
            } else if (!password) {
              alert("Password cannot be empty");
            } else if (password.length < 6) {
              alert("Password cannot be less than 6 characters");
            } else if (!confirmPass) {
              alert("Confirm Password cannot be empty");
            } else if (confirmPass.length < 6) {
              alert("Confirm Password cannot be less than 6 characters");
            } else if (password != confirmPass) {
              alert("Password & Confirm Password does not match");
            } else {
              this.onRegister();
            }
          }}
        >
          Sign Up
        </RoundButton>
      );
    }
  }

  onRegister = () => {
    this.setState({ loading: true });
    const { email, password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        this.onSignupSuccess();
        console.log("Signup Successfull: ", user);
      })
      .catch(error => {
        const { code, message } = error;
        this.onSignupFailed(error);
        console.log("Signup Unsuccessfull: ", error);
      });
  };

  render() {
    const { name, email, phoneNum, password, confirmPass } = this.state;
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
          <TextField
            placeholder="Name"
            value={name}
            secureTextEntry={false}
            onChangeText={name =>
              this.setState({ name: name.replace(/[^ ,a-z,A-Z]/g, "") })
            }
          />
          <TextField
            placeholder="Email"
            value={email}
            secureTextEntry={false}
            onChangeText={email =>
              this.setState({ email: email.toLowerCase() })
            }
            keyboardType="email"
          />
          <TextField
            placeholder="Phone Number"
            value={phoneNum}
            secureTextEntry={false}
            onChangeText={phoneNum =>
              this.setState({ phoneNum: phoneNum.replace(/[^+,0-9]/g, "") })
            }
            keyboardType="numeric"
          />
          <TextField
            placeholder="Password"
            value={password}
            secureTextEntry={true}
            onChangeText={password => this.setState({ password })}
          />
          <TextField
            placeholder="Confirm Password"
            value={confirmPass}
            secureTextEntry={true}
            onChangeText={confirmPass => this.setState({ confirmPass })}
          />
          <View style={{ marginTop: 30, marginBottom: 10 }}>
            {this.toggleButton()}
          </View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Login");
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
