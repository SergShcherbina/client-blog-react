import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";

import {LSKeys, Nav, Path, useAppSelector} from "../../../shared";
import {userSelectors} from "../../../entites";
import Typography from "@mui/material/Typography";

export const Header = () => {
  const navigate = useNavigate();
  const userName = useAppSelector(userSelectors.userNameSelectors);

  const onRedirect = () => {
    localStorage.removeItem(LSKeys.ACCESS_TOKEN);
    navigate(Path.LOGIN);
  };

  return (
    <Box>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Nav />

              <Typography sx={{ marginLeft: "auto" }}  >{userName}</Typography>

              <Button
                  sx={{ marginLeft: "20px" }}
                  color="inherit"
                  onClick={onRedirect}
                  variant={"outlined"}
              >
                Logout
              </Button>

          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
