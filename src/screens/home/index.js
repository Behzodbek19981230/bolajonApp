import { View } from "react-native";
import BlockButton from "../../components/BlockButton";
import LogoText from "../../components/LogoText";

import { useNavigation } from "@react-navigation/native";
import Layout from "../../components/Layout";
import { images } from "../../configs/images";
export default function HomeScreen() {
  const navigatore = useNavigation();
  return (
    <Layout>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",

          paddingVertical: 80,
        }}
      >
        <LogoText />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <BlockButton
            title={"Audiolar"}
            bgColor={"#ffbb75"}
            image={images.audio}
            onPress={() => {
              console.log("Audio button pressed");
            }}
          />
          <BlockButton
            title={"Multfilmlar"}
            bgColor={"#90d5ac"}
            image={images.videoCam}
            onPress={() => {
              navigatore.navigate("CartoonScreen");
            }}
          />
          <BlockButton
            title={"Audio ertaklar"}
            bgColor={"#ff9066"}
            image={images.reading}
            onPress={() => {
              console.log("Audio button pressed");
            }}
          />
          <BlockButton
            title={"Ertaklar"}
            bgColor={"#82d3c7"}
            image={images.technology}
            onPress={() => {
              console.log("Audio button pressed");
            }}
          />
        </View>
        <BlockButton title={"Yoqtirganlarim"} bgColor={"#ff9f42"} />
      </View>
    </Layout>
  );
}
