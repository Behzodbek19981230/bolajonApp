import { useEffect, useRef } from "react";
import { Animated, Dimensions, StyleSheet, View } from "react-native";
import { fonts } from "../../configs/fonts";

const { width, height } = Dimensions.get("window");

export default function SplashScreen({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current; // animatsiya uchun opacity

  useEffect(() => {
    // Matn animatsiyasi (fade-in)
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();

    // 3 sekunddan keyin Home ga o‘tish
    const timer = setTimeout(() => {
      navigation.navigate("Home");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.background}>
      <Animated.Text style={[styles.text, { opacity: fadeAnim }]}>
        Bolajon TV
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: width,
    height: height,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffe073",
  },
  text: {
    fontSize: 72,
    fontFamily: fonts.nunito.extraBold,
    color: "#ff9f42",
  },
});
