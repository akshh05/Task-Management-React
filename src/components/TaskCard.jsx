import { Box, Text, HStack } from "@chakra-ui/react";
import MenuBox from "./MenuBox";
import StatusPill from "./StatusPill";
import { useGlobal } from "../context/GlobalContext";

function TaskCard({ task }) {
  const { updateStatus } = useGlobal();

  return (
    <Box
      p="4"
      borderWidth="1px"
      borderRadius="lg"
      bg="white"
      boxShadow="sm"
    >
      <HStack justify="space-between">
        <Text fontWeight="bold">{task.title}</Text>
        <MenuBox id={task.id} />
      </HStack>

      <Text fontSize="sm" mt="1" color="gray.600">
        {task.description}
      </Text>

      <HStack mt="3" justify="space-between">
        <StatusPill task={task} updateStatus={updateStatus} />
        <Text fontSize="xs" color="gray.500">
          Due: {task.dueDate}
        </Text>
      </HStack>
    </Box>
  );
}

export default TaskCard;
