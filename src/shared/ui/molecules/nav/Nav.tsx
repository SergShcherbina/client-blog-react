import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import { Path } from "../../../enums";
import { CustomLink } from "../../atoms";

export const Nav = () => {
  return (
    <nav>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2, display: { xs: "block", sm: "none" } }}
      >
        <MenuIcon />
      </IconButton>

      <List sx={{ display: { xs: "none", sm: "flex" } }}>
        <ListItem>
          <CustomLink to={Path.MAIN}>{"Главная"}</CustomLink>
        </ListItem>
        <ListItem>
          <CustomLink to={Path.ADD_POST}>{"Создать пост"}</CustomLink>
        </ListItem>
        <ListItem>
          <CustomLink to={Path.EDIT_POST}>{"Редактировать пост"}</CustomLink>
        </ListItem>
      </List>
    </nav>
  );
};
