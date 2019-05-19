import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Modal,
  TextInput,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import { RoundButton } from "./index";
import Colors from "./../res/utils/Colors";
import Icon from "react-native-vector-icons/Ionicons";
import firebase from "react-native-firebase";

const ACCESS_ID = "access_id";

class QuoteForm extends Component {
  constructor(props) {
    super(props);
    this.ref1 = firebase.firestore().collection("Users");
    this.ref2 = firebase.firestore().collection("Quotations");
    this.state = {
      name: "",
      email: "",
      userId: "",
      phoneNum: "",
      docId: "",
      quote: ""
    };
  }

  componentWillMount() {
    this.getUserId();
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

  getUserData(id) {
    console.log("Getting user data Id is: ", id);
    this.ref1
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

  saveQuotes() {
    const { toggleView, toggleThankyou } = this.props;
    this.ref2
      .add({
        name: this.state.name,
        email: this.state.email,
        userId: this.state.userId,
        phoneNum: this.state.phoneNum,
        quote: this.state.quote
      })
      .then(res => {
        console.log("Response from adding quote: ", res);
        toggleView();
        toggleThankyou();
      })
      .catch(err => {
        console.log("Error from saving quote: ", err);
        alert(err);
      });
  }

  render() {
    const { visible, toggleView, toggleThankyou } = this.props;
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          toggleView();
        }}
      >
        <View
          style={{
            //backgroundColor: "white",
            //borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            //alignSelf: "center"
            flex: 1
          }}
        >
          <View
            style={{
              height: "60%",
              width: "90%",
              backgroundColor: "white",
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column"
            }}
          >
            <TouchableOpacity
              onPress={() => toggleView()}
              style={{
                height: 35,
                width: 35,
                position: "absolute",
                top: 20,
                left: 20
              }}
            >
              <Icon name="ios-close" color="black" size={35} />
            </TouchableOpacity>
            <Text style={{ fontSize: 24, color: "black", fontWeight: "bold" }}>
              Quotation Form
            </Text>
            <TextInput
              placeholder="Please enter details for quotation"
              placeholderTextColor={Colors.secondary}
              numberOfLines={8}
              multitile={true}
              selectionColor={Colors.secondary}
              fontSize={18}
              style={{
                borderColor: Colors.secondary,
                borderWidth: 1,
                borderRadius: 20,
                marginTop: 20,
                width: "90%"
              }}
              onChangeText={quote => {
                this.setState({ quote });
              }}
              value={this.state.quote}
            />
            <View style={{ marginTop: 20, width: "100%" }}>
              <RoundButton
                style={{ backgroundColor: Colors.secondary, color: "white" }}
                onPress={() => {
                  this.saveQuotes();
                }}
              >
                Send Message
              </RoundButton>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({});

export { QuoteForm };
