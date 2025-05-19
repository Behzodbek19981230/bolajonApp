import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export const stylesHome = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE073",
    alignItems: "center",
    paddingVertical: height * 0.1, // 10% vertical padding
  },

  header: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    width: width * 0.7, // 70% of screen width
    backgroundColor: "#FFA94D",
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.015,
    borderRadius: 20,
    marginBottom: height * 0.03,
  },

  headerIcon: {
    position: "absolute",
    right: 0,
    width: width * 0.25,
    height: width * 0.25,
    zIndex: 1,
  },

  headerText: {
    fontSize: width * 0.08, // ~32 for 400px wide screen
    fontFamily: "Montserrat",
    fontWeight: "900",
    color: "#FFFFFF",
  },
});
