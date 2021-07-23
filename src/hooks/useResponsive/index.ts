import { Dimensions, PixelRatio } from "react-native";

let sHeight = Dimensions.get("window").height;
let sWidth = Dimensions.get("window").width;

function widthResponsive(width: number) {
  return PixelRatio.roundToNearestPixel((sWidth * width) / 100);
}

function heightResponsive(height: number) {
  return PixelRatio.roundToNearestPixel((sHeight * height) / 100);
}

function fontResponsive(height: number, maxHeight = 999) {
  const calculatedHeight = PixelRatio.roundToNearestPixel((sHeight * height) / 100);
  const finalHeight = calculatedHeight > maxHeight ? maxHeight : calculatedHeight;
  return finalHeight;
}

export function useResponsive() {
  const wr = widthResponsive;
  const hr = heightResponsive;
  const fr = fontResponsive;
  return { wr, hr, fr };
}
