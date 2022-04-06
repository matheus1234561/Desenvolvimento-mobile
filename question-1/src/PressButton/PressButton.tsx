import React from "react";
import { Container, Button, Text, Box } from "native-base";

export const PressButton: React.FC = () => {
  const [pressed, setPressed] = React.useState(0);
  const onPressed = () => {
    setPressed(pressed + 1);
  };
  return (
    <Container>
      <Box>
        <Text>You've pressed the button: {pressed} times(s)</Text>
        <Button onPress={onPressed}>
          <Text>Press me!</Text>
        </Button>
      </Box>
    </Container>
  );
};
