import { StyleSheet } from "react-native";

import {DEVICE} from '../../utils/dimensions.utils'

export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 22,
    left: 12,
    width: DEVICE.width * 0.92,
    padding: 20,
    borderRadius: 8,
    elevation: 4,
    shadowOpacity: 0.4,
    shadowOffset: {
      height: 2
    },
  },
  success: {
    backgroundColor: '#2689FA'
  },
  error: {
    backgroundColor: '#E12E2E'
  },
  text: {
    color: "white",
  },
});
