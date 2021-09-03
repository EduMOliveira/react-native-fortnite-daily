import React from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AirbnbRating } from "react-native-ratings";

import vbucks from "../../assets/images/vbucks.png";

import { modalGradients } from "../../global/styles/modalGradients";
import styles from "./styles";

type ItemModalProps = {
  isVisible: boolean;
  toggle: () => void;
  img: string;
  name: string;
  price: string;
  type: string;
  desc: string;
  rating: number;
};

export function ItemModal({
  isVisible,
  toggle,
  img,
  name,
  price,
  type,
  desc,
  rating,
}: ItemModalProps) {
  return (
    <Modal isVisible={isVisible} onBackdropPress={toggle}>
      <LinearGradient
        colors={modalGradients[type]}
        style={styles.modalContainer}
      >
        <TouchableOpacity onPress={toggle}>
          <MaterialCommunityIcons
            name="close"
            size={30}
            color="white"
            style={styles.modalCloseIcon}
          />
        </TouchableOpacity>

        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: img }} />
        </View>

        <Text style={styles.title}>{name}</Text>
        <Text style={styles.description}>{desc ? `"${desc}"` : ``}</Text>

        <View style={styles.priceContainer}>
          <Image style={styles.vbucksImg} source={vbucks} />
          <Text style={styles.priceText}>{price}</Text>
        </View>

        <View style={styles.modalSeparator} />

        <View style={styles.ratingContainer}>
          <Text style={styles.ratingTitle}>Rating</Text>
          <AirbnbRating
            count={5}
            defaultRating={rating}
            size={20}
            //@ts-ignore
            unSelectedColor="#fff"
            showRating={false}
            isDisabled
          />
          <Text style={styles.ratingNum}>{rating}</Text>
        </View>
      </LinearGradient>
    </Modal>
  );
}
