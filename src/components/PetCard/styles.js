import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingVertical: 26,
    paddingHorizontal: 16,
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    borderRadius: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  separator: {
    marginHorizontal: 9,
    width: 2,
    backgroundColor: "#c4c4c4",
    height: "70%",
  },

  content: {
    marginVertical: 19,
  },
  contentText: {
    flexDirection: "row",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopColor: "#ccc",
    borderTopWidth: 1,
    paddingTop: 19,
  },
});
