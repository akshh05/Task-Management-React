import { Box } from "@chakra-ui/react";

function StatusPill({ task, updateStatus }) {
  return (
    <Box
      px="3"
      py="1"
      borderRadius="full"
      fontSize="xs"
      cursor="pointer"
      bg={
        task.status === "TODO"
          ? "gray.300"
          : task.status === "IN_PROGRESS"
          ? "yellow.400"
          : "green.400"
      }
      onClick={() => updateStatus(task.id)}
    >
      {task.status}
    </Box>
  );
}

export default StatusPill;
