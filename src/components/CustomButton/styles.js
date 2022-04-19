import { StyleSheet } from "react-native";

export default StyleSheet.create({
  default: {
    padding: 11,
    backgroundColor: "#2689FA",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 4,
  },
  disabled: { backgroundColor: "#656565" },
  ghost: {
    backgroundColor: "transparent",
    borderColor: "#2689FA",
    borderWidth: 4,
  },
  ghostWarning: {
    backgroundColor: "transparent",
    borderColor: "#E12E2E",
    borderWidth: 4,
  },
  defaultText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  disabledText: { color: "#fff" },
  ghostText: { color: "#51A1FB" },
  ghostWarningText: { color: "#E12E2E" },
});
