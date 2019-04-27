import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Colors from "./../res/utils/Colors";
import { BottomTab } from "./../components";
import { Roboto, Ubuntu } from "./../res/utils/Fonts";

const exploreData = [
  { photo: require("./../res/images/story8.jpg") },
  { photo: require("./../res/images/story7.jpg") },
  { photo: require("./../res/images/story3.jpg") },
  { photo: require("./../res/images/story4.jpg") },
  { photo: require("./../res/images/story5.jpg") },
  { photo: require("./../res/images/story6.jpg") },
  { photo: require("./../res/images/story1.jpg") },
  { photo: require("./../res/images/story2.jpg") }
];
const categoriesData = [
  {
    name: "Fashion Shoot",
    photo: require("./../res/images/fashion.jpg")
  },
  {
    name: "Product Shoot",
    photo: require("./../res/images/product.jpg")
  },
  {
    name: "Wedding Shoot",
    photo: require("./../res/images/wedding.jpg")
  },
  {
    name: "Video Projects",
    photo: require("./../res/images/video.jpg")
  }
];
const clientsData = [
  {
    name: "Khaas Productions",
    photo: require("./../res/images/Logo-Khaas.png")
  },
  {
    name: "Khaas Productions",
    photo: require("./../res/images/Logo-Khaas.png")
  },
  {
    name: "Khaas Productions",
    photo: require("./../res/images/Logo-Khaas.png")
  },
  {
    name: "Khaas Productions",
    photo: require("./../res/images/Logo-Khaas.png")
  },
  {
    name: "Khaas Productions",
    photo: require("./../res/images/Logo-Khaas.png")
  }
];

export default class HomeScreen extends Component {
  exploreRender = ({ item }) => {
    return (
      <TouchableOpacity>
        <ImageBackground
          style={{ width: 130, height: 180, marginLeft: 5 }}
          source={`${item.photo}`}
          imageStyle={{ borderRadius: 25 }}
        />
      </TouchableOpacity>
    );
  };

  categoryRender = ({ item }) => {
    return (
      <TouchableOpacity>
        <ImageBackground
          style={{ width: "100%", height: 250 }}
          source={`${item.photo}`}
        >
          <Text
            style={{
              alignSelf: "center",
              position: "absolute",
              bottom: 30,
              color: Colors.white,
              fontSize: 24,
              fontWeight: "600"
            }}
          >
            {item.name}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  clientRender = ({ item }) => {
    return (
      <TouchableOpacity
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <ImageBackground
          style={{ width: 80, height: 80, marginLeft: 10 }}
          source={`${item.photo}`}
          imageStyle={{ borderRadius: 25 }}
        />
        <Text
          style={{
            width: "70%",
            textAlign: "center",
            color: Colors.black,
            fontSize: 15
          }}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text
            style={[
              styles.headingStyle,
              { marginLeft: 20, fontFamily: Roboto.italic }
            ]}
          >
            Explore
          </Text>
          <View style={{ marginTop: 20 }}>
            <FlatList
              data={exploreData}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={this.exploreRender}
              keyExtractor={(item, index) => index.toString()}
              style={{ paddingRight: 20 }}
            />
          </View>
          <Text style={[styles.headingStyle, { marginLeft: 20 }]}>
            Categories
          </Text>
          <View style={{ marginTop: 20 }}>
            <FlatList
              data={categoriesData}
              showsVerticalScrollIndicator={false}
              renderItem={this.categoryRender}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          <Text style={[styles.headingStyle, { marginLeft: 10 }]}>
            Our Clients
          </Text>
          <View style={{ marginRight: 5, marginTop: 20, marginBottom: 80 }}>
            <FlatList
              data={clientsData}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              renderItem={this.clientRender}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </ScrollView>
        <BottomTab
          onPressAbout={() => this.props.navigation.navigate("About")}
          onPressContact={() => this.props.navigation.navigate("Contact")}
          onPressProfile={() => this.props.navigation.navigate("Profile")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headingStyle: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.black
  }
});
