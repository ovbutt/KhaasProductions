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
import Button from "./../components/Button";

export default class ProfileScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: Colors.primary }}>
        <Icon
          name="ios-close"
          color="white"
          size={35}
          style={{ marginLeft: 20, marginTop: 20 }}
          onPress={() => this.props.navigation.goBack()}
        />
        <Icon
          name="md-create"
          color="white"
          size={25}
          style={{ position: "absolute", right: 20, top: 30 }}
          //onPress={() => this.props.navigation.goBack()}
        />
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
          <Button
            style={{ backgroundColor: Colors.secondary, color: "white" }}
            onPress={() => this.props.navigation.navigate("Auth")}
          >
            Sign Out
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
