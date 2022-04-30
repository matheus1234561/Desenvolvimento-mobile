import { Button, Text } from "native-base";
import React from "react";
import { StyleSheet, View } from "react-native";

export const Calc: React.FC = () => {
  const [result, setResult] = React.useState("");
  const [number1, setNumber1] = React.useState("");
  const [number2, setNumber2] = React.useState("");
  const [operator, setOperator] = React.useState("");

  const onSum = () => {
    setNumber1("");
    setNumber2("");
    setResult("");
    setOperator("");
    const resultSum = parseFloat(number1) + parseFloat(number2);
    setResult(resultSum.toString());
  };
  const onSub = () => {
    setNumber1("");
    setNumber2("");
    setResult("");
    setOperator("");
    const resultSub = parseFloat(number1) - parseFloat(number2);
    setResult(resultSub.toString());
  };
  const onDiv = () => {
    setNumber1("");
    setNumber2("");
    setResult("");
    setOperator("");
    const resultDiv = parseFloat(number1) / parseFloat(number2);
    setResult(resultDiv.toString());
  };
  const onMult = () => {
    setNumber1("");
    setNumber2("");
    setResult("");
    setOperator("");
    const resultMult = parseFloat(number1) * parseFloat(number2);
    setResult(resultMult.toString());
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
    setNumber1("");
    setNumber2("");
    setResult("");
    setOperator("");
  };
  return (
    <View style={styles.container}>
      <View style={styles.displayResult}>
        <View style={{ display: "flex", alignItems: "flex-end" }}>
          <Text style={{ color: "white", display: "flex" }}>
            <Text display={number1 === "0" ? "none" : "flex"}>{number1}</Text>
            <Text display={operator.length === 0 ? "none" : "flex"}>
              {operator}
            </Text>
            <Text display={number2 === "0" ? "none" : "flex"}>{number2}</Text>
          </Text>
          <Text
            display={result === "0" ? "none" : "flex"}
            style={{ color: "white" }}
          >
            {result}
          </Text>
          <Text
            display={result === "0" ? "flex" : "none"}
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
              <Text style={styles.digitStyle}>AC</Text>
            </View>
          </Button>
          <Button
            style={styles.endDigit}
            onPress={() => {
              setOperator("/");
            }}
          >
            <View>
              <Text style={styles.operatorStyle}>/</Text>
            </View>
          </Button>
        </View>
        <View style={styles.columnDigits}>
          <Button
            style={styles.digit}
            onPress={() => {
              !operator
                ? setNumber1((oldState) => `${oldState}7`)
                : setNumber2((oldState) => `${oldState}7`);
            }}
          >
            <View>
              <Text style={styles.digitStyle}>7</Text>
            </View>
          </Button>
          <Button
            style={styles.digit}
            onPress={() => {
              !operator
                ? setNumber1((oldState) => `${oldState}8`)
                : setNumber2((oldState) => `${oldState}8`);
            }}
          >
            <View>
              <Text style={styles.digitStyle}>8</Text>
            </View>
          </Button>
          <Button
            style={styles.digit}
            onPress={() => {
              !operator
                ? setNumber1((oldState) => `${oldState}9`)
                : setNumber2((oldState) => `${oldState}9`);
            }}
          >
            <View>
              <Text style={styles.digitStyle}>9</Text>
            </View>
          </Button>
          <Button
            style={styles.endDigit}
            onPress={() => {
              setOperator("*");
            }}
          >
            <View>
              <Text style={styles.operatorStyle}>*</Text>
            </View>
          </Button>
        </View>
        <View style={styles.columnDigits}>
          <Button
            style={styles.digit}
            onPress={() => {
              !operator
                ? setNumber1((oldState) => `${oldState}4`)
                : setNumber2((oldState) => `${oldState}4`);
            }}
          >
            <View>
              <Text style={styles.digitStyle}>4</Text>
            </View>
          </Button>
          <Button
            style={styles.digit}
            onPress={() => {
              !operator
                ? setNumber1((oldState) => `${oldState}5`)
                : setNumber2((oldState) => `${oldState}5`);
            }}
          >
            <View>
              <Text style={styles.digitStyle}>5</Text>
            </View>
          </Button>
          <Button
            style={styles.digit}
            onPress={() => {
              !operator
                ? setNumber1((oldState) => `${oldState}6`)
                : setNumber2((oldState) => `${oldState}6`);
            }}
          >
            <View>
              <Text style={styles.digitStyle}>6</Text>
            </View>
          </Button>
          <Button
            style={styles.endDigit}
            onPress={() => {
              setOperator("-");
            }}
          >
            <View>
              <Text style={styles.operatorStyle}>-</Text>
            </View>
          </Button>
        </View>
        <View style={styles.columnDigits}>
          <Button
            style={styles.digit}
            onPress={() => {
              !operator
                ? setNumber1((oldState) => `${oldState}1`)
                : setNumber2((oldState) => `${oldState}1`);
            }}
          >
            <View>
              <Text style={styles.digitStyle}>1</Text>
            </View>
          </Button>
          <Button
            style={styles.digit}
            onPress={() => {
              !operator
                ? setNumber1((oldState) => `${oldState}2`)
                : setNumber2((oldState) => `${oldState}2`);
            }}
          >
            <View>
              <Text style={styles.digitStyle}>2</Text>
            </View>
          </Button>
          <Button
            style={styles.digit}
            onPress={() => {
              !operator
                ? setNumber1((oldState) => `${oldState}3`)
                : setNumber2((oldState) => `${oldState}3`);
            }}
          >
            <View>
              <Text style={styles.digitStyle}>3</Text>
            </View>
          </Button>
          <Button
            style={styles.endDigit}
            onPress={() => {
              setOperator("+");
            }}
          >
            <View>
              <Text style={styles.operatorStyle}>+</Text>
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
              <Text style={styles.digitStyle}>0</Text>
            </View>
          </Button>
          <Button style={styles.digit}>
            <View>
              <Text style={styles.digitStyle}>.</Text>
            </View>
          </Button>
          <Button style={styles.endDigit} onPress={onResolve}>
            <View>
              <Text style={styles.operatorStyle}>=</Text>
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
  digitStyle: { fontSize: 16, fontWeight: "700" },
  operatorStyle: { fontSize: 16, fontWeight: "700", color: "white" },
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
