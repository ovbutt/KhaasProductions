import React, { Component } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { RoundButton, TextField, TahnkYou } from "./../components/index";
import Colors from "./../res/utils/Colors";
import Icon from "react-native-vector-icons/Ionicons";
import firebase from "react-native-firebase";

export default class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("Users");
    this.state = {
      thankYouModal: false,
      name: this.props.navigation.state.params.name,
      userId: this.props.navigation.state.params.userId,
      docId: this.props.navigation.state.params.docId
    };
    console.log(this.state.name, this.state.userId);
  }

  _renderThankYouModal = () => {
    this.setState({ thankYouModal: !this.state.thankYouModal });
  };
  goBack = () => {
    this.props.navigation.goBack();
  };

  updateUser() {
    console.log("Update User Function");
    this.ref
      .doc(this.state.docId)
      .update({
        name: this.state.name
      })
      .then(res => {
        console.log("Updated User: ", res);
        this._renderThankYouModal();
      });
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.primary,
          justifyContent: "center",
          alignItems: "center",
          width: "100%"
        }}
      >
        <TouchableOpacity
          onPress={() => this.props.navigation.pop()}
          style={{
            height: 35,
            width: 35,
            position: "absolute",
            top: 20,
            right: 20
          }}
        >
          <Icon name="ios-close" color="white" size={35} />
        </TouchableOpacity>
        <Text
          style={{
            color: "white",
            fontSize: 30,
            alignSelf: "center",
            fontWeight: "bold"
          }}
        >
          Update Profile
        </Text>
        <Image
          source={require("./../res/images/profilePic.png")}
          style={{
            height: 110,
            width: 110,
            alignSelf: "center",
            marginTop: 50
          }}
        />
        <View
          style={{
            flexDirection: "column",
            width: "90%",
            marginTop: 50,
            marginBottom: 50
          }}
        >
          <TextField
            placeholder="Name"
            value={this.state.name}
            onChangeText={name => this.setState({ name })}
          />
        </View>
        <RoundButton
          style={{ backgroundColor: Colors.secondary, color: "white" }}
          onPress={() => {
            this.updateUser();
          }}
        >
          Update Profile
        </RoundButton>
        <TahnkYou
          visible={this.state.thankYouModal}
          toggleView={this._renderThankYouModal}
          goBack={this.goBack}
          message="Your profile has been updated."
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
