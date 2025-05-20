import LoaderKit from "react-native-loader-kit";

export default function Spinner() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LoaderKit
        style={{ width: 50, height: 50 }}
        name={"BallClipRotateMultiple"} // Optional: see list of animations below
        color={"red"} // Optional: color can be: 'red', 'green',... or '#ddd', '#ffffff',...
      />
    </View>
  );
}
