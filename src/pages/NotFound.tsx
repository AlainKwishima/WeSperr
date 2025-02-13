import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bg="gray.100"
      textAlign="center"
      p={4}
    >
      <Heading as="h1" size="2xl" mb={4}>
        404 Not Found
      </Heading>
      <Text fontSize="lg" mb={4}>
        Oops, the page you're looking for doesn't exist.
      </Text>
      <Button
        colorScheme="teal"
        onClick={() => navigate("/")}
      >
        Go to Home
      </Button>
    </Box>
  );
};

export default NotFound;
