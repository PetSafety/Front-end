import React, { Component } from "react";
import { Text, View } from "react-native";
import CustomButton from "../CustomButton";
import CustomText from "../CustomText";
import StaticChip from "../StaticChip";
import styles from "./styles";

const PetCard = ({ info, cancelHandle, confirmHandle }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <CustomText content={`Transportar ${info.dogName}`} type="subtitle1" />
        <View style={styles.separator} />
        <StaticChip label={info.type} />
      </View>
      <View style={styles.content}>
        <View style={styles.contentText}>
          <CustomText content={`Data:`} type="subtitle2" />
          <CustomText content={info.date.toISOString()} type="body" />
        </View>
        <View style={styles.contentText}>
          <CustomText content={`Destino:`} type="subtitle2" />
          <CustomText content={info.destiny} type="body" />
        </View>
        <View style={styles.contentText}>
          <CustomText content={`Status:`} type="subtitle2" />
          <CustomText content={info.status} type="body" />
        </View>
      </View>

      <View style={styles.footer}>
        <CustomButton
          title="Cancelar"
          type="ghostWarning"
          containerStyles={{ width: "46%" }}
          onPress={cancelHandle}
        />
        <CustomButton
          title="Iniciar"
          type="ghost"
          containerStyles={{ width: "46%" }}
          onPress={confirmHandle}
        />
      </View>
    </View>
  );
};

export default PetCard;
