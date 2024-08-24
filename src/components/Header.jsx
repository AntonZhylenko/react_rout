// Header.jsx
import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Шабаки онлайн
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Смотреть шабак
        </Button>
        <Button color="inherit" component={Link} to="/about">
          Прикольчик
        </Button>
        <Button color="inherit" component={Link} to="/contact">
          Чето еще
        </Button>
      </Toolbar>
    </AppBar>
  );
}
