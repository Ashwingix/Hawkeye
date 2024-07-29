import React from "react";
import { Outlet, useLocation, Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Breadcrumbs,
  Link,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import Sidebar from "./Sidebar";

// Utility function to generate breadcrumb items
const generateBreadcrumbs = (location) => {
  const pathnames = location.pathname.split('/').filter((x) => x);
  return pathnames.map((value, index) => {
    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
    return (
      <Link
        key={to}
        underline="hover"
        color="inherit"
        component={RouterLink}
        to={to}
      >
        {value.charAt(0).toUpperCase() + value.slice(1)}
      </Link>
    );
  });
};

const Layout = ({ onLogout }) => {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = React.useState(null);

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
    console.log("Reset Password Clicked");
  };

  const breadcrumbs = generateBreadcrumbs(location);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default" }}>
        {shouldShowNavbar && (
          <AppBar
            position="static"
            sx={{
              bgcolor: "#1d2127",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              mb: 2,
            }}
          >
            <Toolbar sx={{ justifyContent: "space-between", px: 2 }}>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  color: "#ccc",
                  fontWeight: "bold",
                  letterSpacing: 1.2,
                }}
              >
                HawkEye
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {/* <Breadcrumbs aria-label="breadcrumb" sx={{ color: "#ccc", mr: 2,fontSize:"13px" }}>
                  <Link underline="hover" color="inherit" component={RouterLink} to="/Home">
                    Home
                  </Link>
                  {breadcrumbs}
                </Breadcrumbs> */}
                <IconButton
                  edge="end"
                  aria-label="user options"
                  aria-controls="user-menu"
                  aria-haspopup="true"
                  onClick={handleMenuOpen}
                  sx={{ color: "#ccc" }}
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="user-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={handleResetPassword}>
                    Reset Password
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </Box>
            </Toolbar>
          </AppBar>
        )}
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
