import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking
} from "react-native";
import Communications from "react-native-communications";
import Icon from "react-native-vector-icons/Ionicons";
import Colors from "./../res/utils/Colors";
import Button from "./../components/Button";
import QuoteForm from "./../components/QuoteForm";
import FeedbackForm from "./../components/FeedbackForm";

export default class ContactUs extends Component {
  constructor() {
    super();
    this.state = { quoteModal: false, feedbackModal: false };
  }
  _renderQuoteModal = () => {
    this.setState({ quoteModal: !this.state.quoteModal });
  };
  _renderFeedbackModal = () => {
    this.setState({ feedbackModal: !this.state.feedbackModal });
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: Colors.primary }}>
        <ScrollView>
          <Icon
            name="ios-close"
            color="white"
            size={35}
            style={{ marginLeft: 20, marginTop: 20 }}
            onPress={() => this.props.navigation.goBack()}
          />
          <Text
            style={{
              color: "white",
              fontSize: 30,
              alignSelf: "center",
              fontWeight: "bold"
            }}
          >
            Contact Us
          </Text>
          <Text
            style={{
              marginTop: 20,
              marginBottom: 20,
              color: "white",
              fontSize: 18,
              alignSelf: "center",
              textAlign: "justify",
              width: "90%"
            }}
          >
            Get a price quote or give us feedbacks on our feedback form
          </Text>
          <Button
            onPress={() => {
              this._renderQuoteModal();
            }}
          >
            Quotation Form
          </Button>
          <QuoteForm
            toggleView={this._renderQuoteModal}
            visible={this.state.quoteModal}
          />
          <View style={{ marginTop: 10 }}>
            <Button
              style={{ backgroundColor: Colors.secondary, color: "white" }}
              onPress={() => {
                this._renderFeedbackModal();
              }}
            >
              Feedback Form
            </Button>
            <FeedbackForm
              visible={this.state.feedbackModal}
              toggleView={this._renderFeedbackModal}
            />
          </View>
          <Text
            style={{
              marginTop: 20,
              marginBottom: 10,
              color: "white",
              fontSize: 18,
              alignSelf: "center",
              fontWeight: "bold"
            }}
          >
            OR
          </Text>
          <Text
            style={{
              marginBottom: 20,
              color: "white",
              fontSize: 18,
              alignSelf: "center",
              fontWeight: "600",
              textDecorationLine: "underline"
            }}
          >
            Contact Us @
          </Text>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
            onPress={() =>
              Communications.email(
                ["info@khaasproductions.com"],
                null,
                null,
                null,
                null
              )
            }
          >
            <Image
              source={require("./../res/images/email.png")}
              style={{ height: 25, width: 25 }}
            />
            <Text style={{ color: "white", fontSize: 16, marginLeft: 10 }}>
              info@khaasproductions.com
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 15
            }}
            onPress={() => {
              Communications.phonecall("+924235781239", true);
            }}
          >
            <Image
              source={require("./../res/images/call.png")}
              style={{ height: 25, width: 25 }}
            />
            <Text style={{ color: "white", fontSize: 16, marginLeft: 10 }}>
              +92 42 3578 1239
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 15
            }}
            onPress={() => {
              Linking.openURL("whatsapp://send?text=&phone=+923374866669");
            }}
          >
            <Image
              source={require("./../res/images/whatsapp.png")}
              style={{ height: 25, width: 25 }}
            />
            <Text style={{ color: "white", fontSize: 16, marginLeft: 10 }}>
              +92 337 4866 669
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              color: "white",
              fontSize: 18,
              alignSelf: "center",
              marginTop: 20,
              marginBottom: 20,
              fontWeight: "600",
              textDecorationLine: "underline"
            }}
          >
            Follow us @
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "center"
            }}
          >
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => {
                Communications.web(
                  "https://www.facebook.com/khaasproductions/"
                );
              }}
            >
              <Image
                source={require("./../res/images/facebook.png")}
                style={{ height: 25, width: 25 }}
              />
              <Text style={{ color: "white", fontSize: 15, marginLeft: 5 }}>
                khaasproductions
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flexDirection: "row", marginLeft: 10 }}
              onPress={() => {
                Communications.web(
                  "https://www.instagram.com/khaasproductions/"
                );
              }}
            >
              <Image
                source={require("./../res/images/instagram.png")}
                style={{ height: 25, width: 25 }}
              />
              <Text style={{ color: "white", fontSize: 15, marginLeft: 5 }}>
                khaasproductions
              </Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              color: "white",
              fontSize: 18,
              alignSelf: "center",
              marginTop: 20,
              marginBottom: 20,
              fontWeight: "600",
              textDecorationLine: "underline"
            }}
          >
            Visit us @
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 16,
              alignSelf: "center",
              marginBottom: 20,
              width: "90%"
            }}
          >
            <Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>
              Address:{" "}
            </Text>
            Shop#5 - 1st Floor Al latif Center Opposite Hafeez Center Gulberg
            Lahore
          </Text>
          <Image
            source={require("./../res/images/map.png")}
            style={{
              height: 250,
              width: "90%",
              marginBottom: 10,
              alignSelf: "center"
            }}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
