import React from "react";
import { Box, Text } from "native-base";
import { StyleSheet } from "react-native";

interface SquareProps {
  color?: string;
  text?: string;
}

export const Square: React.FC<SquareProps> = ({ color, text }) => {
  const styles = StyleSheet.create({
    square: {
      width: "5rem",
      height: "5rem",
      backgroundColor: color,
      display: "flex",
    },
    text: {
      display: "flex",
      justifyContent: "center",
      marginTop: "30%",
    },
  });
  return (
    <Box style={styles.square}>
      <Text style={styles.text}>Square {text}</Text>
    </Box>
  );
};
