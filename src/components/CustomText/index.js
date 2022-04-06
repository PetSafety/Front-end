import React from "react";
import { Text } from "react-native";
import defaultStyles from "./styles.js";

const CustomText = ({ type, styles, content }) => {
  const renderTextStyles = () => {
    switch (type) {
      case "headline1":
        return defaultStyles.headline1;
      case "headline2":
        return defaultStyles.headline2;
      case "subtitle1":
        return defaultStyles.subtitle1;
      case "subtitle2":
        return defaultStyles.subtitle2;
      case "body":
        return defaultStyles.body;
      case "caption":
      default:
        return defaultStyles.caption;
    }
  };

  const textStyles = { ...renderTextStyles(), ...styles };

  return <Text style={textStyles}> {content} </Text>;
};

export default CustomText;
