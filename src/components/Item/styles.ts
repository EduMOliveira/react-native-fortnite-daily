import { StyleSheet, Platform } from "react-native";
import { useResponsive } from "../../hooks/useResponsive";

import { theme } from "../../global/styles/theme";

const { wr } = useResponsive();

const styles = StyleSheet.create({
  container: {
    width: wr(47),
    height: wr(47),
    display: "flex",
    alignItems: "center",
    marginBottom: 60,
  },

  imageContainer: {
    width: wr(34),
    height: wr(33),
    justifyContent: "center",
    alignItems: "center",
    marginTop: -35,
  },

  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  itemBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  textsContainer: {
    marginTop: wr(0.7),
  },

  skinName: {
    fontFamily: theme.fonts.fontFamily,
    color: theme.colors.textColor,
    fontSize: wr(5),
    marginTop: 6,
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
