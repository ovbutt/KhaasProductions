import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Modal,
  ActivityIndicator
} from "react-native";
import { RoundButton, TextField } from ".";
import Colors from "../res/utils/Colors";

export default class VerificationCode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      codeInput: "",
      loading1: false,
      loading2: false
    };
  }

  checkCode() {
    this.setState({ loading1: true });
    var { toggleView, code, onRegister } = this.props;
    if (code == this.state.codeInput) {
      alert("Phone Number Verified");
      toggleView();
      onRegister();
      this.setState({ loading1: false });
    } else {
      this.setState({ loading1: false });
      alert("Your phone verification code did not match please try again! ");
    }
  }

  renderVerifyCodeButton() {
    if (this.state.loading1) {
      return (
        <ActivityIndicator
          color={Colors.secondary}
          size="large"
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
          onPress={() => this.checkCode()}
        >
          Verify Code
        </RoundButton>
      );
    }
  }

  render() {
    var { visible, toggleView, verifyPhoneNumber } = this.props;
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={visible}
        onRequestClose={() => {
          toggleView();
        }}
      >
        <ImageBackground
          source={require("../res/images/verificationBG.png")}
          style={{ width: "100%", height: "100%" }}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text
              style={{ color: Colors.white, fontSize: 30, fontWeight: "bold" }}
            >
              {" "}
              Code Verification{" "}
            </Text>
            <Text
              style={{
                marginTop: 30,
                fontSize: 18,
                color: "#000",
                width: "90%",
                textAlign: "center",
                marginBottom: 30
              }}
            >
              We have sent you verification code please verify your phone number
            </Text>
            <View
              style={{
                marginBottom: 50,
                width: "90%"
              }}
            >
              <TextField
                placeholder="Verification Code"
                value={this.state.codeInput}
                secureTextEntry={false}
                onChangeText={codeInput => this.setState({ codeInput })}
              />
            </View>
            <View style={{ width: "100%" }}>
              {this.renderVerifyCodeButton()}
            </View>
            <View style={{ width: "100%", marginTop: 20 }}>
              <RoundButton onPress={() => verifyPhoneNumber()}>
                Resend Code
              </RoundButton>
            </View>
          </View>
        </ImageBackground>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({});
