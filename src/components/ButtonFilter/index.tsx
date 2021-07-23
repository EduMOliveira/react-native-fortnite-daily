import React from "react";
import { Text, TouchableOpacity } from "react-native";

import styles from "./styles";

type BtnProps = {
  item: {
    id: number;
    name: string;
  };

  onPress: () => void;
};

export function ButtonFilter({ item, onPress }: BtnProps) {
  const { id, name } = item;

  return (
    <TouchableOpacity key={id} style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
}
