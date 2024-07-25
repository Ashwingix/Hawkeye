// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { AppBar, Toolbar, Typography, Button } from '@mui/material';

// const Navbar = ({ onLogout }) => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     onLogout();
//     navigate('/'); // Redirect to login page after logout
//   };

//   return (
//     <AppBar position="static" sx={{ bgcolor: '#424242' }}> 
//       <Toolbar>
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//           Hawkeye
//         </Typography>
//         <Button color="inherit" component={Link} to="/Home">
//           Home
//         </Button>
//         <Button color="inherit" component={Link} to="/profile">
//           Profile
//         </Button>
//         <Button color="inherit" onClick={handleLogout}>
//           Logout
//         </Button>
//         {/* Add more navigation items here */}
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;
