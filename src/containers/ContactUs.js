import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
  Platform
} from "react-native";
import Communications from "react-native-communications";
// import MapView from "react-native-maps";
import Icon from "react-native-vector-icons/Ionicons";
import Colors from "./../res/utils/Colors";
import {
  RoundButton,
  QuoteForm,
  FeedbackForm,
  TahnkYou
} from "./../components";

export default class ContactUs extends Component {
  constructor() {
    super();
    this.state = {
      quoteModal: false,
      feedbackModal: false,
      thankYouModal: false
    };
  }
  _renderQuoteModal = () => {
    this.setState({ quoteModal: !this.state.quoteModal });
  };
  _renderFeedbackModal = () => {
    this.setState({ feedbackModal: !this.state.feedbackModal });
  };
  _renderThankYouModal = () => {
    this.setState({ thankYouModal: !this.state.thankYouModal });
  };
  _openGoogleMaps = () => {
    const scheme = Platform.select({
      ios: "maps:0,0?q=",
      android: "geo:0,0?q="
    });
    const latLng = "31.515612,74.344103";
    const label = "Khaas Productions";
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`
    });

    Linking.openURL(url);
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: Colors.primary }}>
        <ScrollView>
          <TouchableOpacity
            onPress={() => this.props.navigation.pop()}
            style={{ height: 35, width: 35, marginLeft: 20, marginTop: 20 }}
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
          <RoundButton
            onPress={() => {
              this.setState({ quoteModal: !this.state.quoteModal });
            }}
          >
            Quotation Form
          </RoundButton>
          <QuoteForm
            toggleView={this._renderQuoteModal}
            toggleThankyou={this._renderThankYouModal}
            visible={this.state.quoteModal}
          />
          <View style={{ marginTop: 10 }}>
            <RoundButton
              style={{ backgroundColor: Colors.secondary, color: "white" }}
              onPress={() => {
                this.setState({ feedbackModal: !this.state.feedbackModal });
              }}
            >
              Feedback Form
            </RoundButton>
            <FeedbackForm
              visible={this.state.feedbackModal}
              toggleThankyou={this._renderThankYouModal}
              toggleView={this._renderFeedbackModal}
            />
            <TahnkYou
              visible={this.state.thankYouModal}
              toggleView={this._renderThankYouModal}
              message="Thank your for your valuable gesture our representative will contact you shortly."
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
          {/* <TouchableOpacity
            onPress={() => {
              this._openGoogleMaps();
            }}
          >
            <Image
              source={require("./../res/images/map.png")}
              style={{
                height: 250,
                width: "90%",
                marginBottom: 10,
                alignSelf: "center"
              }}
            />
          </TouchableOpacity> */}
          <View style={{ marginBottom: 20 }}>
            <RoundButton
              style={{ backgroundColor: Colors.secondary, color: "white" }}
              onPress={() => {
                this._openGoogleMaps();
              }}
            >
              Get Directions
            </RoundButton>
          </View>
          {/* <View style={styles.container}>
            <MapView
              style={styles.map}
              region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121
              }}
            />
          </View> */}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});
