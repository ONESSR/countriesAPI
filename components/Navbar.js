import * as React from "react";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";
import FlagCircleOutlinedIcon from "@mui/icons-material/FlagCircleOutlined";

import Menu from "@mui/material/Menu";
import { Container } from "@mui/system";
import { styled } from "@mui/material/styles";
const CustomAppBar = styled(AppBar)(
  ({
    theme: {
      palette: { mode }
    }
  }) => {
    // console.log("theme", theme);
    console.log("mode", mode);

    return {
      backgroundColor: mode === "light" ? "#fff" : "black",
      color: mode === "light" ? "black" : "white"
    };
  }
);

export const Navbar = () => {
  return (
    <CustomAppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <FlagCircleOutlinedIcon sx={{ marginRight: "8px" }} />
          <Typography
            variant="h1"
            component="div"
            sx={{
              flexGrow: 1,
              fontSize: "20px",
              fontWeight: "800"
            }}
          >
            Where in the world?
          </Typography>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
            >
              <NightlightOutlinedIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
            ></Menu>
          </div>
        </Toolbar>
      </Container>
    </CustomAppBar>
  );
};
