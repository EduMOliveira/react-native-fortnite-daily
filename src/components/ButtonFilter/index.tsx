import React from "react";
import { Text, TouchableOpacity } from "react-native";

import styles from "./styles";

type BtnProps = {
  item: {
    id: number;
    name: string;
  };

  onPressItem: () => void;
  isSelected: boolean;
};

export function ButtonFilter({ item, onPressItem, isSelected }: BtnProps) {
  const { id, name } = item;

  return (
    <TouchableOpacity key={id} style={styles.container} onPress={onPressItem}>
      <Text style={[styles.text, { color: isSelected ? "#576371" : "white" }]}>{name}</Text>
    </TouchableOpacity>
  );
}
