import React from "react";
import { TouchableHighlight } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import styles from "./styles";

type Props = {
  onPress?: () => void;
};

export function FActionButton({ onPress }: Props) {
  return (
    <TouchableHighlight
      style={styles.btn}
      onPress={onPress}
      underlayColor="#83909e"
    >
      <MaterialIcons name="keyboard-arrow-up" size={24} color="#fff" />
    </TouchableHighlight>
  );
}
