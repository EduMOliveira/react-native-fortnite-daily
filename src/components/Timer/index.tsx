import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import moment from "moment-timezone";

import styles from "./styles";

type TimerProps = {
  timerReloadBtn: () => void;
};

export function Timer({ timerReloadBtn }: TimerProps) {
  const [timerString, setTimerString] = useState("00:00:00");
  const [showReload, setShowReload] = useState(false);

  function handleTimer() {
    // get next utc day
    let tomorrow = moment(new Date(), "YYYY-MM-DD HH:mm:ss").add(1, "d").tz("UTC");
    // set to 00:05:00 into next utc day to prevent "bug" when api reload data
    tomorrow.set({ hour: 0, minute: 5, second: 0, millisecond: 0 });
    // get date now in utc
    let now = moment(new Date(), "YYYY-MM-DD HH:mm:ss").tz("UTC");
    // formatted difference of tomorrow - now
    let diffFormatted = moment.utc(tomorrow.diff(now)).format("HH:mm:ss");
    // difference of tomorrow - now in Milliseconds
    let diffMs = tomorrow.diff(now);

    return { diffFormatted, diffMs };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const { diffFormatted, diffMs } = handleTimer();

      diffMs <= 35000 ? setShowReload(true) : setTimerString(diffFormatted.toString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <View style={styles.timerContainer}>
      <Text style={styles.timerText}>
        Next:{" "}
        {!showReload ? (
          timerString
        ) : (
          <TouchableOpacity onPress={timerReloadBtn}>
            <Text style={styles.timerText}>
              {"  "}
              NOW! <MaterialCommunityIcons name="reload" size={18} color="white" />
            </Text>
          </TouchableOpacity>
        )}
      </Text>
    </View>
  );
}
