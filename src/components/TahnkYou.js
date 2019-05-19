import React from "react";
import { View, Text, Modal, TouchableOpacity, Image } from "react-native";
import { RoundButton } from "./index";
import Colors from "./../res/utils/Colors";
import Icon from "react-native-vector-icons/Ionicons";

const TahnkYou = ({ visible, toggleView, message, goBack, ...rest }) => {
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
          <Image
            source={require("./../res/images/Logo-Khaas.png")}
            style={{ height: 60, width: 60 }}
          />
          <Text
            style={{
              fontSize: 24,
              color: Colors.secondary,
              fontWeight: "bold",
              marginBottom: 30,
              marginTop: 30
            }}
          >
            Thank You
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: "black",
              textAlign: "center",
              width: "90%"
            }}
          >
            {message}
          </Text>
          <View style={{ marginTop: 30, width: "100%" }}>
            <RoundButton
              style={{ backgroundColor: Colors.secondary, color: "white" }}
              onPress={() => {
                toggleView();
                // goBack();
              }}
            >
              Okay
            </RoundButton>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export { TahnkYou };
