import {
  DialogRoot,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogBody,
  DialogCloseTrigger,
  DialogPositioner,
  DialogBackdrop,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

function DialogBox({ buttonText, title, children, buttonProps }) {
  const [open, setOpen] = useState(false);

  return (
    <DialogRoot
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
      placement="center"   
    >
      <DialogTrigger asChild>
        <Button {...buttonProps}>{buttonText}</Button>
      </DialogTrigger>

      <DialogBackdrop />

      <DialogPositioner>
        <DialogContent
          maxW="500px"
          w="90%"
          borderRadius="lg"
          boxShadow="xl"
          p="5"
        >
          <DialogHeader fontSize="lg" fontWeight="bold">
            {title}
          </DialogHeader>

          <DialogCloseTrigger />

          <DialogBody mt="3">
            {children(setOpen)}
          </DialogBody>
        </DialogContent>
      </DialogPositioner>
    </DialogRoot>
  );
}

export default DialogBox;
