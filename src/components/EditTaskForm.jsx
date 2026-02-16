import { Input, Textarea, Button, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useGlobal } from "../context/GlobalContext";

function EditTaskForm({ task, onClose }) {
  const { updateTask } = useGlobal();

  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [dueDate, setDueDate] = useState(task.dueDate || "");

  const handleSave = () => {
    updateTask(task.id, { title, description, dueDate });
    onClose();
  };

  return (
    <VStack spacing="3">
      <Input value={title} onChange={(e) => setTitle(e.target.value)} />
      <Textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <Button colorScheme="blue" onClick={handleSave}>
        Save
      </Button>
    </VStack>
  );
}

export default EditTaskForm;
