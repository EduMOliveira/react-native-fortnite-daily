import { Platform, StatusBar } from "react-native";
import { StyleSheet } from "react-native";
import { useResponsive } from "../../hooks/useResponsive";

import { theme } from "../../global/styles/theme";

const { fr } = useResponsive();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  title: {
    fontFamily: theme.fonts.fontFamily,
    color: theme.colors.textColor,
    fontSize: fr(5, 40),
    marginTop: 20,
    marginBottom: 10,
    textAlign: "center",
  },

  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },

  errorText: {
    color: theme.colors.textColor,
  },

  errorIconContainer: {
    backgroundColor: "#576371",

    borderRadius: 60,

    marginTop: 10,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
});

export default styles;
