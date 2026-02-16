import { Flex, Text, Spacer, Button, Image, HStack } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();

  const getTabStyle = (path) => ({
    bg: location.pathname === path ? "teal.500" : "transparent",
    color: location.pathname === path ? "white" : "black",
    fontSize: "16px",
    fontWeight: "semibold",
    px: 6,
    py: 3,
    borderRadius: "md",
    boxShadow: location.pathname === path ? "md" : "sm",
    _hover: {
      bg: location.pathname === path ? "teal.200" : "gray.100",
      boxShadow: "md",
    },
    transition: "all 0.2s",
  });

  return (
    <Flex
      align="center"
      px="6"
      py="4"
      borderBottom="1px solid"
      borderColor="gray.200"
      gap="6"
      bg="pink"
      shadow="sm"
      mb="20px"
      borderRadius="10px"
    >
      <Text fontWeight="bold" fontSize="lg">
        Task Management
      </Text>

      <Button as={Link} to="/dashboard" {...getTabStyle("/dashboard")}>
        Dashboard
      </Button>

      <Button as={Link} to="/tasks" {...getTabStyle("/tasks")}>
        Tasks
      </Button>

      <Spacer />

     
        <Image
          src="https://cdn-icons-png.flaticon.com/128/3177/3177465.png"
          boxSize="30px"
          borderRadius="full"
          alt="User Avatar"
        />
        <Text fontWeight="semibold">Akshaya</Text>
      
    </Flex>
  );
}

export default NavBar;
