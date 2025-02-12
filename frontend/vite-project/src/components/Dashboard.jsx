import { Button, Flex, Input, Text, useColorMode, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import Buttons from "./Buttons";

const Dashboard = () => {
  const { colorMode } = useColorMode();
  const toast = useToast();

  // State for Login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [access, setAccess] = useState(false);

  // State for Dashboard Inputs
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [language, setLanguage] = useState("");
  const [image, setImage] = useState(null);
  const [link, setLink] = useState("");

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

      localStorage.setItem("token", data.token);
      setAccess(true);

      toast({
        title: "Login Successful",
        description: "You have logged in successfully.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Login Failed",
        description: error.message || "An error occurred",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleUpload = async () => {
    if (!name || !description || !image || !language ||!link) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
  
    console.log("File selected:", image); // Check if file exists
  
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("language", language);
    formData.append("image", image);
    formData.append("link", link);// File must be appended here
  
    try {
      const token = localStorage.getItem("token");
  
      const res = await fetch("http://localhost:8080/api/projects/createproject", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`, // Don't set Content-Type manually
        },
        body: formData, // FormData ensures file is sent correctly
      });
  
      const data = await res.json();
  
      if (!res.ok) {
        throw new Error(data.message || "Upload failed");
      }
  
      toast({
        title: "Upload Successful",
        description: "Your project has been uploaded successfully.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
  
      // Reset form fields
      setName("");
      setDescription("");
      setLanguage("");
      setImage(null);
      setLink("");
      document.getElementById("fileInput").value = ""; // Reset file input
  
    } catch (error) {
      console.error("Upload Error:", error);
  
      toast({
        title: "Upload Failed",
        description: error.message || "An error occurred",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  
  
  

  return (
    <Flex w="100vw" pt={100} alignItems="center" justifyContent="center" direction="column">
      {/* Login UI */}
      {!access && (
        <Flex
          m={10}
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
          <Text fontSize="xl" fontWeight="bold" color={colorMode === "light" ? "gray.700" : "gray.200"}>
            Welcome to the Admin Page
          </Text>
          <Text fontSize="md" color={colorMode === "light" ? "gray.600" : "gray.300"}>
            Enter your credentials
          </Text>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            borderColor={colorMode === "light" ? "gray.300" : "gray.600"}
            focusBorderColor="blue.500"
          />
          <Input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            borderColor={colorMode === "light" ? "gray.300" : "gray.600"}
            focusBorderColor="blue.500"
          />
          <Buttons name="Login" onClick={handleLogin} />
        </Flex>
      )}

      {/* Dashboard UI */}
      {access && (
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          gap={3}
          bg={colorMode === "light" ? "#ffffff" : "#1A202C"}
          borderRadius={5}
          p={5}
          m={10}
          boxShadow="lg"
        >
          <Text fontSize="xl" fontWeight="bold" color={colorMode === "light" ? "gray.700" : "gray.200"}>
            Dashboard
          </Text>
          <Input
            type="text"
            placeholder="Enter Title"
            value={name}
            onChange={(e) => setName(e.target.value)}
            borderColor={colorMode === "light" ? "gray.300" : "gray.600"}
            focusBorderColor="blue.500"
          />
          <Input
            type="text"
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            borderColor={colorMode === "light" ? "gray.300" : "gray.600"}
            focusBorderColor="blue.500"
          />
          <Input
  id="fileInput"
  type="file"
  accept=".jpg,.png,.pdf,.zip,.mp4" // Ensure only valid file types are selected
  onChange={(e) => {
    console.log("Selected file:", e.target.files[0]); // Debugging log
    setImage(e.target.files[0]); // Ensure file is stored
  }}
  borderColor={colorMode === "light" ? "gray.300" : "gray.600"}
  focusBorderColor="blue.500"
/>


          <Input
            type="text"
            placeholder="Enter Language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            borderColor={colorMode === "light" ? "gray.300" : "gray.600"}
            focusBorderColor="blue.500"
          />

<Input
            type="text"
            placeholder="Enter Link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            borderColor={colorMode === "light" ? "gray.300" : "gray.600"}
            focusBorderColor="blue.500"
          />
          <Buttons name="Upload" onClick={handleUpload} />
        </Flex>
      )}
    </Flex>
  );
};

export default Dashboard;
