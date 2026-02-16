import {
  MenuRoot,
  MenuTrigger,
  MenuPositioner,
  MenuContent,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useGlobal } from "../context/GlobalContext";

function MenuBox({ id }) {
  const navigate = useNavigate();
  const { deleteTask } = useGlobal();

  return (
    <MenuRoot positioning={{ placement: "bottom-end" }}>
      <MenuTrigger asChild>
        <Button size="xs" variant="outline">
          ⋮
        </Button>
      </MenuTrigger>

      <MenuPositioner>
        <MenuContent className="chakra-menu">
          <MenuItem
            className="menu-item"
            onClick={() => navigate(`/tasks/${id}`)}
          >
            🔍 View Details
          </MenuItem>

          <MenuItem
            className="menu-item danger"
            onClick={() => deleteTask(id)}
          >
            🗑 Delete
          </MenuItem>
        </MenuContent>
      </MenuPositioner>
    </MenuRoot>
  );
}

export default MenuBox;
