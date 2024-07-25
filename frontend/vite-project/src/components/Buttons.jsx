import React from "react";
import { Button, useColorMode } from "@chakra-ui/react";
const Buttons = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Button
      onClick={props.onClick}
        className={
          colorMode === "light" ? "home-button-light" : "home-button-dark"
        }
        bg={"blue.800"}
        color={"#ffffff"}
      >
        {props.name}
      </Button>
    </>
  );
};

export default Buttons;
