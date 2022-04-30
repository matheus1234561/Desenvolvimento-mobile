import { Button, Text } from "native-base";
import React from "react";
import { StyleSheet, View } from "react-native";

export const Calc: React.FC = () => {
  const [result, setResult] = React.useState(0);
  const [number1, setNumber1] = React.useState(0);
  const [number2, setNumber2] = React.useState(0);
  const [operator, setOperator] = React.useState("");

  const onSum = () => {
    setNumber1(0);
    setNumber2(0);
    setResult(0);
    setOperator("");
    setResult(number1 + number2);
  };
  const onSub = () => {
    setNumber1(0);
    setNumber2(0);
    setResult(0);
    setOperator("");
    setResult(number1 - number2);
  };
  const onDiv = () => {
    setNumber1(0);
    setNumber2(0);
    setResult(0);
    setOperator("");
    setResult(number1 / number2);
  };
  const onMult = () => {
    setNumber1(0);
    setNumber2(0);
    setResult(0);
    setOperator("");
    setResult(number1 * number2);
  };
  const onResolve = () => {
    if (operator === "+") {
      onSum();
    } else if (operator === "-") {
      onSub();
    } else if (operator === "*") {
      onMult();
    } else {
      onDiv();
    }
  };
  const onClear = () => {
    setNumber1(0);
    setNumber2(0);
    setResult(0);
    setOperator("");
  };
  return (
    <View style={styles.container}>
      <View style={styles.displayResult}>
        <View style={{ marginLeft: "94%" }}>
          <Text style={{ color: "white", display: "flex" }}>
            <Text display={number1 === 0 ? "none" : "flex"}>{number1}</Text>
            <Text display={operator.length === 0 ? "none" : "flex"}>
              {operator}
            </Text>
            <Text display={number2 === 0 ? "none" : "flex"}>{number2}</Text>
          </Text>
          <Text
            display={result === 0 ? "none" : "flex"}
            style={{ color: "white" }}
          >
            {result}
          </Text>
          <Text
            display={result === 0 ? "flex" : "none"}
            style={{ color: "white" }}
          >
            0
          </Text>
        </View>
      </View>
      <View style={styles.digits}>
        <View style={styles.columnDigits}>
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
            <View>
              <Text>AC</Text>
            </View>
          </Button>
          <Button
            style={styles.endDigit}
            onPress={() => {
              setOperator("/");
            }}
          >
            <View>
              <Text>/</Text>
            </View>
          </Button>
        </View>
        <View style={styles.columnDigits}>
          <Button
            style={styles.digit}
            onPress={() => {
              !operator ? setNumber1(7) : setNumber2(7);
            }}
          >
            <View>
              <Text>7</Text>
            </View>
          </Button>
          <Button
            style={styles.digit}
            onPress={() => {
              !operator ? setNumber1(8) : setNumber2(8);
            }}
          >
            <View>
              <Text>8</Text>
            </View>
          </Button>
          <Button
            style={styles.digit}
            onPress={() => {
              !operator ? setNumber1(9) : setNumber2(9);
            }}
          >
            <View>
              <Text>9</Text>
            </View>
          </Button>
          <Button
            style={styles.endDigit}
            onPress={() => {
              setOperator("*");
            }}
          >
            <View>
              <Text>*</Text>
            </View>
          </Button>
        </View>
        <View style={styles.columnDigits}>
          <Button
            style={styles.digit}
            onPress={() => {
              !operator ? setNumber1(4) : setNumber2(4);
            }}
          >
            <View>
              <Text>4</Text>
            </View>
          </Button>
          <Button
            style={styles.digit}
            onPress={() => {
              !operator ? setNumber1(5) : setNumber2(5);
            }}
          >
            <View>
              <Text>5</Text>
            </View>
          </Button>
          <Button
            style={styles.digit}
            onPress={() => {
              !operator ? setNumber1(6) : setNumber2(6);
            }}
          >
            <View>
              <Text>6</Text>
            </View>
          </Button>
          <Button
            style={styles.endDigit}
            onPress={() => {
              setOperator("-");
            }}
          >
            <View>
              <Text>-</Text>
            </View>
          </Button>
        </View>
        <View style={styles.columnDigits}>
          <Button
            style={styles.digit}
            onPress={() => {
              !operator ? setNumber1(1) : setNumber2(1);
            }}
          >
            <View>
              <Text>1</Text>
            </View>
          </Button>
          <Button
            style={styles.digit}
            onPress={() => {
              !operator ? setNumber1(2) : setNumber2(2);
            }}
          >
            <View>
              <Text>2</Text>
            </View>
          </Button>
          <Button
            style={styles.digit}
            onPress={() => {
              !operator ? setNumber1(3) : setNumber2(3);
            }}
          >
            <View>
              <Text>3</Text>
            </View>
          </Button>
          <Button
            style={styles.endDigit}
            onPress={() => {
              setOperator("+");
            }}
          >
            <View>
              <Text>+</Text>
            </View>
          </Button>
        </View>
        <View style={styles.columnDigits}>
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
            <View>
              <Text>0</Text>
            </View>
          </Button>
          <Button style={styles.digit}>
            <View>
              <Text>.</Text>
            </View>
          </Button>
          <Button style={styles.endDigit} onPress={onResolve}>
            <View>
              <Text>=</Text>
            </View>
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
    flex: 1,
  },

  displayResult: {
    backgroundColor: "#3E393D",
    width: "100%",
    height: "30%",
    display: "flex",
    justifyContent: "flex-end",
    borderWidth: 1,
    flex: 1,
  },
  digits: {
    width: "100%",
    height: "70%",
    display: "flex",
    flex: 1,
  },
  digit: {
    width: "25%",
    height: "100%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    display: "flex",
    flex: 1,
  },
  endDigit: {
    width: "25%",
    height: "100%",
    backgroundColor: "#F56218",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    flex: 1,
  },
  columnDigits: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flex: 1,
  },
});
