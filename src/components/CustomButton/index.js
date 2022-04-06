import React from "react";
import { Text, TouchableOpacity } from "react-native";
import defaultStyles from "./styles";

const CustomButton = ({
  type,
  title,
  containerStyles,
  textStyles,
  disabled,
  onPress,
}) => {
  const renderContainerButtonStyles = () => {
    let buttonContainerStyles = { ...defaultStyles.default };
    switch (type) {
      case "ghostWarning":
        buttonContainerStyles = {
          ...buttonContainerStyles,
          ...defaultStyles.ghostWarning,
        };
        break;
      case "ghost":
        buttonContainerStyles = {
          ...buttonContainerStyles,
          ...defaultStyles.ghost,
        };
        break;
      default:
        buttonContainerStyles = { ...defaultStyles.default };
        break;
    }

    if (disabled) {
      buttonContainerStyles = {
        ...buttonContainerStyles,
        ...defaultStyles.disabled,
      };
    }

    return buttonContainerStyles;
  };

  const renderTextButtonStyles = () => {
    let buttonTextStyles = { ...defaultStyles.defaultText };
    switch (type) {
      case "ghostWarning":
        buttonTextStyles = {
          ...buttonTextStyles,
          ...defaultStyles.ghostWarningText,
        };
        break;
      case "ghost":
        buttonTextStyles = { ...buttonTextStyles, ...defaultStyles.ghostText };
        break;
      default:
        buttonTextStyles = { ...defaultStyles.defaultText };
        break;
    }

    if (disabled) {
      buttonTextStyles = { ...buttonTextStyles, ...defaultStyles.disabledText };
    }

    return buttonTextStyles;
  };

  const buttonContainerStyles = {
    ...renderContainerButtonStyles(),
    ...containerStyles,
  };
  const buttonTextStyles = { ...renderTextButtonStyles(), ...textStyles };

  return (
    <TouchableOpacity
      style={buttonContainerStyles}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={buttonTextStyles}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
