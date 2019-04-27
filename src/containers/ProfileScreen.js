import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Colors from "./../res/utils/Colors";
import { RoundButton } from "./../components";

export default class ProfileScreen extends Component {
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
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("EditProfile")}
          style={{
            position: "absolute",
            right: 20,
            top: 30,
            height: 25,
            width: 25
          }}
        >
          <Icon name="md-create" color="white" size={25} />
        </TouchableOpacity>
        <Text
          style={{
            color: "white",
            fontSize: 30,
            alignSelf: "center",
            fontWeight: "bold"
          }}
        >
          Profile
        </Text>
        <Image
          source={require("./../res/images/profilePic.png")}
          style={{
            height: 110,
            width: 110,
            alignSelf: "center",
            marginTop: 40
          }}
        />
        <View style={{ marginTop: 40, marginLeft: 30 }}>
          <Text style={{ color: "white", fontSize: 18 }}>
            Name:{" "}
            <Text style={{ color: "white", fontSize: 16 }}>Ovais Butt</Text>
          </Text>
          <Text style={{ color: "white", fontSize: 18, marginTop: 5 }}>
            Email:{" "}
            <Text style={{ color: "white", fontSize: 16 }}>
              ovaisbutt786@gmail.com
            </Text>
          </Text>
        </View>
        <View style={{ marginTop: 40 }}>
          <RoundButton
            //style={{ backgroundColor: Colors.secondary, color: "white" }}
            onPress={() => this.props.navigation.navigate("UpdatePassword")}
          >
            Update Password
          </RoundButton>

          <View style={{ marginTop: 10 }}>
            <RoundButton
              style={{ backgroundColor: Colors.secondary, color: "white" }}
              onPress={() => this.props.navigation.navigate("Auth")}
            >
              Sign Out
            </RoundButton>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
