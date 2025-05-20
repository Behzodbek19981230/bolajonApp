import { View } from "react-native";
import CartoonList from "../../components/CartoonList";
import Layout from "../../components/Layout";
import Title from "../../components/Title";

export default function CartoonScreen() {
  const handleSelect = (cartoon) => {
    console.log("Selected:", cartoon.title);
    // navigate to player or detail page
  };

  return (
    <Layout>
      <View
        style={{
          paddingVertical: 80,
          width: "100%",
          height: "100%",
          flex: 1,
          alignItems: "center",
        }}
      >
        <Title title={"Multfilmlar"} />

        <CartoonList onSelect={handleSelect} />
      </View>
    </Layout>
  );
}
