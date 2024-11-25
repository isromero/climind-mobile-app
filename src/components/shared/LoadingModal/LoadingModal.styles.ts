import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  overlay: {
    height: 100,
    width: 200,
    backgroundColor: "white",
    borderColor: "rgba(0, 0, 0, 0.5)",
    borderWidth: 2,
    borderRadius: 10,
  },
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#00aa68",
    textTransform: "uppercase",
    marginTop: 10,
  },
});
