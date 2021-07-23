import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

import moment from "moment-timezone";

import styles from "./styles";

export function Timer() {
  const [timerString, setTimerString] = useState("00:00:00");

  function handleTimer() {
    let tomorrow = moment(new Date(), "YYYY-MM-DD HH:mm:ss").add(1, "d").tz("UTC");
    tomorrow.set({ hour: 0, minute: 5, second: 0, millisecond: 0 });
    let now = moment(new Date(), "YYYY-MM-DD HH:mm:ss").tz("UTC");
    let diff = moment.utc(tomorrow.diff(now)).format("HH:mm:ss");

    return diff;
  }

  useEffect(() => {
    setInterval(() => {
      const date = handleTimer().toString();
      setTimerString(date);
    }, 1000);
  }, []);

  return (
    <View style={styles.timerContainer}>
      <Text style={styles.timerText}>Next: {timerString}</Text>
    </View>
  );
}
