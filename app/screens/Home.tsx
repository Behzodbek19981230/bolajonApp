import { stylesHome as styles } from "@/assets/styles/Home";
import React from "react";
import { Image, Text, View } from "react-native";
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/bird.png")}
          style={styles.headerIcon}
        />
        <Text style={styles.headerText}>Bolajon TV</Text>
      </View>
    </View>
  );
}
