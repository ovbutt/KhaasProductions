import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  AsyncStorage
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Colors from "./../res/utils/Colors";
import { RoundButton } from "./../components";
import firebase from "react-native-firebase";

const ACCESS_ID = "access_id";

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("Users");
    this.state = { name: "", email: "", userId: "", phoneNum: "", docId: "" };
  }
  componentWillMount() {
    this.getUserId();
  }

  getUserData(id) {
    console.log("Getting user data Id is: ", id);
    this.ref
      .where("userId", "==", id)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          console.log("Query Response is: ", doc.id, "=>", doc.data());
          this.setState({
            email: doc.data().email,
            name: doc.data().name,
            phoneNum: doc.data().phoneNum,
            docId: doc.id
          });
        });
      })
      .catch(err => {
        console.log("Error while fetching user: ", err);
      });
  }

  async getUserId() {
    try {
      let id = await AsyncStorage.getItem(ACCESS_ID);
      this.setState({
        userId: id
      });
      console.log("UserId is", id);
      this.getUserData(id);
    } catch (error) {
      console.log("Cannot get UserId");
    }
  }

  async removeUserId() {
    try {
      await AsyncStorage.removeItem(ACCESS_ID);
      console.log("UserId removed");
      {
        this.props.navigation.navigate("Auth");
      }
    } catch (error) {
      console.log("Cannot remove UserId");
    }
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: Colors.primary }}>
        <TouchableOpacity
          onPress={() => this.props.navigation.pop()}
          style={{ height: 35, width: 35, marginLeft: 25, marginTop: 30 }}
        >
          <Icon name="ios-close" color="white" size={35} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate("EditProfile", {
              userId: this.state.userId,
              name: this.state.name,
              docId: this.state.docId
            })
          }
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
            <Text style={{ color: "white", fontSize: 16 }}>
              {this.state.name}
            </Text>
          </Text>
          <Text style={{ color: "white", fontSize: 18, marginTop: 5 }}>
            Email:{" "}
            <Text style={{ color: "white", fontSize: 16 }}>
              {this.state.email}
            </Text>
          </Text>
          <Text style={{ color: "white", fontSize: 18, marginTop: 5 }}>
            Phone Number:{" "}
            <Text style={{ color: "white", fontSize: 16 }}>
              {this.state.phoneNum}
            </Text>
          </Text>
        </View>
        <View style={{ marginTop: 40 }}>
          {/* <RoundButton
            //style={{ backgroundColor: Colors.secondary, color: "white" }}
            onPress={() => this.props.navigation.navigate("UpdatePassword")}
          >
            Update Password
          </RoundButton> */}

          <View style={{ marginTop: 10 }}>
            <RoundButton
              style={{ backgroundColor: Colors.secondary, color: "white" }}
              onPress={() => {
                firebase
                  .auth()
                  .signOut()
                  .then(res => {
                    console.log("Signout success: ", res);

                    this.removeUserId();
                  })
                  .catch(err => {
                    console.log("Error while Signing out: ", err);
                  });
                // this.props.navigation.navigate("Auth");
              }}
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
