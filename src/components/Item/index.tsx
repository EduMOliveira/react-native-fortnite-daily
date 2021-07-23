import React, { useState } from "react";
import { View, Image, Text } from "react-native";
import { ActivityIndicator } from "react-native-paper";

import { ItemClipPath } from "../../components/ItemClipPath";

import vbucks from "../../assets/images/vbucks.png";

import styles from "./styles";

type ItemProps = {
  marginB: boolean;
  img: string;
  name: string;
  price: string;
  type: string;
};

function Item({ marginB, img, name, price, type }: ItemProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <View style={[styles.container, { marginTop: marginB ? -35 : 0 }]}>
      <View style={styles.itemBg}>
        <ItemClipPath type={type} />
      </View>
      <View style={styles.imageContainer}>
        {isLoading && <ActivityIndicator style={{ position: "absolute" }} animating={true} color={"#fff"} />}
        <Image
          style={styles.image}
          source={{
            uri: img,
          }}
          onLoad={() => setIsLoading(false)}
          resizeMode={"contain"}
        />
      </View>
      <Text style={styles.skinName}>{name.slice(0, 12).concat("...")}</Text>

      <View style={styles.priceContainer}>
        <Text style={styles.price}>{price}</Text>
        <Image style={styles.vbucksImg} source={vbucks} />
      </View>
    </View>
  );
}

export default React.memo(Item);
