import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { RoundButton, TextField, TahnkYou } from "./../components/index";
import Colors from "./../res/utils/Colors";
import Icons from "react-native-vector-icons/Ionicons";

export default class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      thankYouModal: false
    };
  }

  _renderThankYouModal = () => {
    this.setState({ thankYouModal: !this.state.thankYouModal });
  };
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
          style={{ height: 35, width: 35 }}
        >
          <Icon
            name="ios-close"
            color="white"
            size={35}
            style={{ marginLeft: 20, marginTop: 20 }}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: "white",
            fontSize: 30,
            alignSelf: "center",
            fontWeight: "bold"
          }}
        >
          Update Password
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
          <TextField placeholder="Name" />
        </View>
        <RoundButton
          style={{ backgroundColor: Colors.secondary, color: "white" }}
          onPress={() => this._renderThankYouModal()}
        >
          Update Password
        </RoundButton>
        <TahnkYou
          visible={this.state.thankYouModal}
          toggleView={this._renderThankYouModal}
          message="Your profile has been updated."
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
