import React from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import { fonts } from "../configs/fonts";
import { cartoons } from "../data/multfilm";
const { width } = Dimensions.get("window");

export default function CartoonList({ onSelect }) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 10,
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {cartoons.map((cartoon) => (
        <TouchableOpacity
          key={cartoon.id}
          onPress={() => onSelect(cartoon)}
          style={{
            width: width / 2 - 20,
            marginBottom: 10,
            borderRadius: 10,
            overflow: "hidden",
            backgroundColor: "#fff",
          }}
        >
          <Image
            source={cartoon.image}
            resizeMode="cover"
            resizeMethod="auto"
            style={{
              width: "100%",
              height: 200,
              borderRadius: 10,
            }}
          />
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              marginTop: 5,
              fontFamily: fonts.nunito.bold,
              color: "#ff9f42",
            }}
          >
            {cartoon.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
