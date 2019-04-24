import React, { Component } from "react";
import { Text, StyleSheet, View, Modal } from "react-native";

export default class QuoteForm extends Component {
  render() {
    const { visible, toggleView } = this.props;
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={visible}
          onRequestClose={() => {
            toggleView();
          }}
        >
          <Text>Hello Modal</Text>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
