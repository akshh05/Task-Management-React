import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Text,
  Button,
  Stack,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useGlobal } from "../context/GlobalContext";
import { useState } from "react";
import DialogBox from "../components/DialogBox";

function TaskDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, deleteTask, updateTask } = useGlobal();

  const task = tasks.find((t) => String(t.id) === String(id));

  if (!task) {
    return (
      <Box p="10">
        <Text>Task not found</Text>
      </Box>
    );
  }

  const [form, setForm] = useState({
    id: task.id,
    title: task.title,
    description: task.description,
    dueDate: task.dueDate,
    status: task.status,
  });

  const saveChanges = (closeDialog) => {
    updateTask(form);
    closeDialog(false);
  };

  return (
    <Box p="8" bg="white" borderRadius="lg" boxShadow="md">
      <Text fontSize="2xl" fontWeight="bold">
        {task.title}
      </Text>

      <Text mt="2">{task.description}</Text>
      <Text mt="2">Status: {task.status}</Text>
      <Text mt="2">Due: {task.dueDate}</Text>

      <Stack direction="row" mt="6" spacing="4">
        <DialogBox
          buttonText="Edit"
          title="Edit Task"
          buttonProps={{
            bg: "teal.500",
            color: "white",
            _hover: { bg: "blue.600" },
          }}
        >
          {(setOpen) => (
            <Stack spacing="3">
              <Input
                value={form.title}
                onChange={(e) =>
                  setForm({ ...form, title: e.target.value })
                }
              />

              <Textarea
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
              />

              <Input
                type="date"
                value={form.dueDate}
                onChange={(e) =>
                  setForm({ ...form, dueDate: e.target.value })
                }
              />

              <Button
                bg="green.500"
                color="white"
                _hover={{ bg: "green.600" }}
                onClick={() => saveChanges(setOpen)}
              >
                Save
              </Button>
            </Stack>
          )}
        </DialogBox>

        <Button
          bg="red.500"
          color="white"
          _hover={{ bg: "red.600" }}
          variant="solid"
          onClick={() => {
            deleteTask(task.id);
            navigate("/tasks");
          }}
        >
          Delete
        </Button>
      </Stack>
    </Box>
  );
}

export default TaskDetails;
