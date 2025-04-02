import { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Button, Drawer, List, ListItem, ListItemText, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import icon from "../assets/images/icon.png";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navItems = ["Inicio", "Catálogo", "Nosotros", "Contacto"];

  return (
    <AppBar position="fixed" color="primary">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center" gap={2}>
          <img src={icon} alt="Logo" style={{ height: "40px" }} />
          <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
            Industrias Q
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* Botones para pantallas grandes */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {navItems.map((text) => (
              <Button key={text} color="inherit">
                {text}
              </Button>
            ))}
          </Box>

          {/* Icono para móvil */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Drawer lateral */}
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              {navItems.map((text) => (
                <ListItem button key={text}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};



export default Header;