import { StyleSheet } from "react-native";
import { useResponsive } from "../../hooks/useResponsive";
import { theme } from "../../global/styles/theme";

const { wr, hr } = useResponsive();

const styles = StyleSheet.create({
  modalContainer: {
    width: "90%",
    borderRadius: 16,
    alignSelf: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },

  modalCloseIcon: {
    alignSelf: "flex-end",
    paddingRight: 12,
  },

  imageContainer: {
    width: wr(45),
    height: wr(45),
    alignSelf: "center",
  },

  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  title: {
    color: "#fff",
    fontFamily: theme.fonts.fontFamily,
    alignSelf: "center",
    fontSize: 40,
    marginTop: 16,
    textAlign: "center",
    paddingHorizontal: 8,
  },

  description: {
    color: "#fff",
    alignSelf: "center",
    marginTop: 4,
    marginBottom: 16,
    textAlign: "center",
  },

  priceContainer: {
    alignSelf: "center",
    flexDirection: "row",
  },

  priceText: {
    fontFamily: theme.fonts.fontFamily,
    color: "#fff",
    fontSize: 40,
    marginLeft: 5,
  },

  vbucksImg: {
    width: wr(9),
    height: wr(9),
  },

  modalSeparator: {
    alignSelf: "center",
    width: "75%",
    minHeight: 0.8,
    backgroundColor: "#fff",
    marginVertical: 16,
  },

  ratingContainer: {
    alignItems: "center",
  },

  ratingTitle: {
    fontFamily: theme.fonts.fontFamily,
    color: "#fff",
    fontSize: 24,
  },

  ratingNum: {
    fontFamily: theme.fonts.fontFamily,
    color: "#fff",
    fontSize: 18,
    marginTop: 5,
  },
});

export default styles;
