import React, { useState } from "react";
import { View, Image, Text, Button, TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native-paper";

import { ItemClipPath } from "../../components/ItemClipPath";
import { ItemModal } from "../ItemModal";

import vbucks from "../../assets/images/vbucks.png";

import styles from "./styles";

type ItemProps = {
  marginB: boolean;
  img: string;
  name: string;
  price: string;
  type: string;
  desc: string;
  rating: number;
};

function Item({ marginB, img, name, price, type, desc, rating }: ItemProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => setModalVisible(!isModalVisible);

  return (
    <TouchableOpacity onPress={toggleModal} style={[styles.container, { marginTop: marginB ? -34 : 0 }]}>
      <View style={styles.itemBg}>
        <ItemClipPath type={type} />
      </View>
      <View style={[styles.imageContainer]}>
        {isLoading && <ActivityIndicator style={{ position: "absolute" }} animating={true} color={"#fff"} />}
        <Image
          style={styles.image}
          source={{
            uri: img,
          }}
          onLoad={() => setIsLoading(false)}
        />
      </View>
      <View style={styles.textsContainer}>
        <Text style={styles.skinName}>{name.length >= 13 ? name.slice(0, 13).concat("...") : name}</Text>

        <View style={styles.priceContainer}>
          <Text style={styles.price}>{price}</Text>
          <Image style={styles.vbucksImg} source={vbucks} />
        </View>
      </View>

      <ItemModal
        isVisible={isModalVisible}
        toggle={toggleModal}
        img={img}
        name={name}
        price={price}
        type={type}
        desc={desc}
        rating={rating}
      />
    </TouchableOpacity>
  );
}

export default React.memo(Item);
