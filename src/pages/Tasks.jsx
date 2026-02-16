import {
  Box,
  Flex,
  Button,
  VStack,
  Text,
  Input,
  Textarea,
  ButtonGroup,
} from "@chakra-ui/react";
import { useState } from "react";
import { useGlobal } from "../context/GlobalContext";
import TaskCard from "../components/TaskCard";
import DialogBox from "../components/DialogBox";

function Tasks() {
  const { tasks, addTask } = useGlobal();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [filter, setFilter] = useState("All");

  const handleSave = (closeDialog) => {
    if (!title || !dueDate) return;

    addTask({
      id: Date.now().toString(),
      title,
      description,
      dueDate,
      status: "TODO",
    });

    setTitle("");
    setDescription("");
    setDueDate("");

    closeDialog(false);
  };

  const filteredTasks =
    filter === "All"
      ? tasks
      : tasks.filter((task) => task.status === filter);

  return (
    <Box p="6">
      <Flex justify="space-between" mb="4">
        <Text fontSize="2xl" fontWeight="bold">
          Tasks
        </Text>

        <DialogBox
          buttonText="+ New Task"
          title="Create New Task"
          buttonProps={{ bg: "teal.500", color: "white", padding: "20px" }}
        >
          {(setOpen) => (
            <VStack spacing="4">
              <Input
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <Textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />

              <Input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />

              <Button
                bg="teal.500"
                color="white"
                _hover={{ bg: "teal.600" }}
                width="100%"
                onClick={() => handleSave(setOpen)}
              >
                Save Task
              </Button>
            </VStack>
          )}
        </DialogBox>
      </Flex>

      <ButtonGroup mb="4" isAttached>
        {[
          { label: "All", value: "All" },
          { label: "TODO", value: "TODO" },
          { label: "IN PROGRESS", value: "IN_PROGRESS" },
          { label: "DONE", value: "DONE" },
        ].map(({ label, value }) => (
          <Button
            key={value}
            onClick={() => setFilter(value)}
            bg={filter === value ? "teal.500" : "gray.200"}
            color={filter === value ? "white" : "black"}
          >
            {label}
          </Button>
        ))}
      </ButtonGroup>

      <VStack spacing="3" align="stretch">
        {filteredTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}

        {filteredTasks.length === 0 && (
          <Text color="gray.500" textAlign="center">
            No tasks found
          </Text>
        )}
      </VStack>
    </Box>
  );
}

export default Tasks;
