import { Box, Button, Text } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";

export const Calc: React.FC = () => {
  const [result, setResult] = React.useState(0);
  const [number1, setNumber1] = React.useState(0);
  const [number2, setNumber2] = React.useState(0);

  console.log("number1" + " " + number1);
  console.log("number2" + " " + number2);
  console.log("result" + " " + result);

  const onSum = () => {
    setResult(number1 + number2);
  };
  const onClear = () => {
    setNumber1(0);
    setNumber2(0);
    setResult(0);
  };
  return (
    <Box style={styles.container}>
      <Box style={styles.displayResult}>
        <Text style={{ color: "white", marginLeft: "95%" }}>{result}</Text>
      </Box>
      <Box style={styles.digits}>
        <Box style={styles.columnDigits}>
          <Button
            style={{
              width: "75%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              borderWidth: 1,
            }}
            onPress={onClear}
          >
            <Text>
              <strong>AC</strong>
            </Text>
          </Button>
          <Button style={styles.endDigit}>/</Button>
        </Box>
        <Box style={styles.columnDigits}>
          <Button
            style={styles.digit}
            onPress={() => {
              !number1 ? setNumber1(7) : setNumber2(7);
            }}
          >
            <Text>
              <strong>7</strong>
            </Text>
          </Button>
          <Button
            style={styles.digit}
            onPress={() => {
              !number1 ? setNumber1(8) : setNumber2(8);
            }}
          >
            <Text>
              <strong>8</strong>
            </Text>
          </Button>
          <Button
            style={styles.digit}
            onPress={() => {
              !number1 ? setNumber1(9) : setNumber2(9);
            }}
          >
            <Text>
              <strong>9</strong>
            </Text>
          </Button>
          <Button style={styles.endDigit}>*</Button>
        </Box>
        <Box style={styles.columnDigits}>
          <Button
            style={styles.digit}
            onPress={() => {
              !number1 ? setNumber1(4) : setNumber2(4);
            }}
          >
            <Text>
              <strong>4</strong>
            </Text>
          </Button>
          <Button
            style={styles.digit}
            onPress={() => {
              !number1 ? setNumber1(5) : setNumber2(5);
            }}
          >
            <Text>
              <strong>5</strong>
            </Text>
          </Button>
          <Button
            style={styles.digit}
            onPress={() => {
              !number1 ? setNumber1(6) : setNumber2(6);
            }}
          >
            <Text>
              <strong>6</strong>
            </Text>
          </Button>
          <Button style={styles.endDigit}>-</Button>
        </Box>
        <Box style={styles.columnDigits}>
          <Button
            style={styles.digit}
            onPress={() => {
              !number1 ? setNumber1(1) : setNumber2(1);
            }}
          >
            <Text>
              <strong>1</strong>
            </Text>
          </Button>
          <Button
            style={styles.digit}
            onPress={() => {
              !number1 ? setNumber1(2) : setNumber2(2);
            }}
          >
            <Text>
              <strong>2</strong>
            </Text>
          </Button>
          <Button
            style={styles.digit}
            onPress={() => {
              !number1 ? setNumber1(3) : setNumber2(3);
            }}
          >
            <Text>
              <strong>3</strong>
            </Text>
          </Button>
          <Button style={styles.endDigit} onPress={onSum}>
            +
          </Button>
        </Box>
        <Box style={styles.columnDigits}>
          <Button
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              borderWidth: 1,
            }}
          >
            <Text>
              <strong>0</strong>
            </Text>
          </Button>
          <Button style={styles.digit}>
            <Text>
              <strong>.</strong>
            </Text>
          </Button>
          <Button style={styles.endDigit}>=</Button>
        </Box>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
  },

  displayResult: {
    backgroundColor: "#3E393D",
    width: "100%",
    height: "30%",
    display: "flex",
    justifyContent: "flex-end",
    borderWidth: 1,
  },
  digits: {
    width: "100%",
    height: "70%",
  },
  digit: {
    width: "25%",
    height: "100%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  endDigit: {
    width: "25%",
    height: "100%",
    backgroundColor: "#F56218",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  columnDigits: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
});
