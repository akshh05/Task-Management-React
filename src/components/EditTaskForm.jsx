import { Input, Textarea, Button, VStack } from "@chakra-ui/react";
import { useGlobal } from "../context/GlobalContext";

function EditTaskForm({ task, onClose }) {
  const { updateTask } = useGlobal();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    updateTask(task.id, {
      title: formData.get("title"),
      description: formData.get("description"),
      dueDate: formData.get("dueDate"),
    });

    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing="3">
        <Input name="title" defaultValue={task.title} />
        
        <Textarea
          name="description"
          defaultValue={task.description}
        />

        <Input
          type="date"
          name="dueDate"
          defaultValue={task.dueDate || ""}
        />

        <Button type="submit" colorScheme="blue">
          Save
        </Button>
      </VStack>
    </form>
  );
}

export default EditTaskForm;
