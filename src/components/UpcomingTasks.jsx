import { Box, Text, Stack } from "@chakra-ui/react";
import { useGlobal } from "../context/GlobalContext";

export function UpcomingTasks() {
  const { tasks } = useGlobal();

  const upcomingTasks = tasks
    .filter(task => task.status !== "DONE")
    .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
    .slice(0, 3);

  if (upcomingTasks.length === 0) {
    return <Text>No upcoming tasks 🎉</Text>;
  }

  return (
    <Box>
      <Text fontSize="lg" fontWeight="bold" mb="3">
        Upcoming Tasks
      </Text>

      <Stack spacing="3">
        {upcomingTasks.map(task => (
          <Box
            key={task.id}
            p="3"
            bg="white"
            borderRadius="md"
            boxShadow="sm"
          >
            <Text fontWeight="semibold">{task.title}</Text>
            <Text fontSize="sm" color="gray.500">
              Due: {task.dueDate}
            </Text>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
