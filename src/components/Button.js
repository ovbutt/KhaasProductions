import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import Colors from "./../res/utils/Colors";

const RoundButton = ({ onPress, children, style, ...rest }) => (
  <TouchableOpacity style={[styles.buttonStyle, style]} onPress={onPress}>
    <Text style={[styles.textStyle, style]}>{children}</Text>
  </TouchableOpacity>
);

export default RoundButton;

const styles = StyleSheet.create({
  buttonStyle: {
    width: "90%",
    height: 45,
    backgroundColor: Colors.white,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center"
  },
  textStyle: {
    fontSize: 18,
    color: Colors.secondary,
    fontWeight: "500"
  }
});
