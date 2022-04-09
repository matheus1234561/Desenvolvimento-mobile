import React from "react";
import { Box, Button, Input, Text } from "native-base";
import { StyleSheet } from "react-native";

export const PrintName: React.FC = () => {
  const [name, setName] = React.useState("");

  return (
    <Box style={styles.container}>
      <Box style={styles.title}>
        <Text>
          <strong>What is your name?</strong>
        </Text>
      </Box>
      <Box style={styles.input}>
        <Input type="text" onChangeText={(newName) => setName(newName)}></Input>
      </Box>
      <Box style={styles.boxSubTitle}>
        <Text style={styles.subTitle}>
          <strong>Say Hellow</strong>
        </Text>
      </Box>
      <Box style={styles.boxName}>
        <Text>{name}</Text>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  boxName: { display: "flex", justifyContent: "center" },
  input: {
    width: "100%",
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  title: { display: "flex", justifyContent: "flex-start", paddingLeft: "5%" },
  boxSubTitle: { display: "flex" },
  subTitle: {
    color: "blue",
    fontSize: 16,
    justifyContent: "center",
    display: "flex",
  },
});
