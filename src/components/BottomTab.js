import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Colors from "./../res/utils/Colors";
import Icon from "react-native-vector-icons/Ionicons";

const BottomTab = ({
  onPressAbout,
  onPressContact,
  onPressProfile,
  ...rest
}) => {
  return (
    <View
      style={{
        backgroundColor: "rgba(255,255,255,0.4)",
        position: "absolute",
        borderRadius: 40,
        elevation: 2,
        shadowColor: "black",
        flexDirection: "row",
        bottom: 10,
        alignSelf: "center",
        width: "90%",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 10,
        paddingBottom: 5
      }}
    >
      <TouchableOpacity
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Image
          source={require("./../res/images/explore.png")}
          style={{ height: 25, width: 25 }}
        />
        <Text style={{ color: "black" }}>Explore</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 15
        }}
        onPress={onPressAbout}
      >
        <Image
          source={require("./../res/images/about.png")}
          style={{ height: 25, width: 25 }}
        />
        <Text style={{ color: "black" }}>About Us</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 15
        }}
        onPress={onPressContact}
      >
        <Image
          source={require("./../res/images/contact.png")}
          style={{ height: 25, width: 25 }}
        />
        <Text style={{ color: "black" }}>Contact Us</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 15
        }}
        onPress={onPressProfile}
      >
        <Image
          source={require("./../res/images/profile.png")}
          style={{ height: 25, width: 25 }}
        />
        <Text style={{ color: "black" }}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export { BottomTab };
