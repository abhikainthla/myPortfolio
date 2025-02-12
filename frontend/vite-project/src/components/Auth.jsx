import { Flex, Input, Text, useColorMode, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import Buttons from "./Buttons";

const Auth = () => {
  const { colorMode } = useColorMode();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast(); 

  const handleLogin = async () => {
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please enter both email and password",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      const res = await fetch("http://localhost:8080/api/admin/login", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      console.log("Login Successful:", data);
      localStorage.setItem("token", data.token);

      toast({
        title: "Login Successful",
        description: "You have logged in successfully.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      
    } catch (error) {
      console.error("Login Error:", error);

      toast({
        title: "Login Failed",
        description: error.message || "An error occurred",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex w="100vw" pt={100} alignItems="center" justifyContent="center">
      <Flex
        m={20}
        p={5}
        alignItems="center"
        justifyContent="center"
        direction="column"
        gap={3}
        w="325px"
        bg={colorMode === "light" ? "#ffffff" : "#1A202C"}
        borderRadius={5}
        boxShadow="lg"
      >
        <Text
          fontSize="xl"
          fontWeight="bold"
          color={colorMode === "light" ? "gray.700" : "gray.200"}
          mb={4}
        >
          Welcome to the Admin Page
        </Text>
        <Text fontSize="md" color={colorMode === "light" ? "gray.600" : "gray.300"}>
          Enter your credentials
        </Text>
        <Input
          type="email"
          placeholder="Enter your email"
          _placeholder={{ color: colorMode === "light" ? "gray.500" : "gray.400" }}
          borderColor={colorMode === "light" ? "gray.300" : "gray.600"}
          focusBorderColor={colorMode === "light" ? "blue.500" : "blue.300"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Enter your password"
          _placeholder={{ color: colorMode === "light" ? "gray.500" : "gray.400" }}
          borderColor={colorMode === "light" ? "gray.300" : "gray.600"}
          focusBorderColor={colorMode === "light" ? "blue.500" : "blue.300"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Buttons name={"Login"} onClick={handleLogin} />
      </Flex>
    </Flex>
  );
};

export default Auth;
