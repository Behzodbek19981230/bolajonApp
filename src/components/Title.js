import { Dimensions, StyleSheet, Text, View } from "react-native";
import { fonts } from "../configs/fonts";

const { width } = Dimensions.get("window");

export default function Title({ title }) {
  return (
    <View style={styles.background}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    width: width * 0.8,
    paddingBlock: 20,
    paddingHorizontal: 20,
    backgroundColor: "#ff9f42",
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 38,
    fontFamily: fonts.nunito.extraBold,
    color: "#fff",
  },
});
