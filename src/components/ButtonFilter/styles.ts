import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";
import { useResponsive } from "../../hooks/useResponsive";

const { fr } = useResponsive();

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },

  text: {
    fontFamily: theme.fonts.fontFamily,
    fontSize: fr(11, 30),
  },
});

export default styles;
