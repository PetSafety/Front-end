import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

const StaticChip = ({ label }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}> {label} </Text>
    </View>
  );
};

export default StaticChip;
