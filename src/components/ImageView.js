import React from "react";
import { Modal } from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";

const images = [
  {
    props: {
      source: require("./../res/images/story8.jpg"),
      source: require("./../res/images/story7.jpg"),
      source: require("./../res/images/story3.jpg"),
      source: require("./../res/images/story4.jpg"),
      source: require("./../res/images/story5.jpg"),
      source: require("./../res/images/story6.jpg"),
      source: require("./../res/images/story1.jpg"),
      source: require("./../res/images/story2.jpg")
    }
  }
];

const ImageView = ({ visible, toggleView }) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={() => toggleView()}
    >
      <ImageViewer
        imageUrls={images}
        enableImageZoom={true}
        onSwipeDown={() => toggleView()}
        enableSwipeDown={true}
      />
    </Modal>
  );
};

export { ImageView };
