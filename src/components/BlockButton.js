import { Image, Text, TouchableOpacity } from "react-native";
import { fonts } from "../configs/fonts";

export default function BlockButton({ title, onPress, bgColor, image }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: bgColor,
        paddingVertical: 15,
        borderRadius: 10,
        marginVertical: 10,
        width: "45%",
      }}
    >
      {image && (
        <Image
          source={image}
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
            alignSelf: "center",
            marginBottom: 10,
            opacity: 0.5,
          }}
        />
      )}
      <Text
        style={{
          textAlign: "center",
          fontSize: 18,
          fontFamily: fonts.nunito.bold,
          color: "#fff",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
