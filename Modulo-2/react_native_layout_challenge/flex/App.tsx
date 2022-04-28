import { StyleSheet } from "react-native";
import { NativeBaseProvider, View } from "native-base";
import { Calc } from "./src/Components/Calc";
import React from "react";

export default function App() {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Calc />
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
