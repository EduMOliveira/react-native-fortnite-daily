import { StyleSheet, Platform } from "react-native";

import { theme } from "../../global/styles/theme";
import { useResponsive } from "../../hooks/useResponsive";

const { fr } = useResponsive();

const styles = StyleSheet.create({
  timerContainer: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#576371",
    borderRadius: 50,
    paddingHorizontal: 18,
    paddingVertical: 6,
  },

  timerText: {
    fontFamily: theme.fonts.fontFamily,
    color: theme.colors.textColor,
    fontSize: fr(3.5, 20),
    marginBottom: Platform.OS === "ios" ? -2 : 0, //fix error alignSelf: center text in ios
  },
});

export default styles;
