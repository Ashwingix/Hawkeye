import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material"; 
import Sidebar from "./Sidebar";

const Layout = ({ onLogout }) => {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = React.useState(null);

  // Determine if the Navbar should be shown based on the current route
  const shouldShowNavbar = location.pathname !== "/";

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleMenuClose();
    onLogout();
  };

  const handleResetPassword = () => {
    handleMenuClose();
    // Implement reset password logic here
    console.log("Reset Password Clicked");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Sidebar />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 0.5 }} 
      >
        {shouldShowNavbar && (
          <AppBar
            position="static"
            sx={{
              bgcolor: "#f5f5f5", 
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              mb: 2, 
            }}
          >
            <Toolbar sx={{ justifyContent: "space-between", px: 2 }}>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  color: "#404040", // Darker text color for contrast
                  fontWeight: "bold", // Bold text for emphasis
                  letterSpacing: 1.2, // Slight letter spacing for readability
                }}
              >
                HawkEye
              </Typography>
              <div>
                <IconButton
                  edge="end"
                  aria-label="user options"
                  aria-controls="user-menu"
                  aria-haspopup="true"
                  onClick={handleMenuOpen}
                  sx={{
                    color: "#404040", 
                  }}
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="user-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={handleResetPassword}>Reset Password</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </div>
            </Toolbar>
          </AppBar>
        )}
        <Outlet /> {/* Renders the matched child route component */}
      </Box>
    </Box>
  );
};

export default Layout;
