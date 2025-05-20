import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { fonts } from "../configs/fonts";

const { width, height } = Dimensions.get("window");

export default function LogoText() {
  return (
    <View style={styles.background}>
      <Text style={styles.text}>Bolajon TV</Text>
      <Image
        source={require("../../assets/images/ocean.png")}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    width: width * 0.8,
    position: "relative",
    paddingBlock: 20,
    paddingHorizontal: 20,
    backgroundColor: "#ff9f42",
    borderRadius: 20,
  },
  text: {
    fontSize: 38,
    fontFamily: fonts.nunito.extraBold,
    color: "#fff",
  },
  image: {
    width: width * 0.35,
    height: height * 0.35,
    resizeMode: "contain",
    position: "absolute",
    top: -height * 0.15,
    right: -width * 0.08,
  },
});
