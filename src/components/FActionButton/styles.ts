import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  btn: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    height: 40,
    width: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#576371",
    borderRadius: 28,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});

export default styles;
