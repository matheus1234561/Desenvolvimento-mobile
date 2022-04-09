import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NativeBaseProvider, Box } from "native-base";
import { PrintName } from "./src/PrintName";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box style={styles.container}>
        <PrintName />
      </Box>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    display: "flex",
    width: "100%",
  },
});
