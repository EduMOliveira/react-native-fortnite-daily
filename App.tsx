import React from "react";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  LuckiestGuy_400Regular,
} from "@expo-google-fonts/luckiest-guy";

import { Home } from "./src/pages/Home";

export default function App() {
  let [fontsLoaded] = useFonts({
    LuckiestGuy_400Regular,
    Burbank: require("./src/assets/fonts/Burbank.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <Home />
        <StatusBar style="light" translucent backgroundColor="transparent" />
      </>
    );
  }
}
