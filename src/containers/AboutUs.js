import React, { Component } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Colors from "./../res/utils/Colors";

export default class AboutUs extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: Colors.primary }}>
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
          About Us
        </Text>
        <Image
          source={require("./../res/images/LogoSplash.png")}
          style={{ alignSelf: "center", marginTop: 30, marginBottom: 40 }}
        />
        <Text
          style={{
            textAlign: "justify",
            color: "white",
            fontSize: 15,
            width: "95%",
            alignSelf: "center"
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
