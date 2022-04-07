import React from 'react';
import { View, Text } from 'react-native';
import CustomText from '../CustomText';

import styles from './styles'

const Snackbar = ({ type, text }) => {
  return (
    <View style={[styles.container, styles[type]]}>
      <CustomText type="subtitle2" content={text} styles={styles.text} />
    </View>
  )
}

export default Snackbar;