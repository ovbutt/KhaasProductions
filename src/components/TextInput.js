import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import Colors from "../res/utils/Colors";

const TextField = ({ placeholder, children, style, ...rest }) => (
  <View style={{ alignItems: "center", justifyContent: "center" }}>
    <TextInput
      style={styles.textInputStyle}
      selectionColor={Colors.white}
      underlineColorAndroid={Colors.white}
      placeholder={placeholder}
      placeholderTextColor={[Colors.white]}
    />
  </View>
);

export { TextField };

const styles = StyleSheet.create({
  textInputStyle: {
    color: Colors.white,
    fontSize: 18,
    height: 50,
    width: "90%",
    paddingLeft: 15,
    paddingBottom: 15
  }
});

TextInput.propTypes = {
  placeholder: PropTypes.string
};
