import { StyleSheet } from "react-native";
import { NativeBaseProvider, Box } from "native-base";
import { Calc } from "./src/Components/Calc";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box style={styles.container}>
        <Calc />
      </Box>
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
