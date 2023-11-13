import { StyleSheet } from "react-native";

export const global = StyleSheet.create({
  wrapper: {
    marginHorizontal: 20,
  },
  pokeBola: {
    width: 300,
    height: 300,
    position: "absolute",
    top: -100,
    right: -100,
    opacity: 0.2,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
  },
});
