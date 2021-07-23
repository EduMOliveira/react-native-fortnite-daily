import { StyleSheet, Platform } from "react-native";
import { useResponsive } from "../../hooks/useResponsive";

import { theme } from "../../global/styles/theme";

const { wr } = useResponsive();

const styles = StyleSheet.create({
  container: {
    width: wr(47),
    height: wr(53),
    display: "flex",
    alignItems: "center",
  },

  imageContainer: {
    width: wr(34),
    height: wr(34),
    justifyContent: "center",
    alignItems: "center",
    marginTop: -35,
  },

  image: {
    width: "85%",
    height: "90%",
  },

  itemBg: {
    position: "absolute",
  },

  skinName: {
    fontFamily: theme.fonts.fontFamily,
    color: theme.colors.textColor,
    fontSize: wr(5),
    marginTop: 6,
    marginBottom: 7,
  },

  priceContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  price: {
    fontFamily: theme.fonts.fontFamily,
    color: theme.colors.textColor,
    marginRight: 3,
    fontSize: wr(5),
    textAlign: "center",
    marginBottom: Platform.OS === "ios" ? -4 : 0, //fix error alignSelf: center text in ios
  },

  vbucksImg: {
    width: wr(6),
    height: wr(6),
  },
});

export default styles;
