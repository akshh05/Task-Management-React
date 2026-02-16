import { Flex, Box, Image, Text } from "@chakra-ui/react";
import { useGlobal } from "../context/GlobalContext";

export const FlexBox = () => {
  const { tasks } = useGlobal();

  const total = tasks.length;
  const todo = tasks.filter((t) => t.status === "TODO").length;
  const inProgress = tasks.filter((t) => t.status === "IN_PROGRESS").length;
  const completed = tasks.filter((t) => t.status === "DONE").length;

  const summary = [
    { label: "Total", value: total, icon: "https://cdn-icons-png.flaticon.com/128/151/151917.png", color: "gray.200" },
    { label: "To Do", value: todo, icon: "https://cdn-icons-png.flaticon.com/128/2088/2088617.png", color: "blue.100" },
    { label: "In Progress", value: inProgress, icon: "https://cdn-icons-png.flaticon.com/128/7154/7154465.png", color: "yellow.100" },
    { label: "Completed", value: completed, icon: "https://cdn-icons-png.flaticon.com/128/3368/3368863.png", color: "green.100" },
  ];

  return (
    <Flex gap="6" justify="center" flexWrap="wrap">
      {summary.map((item) => (
        <Box
          key={item.label}
          w="160px"
          h="100px"
          bg={item.color}
          borderRadius="12px"
          boxShadow="md"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          _hover={{ boxShadow: "xl", transform: "scale(1.05)", transition: "0.2s" }}
          p="4"
        >
          <Image src={item.icon} alt={item.label} boxSize="30px" mb="2" />
          <Text fontSize="sm" fontWeight="semibold">{item.label}</Text>
          <Text fontSize="2xl" fontWeight="bold">{item.value}</Text>
        </Box>
      ))}
    </Flex>
  );
};
