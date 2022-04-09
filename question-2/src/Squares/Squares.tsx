import React from "react";
import { Box } from "native-base";
import { Square } from "../Components/Square";
import { StyleSheet } from "react-native";

export const Squares: React.FC = () => {
  return (
    <Box style={styles.container}>
      <Box>
        <Square text="1" color="#33D6FF" />
      </Box>
      <Box>
        <Square text="2" color="#21DA90" />
      </Box>
      <Box>
        <Square text="3" color="#D15ABD" />
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingLeft: "5%",
    paddingRight: "5%",
  },
});
