import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Modal,
  TextInput,
  TouchableOpacity
} from "react-native";
import { RoundButton } from "./index";
import Colors from "./../res/utils/Colors";
import Icon from "react-native-vector-icons/Ionicons";
class FeedbackForm extends Component {
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
              Feedback Form
            </Text>
            <TextInput
              placeholder="Please enter your feedback"
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
            />
            <View style={{ marginTop: 20, width: "100%" }}>
              <RoundButton
                style={{ backgroundColor: Colors.secondary, color: "white" }}
                onPress={() => {
                  toggleView();
                  toggleThankyou();
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

export { FeedbackForm };
