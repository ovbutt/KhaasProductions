import React, { Component } from "react";
import { Text, StyleSheet, View, Image, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Colors from "./../res/utils/Colors";
import Button from "./../components/Button";

export default class ContactUs extends Component {
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
          <Button>Quotation Form</Button>
          <View style={{ marginTop: 10 }}>
            <Button
              style={{ backgroundColor: Colors.secondary, color: "white" }}
            >
              Feedback Form
            </Button>
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
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              source={require("./../res/images/email.png")}
              style={{ height: 25, width: 25 }}
            />
            <Text style={{ color: "white", fontSize: 16, marginLeft: 10 }}>
              info@khaasproductions.com
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 15
            }}
          >
            <Image
              source={require("./../res/images/call.png")}
              style={{ height: 25, width: 25 }}
            />
            <Text style={{ color: "white", fontSize: 16, marginLeft: 10 }}>
              +92 42 3578 1239
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 15
            }}
          >
            <Image
              source={require("./../res/images/whatsapp.png")}
              style={{ height: 25, width: 25 }}
            />
            <Text style={{ color: "white", fontSize: 16, marginLeft: 10 }}>
              +92 337 4866 669
            </Text>
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
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("./../res/images/facebook.png")}
                style={{ height: 25, width: 25 }}
              />
              <Text style={{ color: "white", fontSize: 15, marginLeft: 5 }}>
                khaasproductions
              </Text>
            </View>
            <View style={{ flexDirection: "row", marginLeft: 10 }}>
              <Image
                source={require("./../res/images/instagram.png")}
                style={{ height: 25, width: 25 }}
              />
              <Text style={{ color: "white", fontSize: 15, marginLeft: 5 }}>
                khaasproductions
              </Text>
            </View>
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
