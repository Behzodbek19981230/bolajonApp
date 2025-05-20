import { ImageBackground, StyleSheet, View } from "react-native";

export default function Layout({ children }) {
  return (
    <ImageBackground
      source={require("../../assets/images/bg_image.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      {/* Sariq sloy (rgba rangda) */}
      <View style={styles.overlay} />

      {/* Kontent */}
      <View style={styles.container}>{children}</View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    position: "relative",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(235, 194, 84, 0.85)", // ffe073 bilan yarim shaffof
  },
  container: {
    flex: 1,
  },
});
