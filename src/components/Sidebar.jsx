import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Drawer,
  Collapse,
  ListItemIcon,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { ExpandLess, ExpandMore, Person, Settings } from "@mui/icons-material";
import { RxDot } from "react-icons/rx";
import sidebarItemsData from "./sidebarItems.json";
import HomeIcon from '@mui/icons-material/Home';
import { FaUserAlt } from "react-icons/fa";
import { GrDatabase } from "react-icons/gr";
import { FaTasks } from "react-icons/fa";
import { IoLibraryOutline } from "react-icons/io5";
import { FiBox } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";
 

const iconMap = {
  Home: <HomeIcon />,
  Person: <Person />,
  Settings: <Settings />,
  ManageUser: < FaUserAlt />,
  ManageMasterData: <GrDatabase />,
  ManageLibrary: <IoLibraryOutline  />,
  TaskManagement: <FaTasks   />,
  Requirment: <SlCalender    />,
  knowledgegraph:<FiBox />
};

const Sidebar = () => {
  const [openItems, setOpenItems] = useState({});

  const handleItemClick = (text) => {
    setOpenItems((prevState) => ({
      ...prevState,
      [text]: !prevState[text],
    }));
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 250,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 250,
          boxSizing: "border-box",
          bgcolor: "#1d2127",
          borderRight: "1px solid",
          borderColor: "divider",
          "&::-webkit-scrollbar": {
            width: "8px",height:"10px"
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#1d2127",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#555",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#1d2127",
            borderRadius: "10px",
          },
        },
      }}
    >
      <List>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
    <img 
      src="/logo.png" 
      alt="Logo" 
      style={{
        width: '50px', // Adjust the size as needed
        marginRight: '10px', // Space between the logo and text
      }}
    />
    <Typography
      variant="h6"
      component="div"
      sx={{
        fontWeight: 'bold',
        color: '#ccc',
      }}
    >
      Welcome
    </Typography>
  </div>
        <Divider sx={{ marginBottom: '20px' }} />
        {sidebarItemsData.map((item) => (
          <React.Fragment key={item.text}>
            <ListItem
              button
              component={item.link ? Link : "div"}
              to={item.link}
              onClick={() => item.subItems && handleItemClick(item.text)}
              sx={{ color: '#ccc' }}
            >
              {item.icon && (
                <ListItemIcon sx={{ pl: 1, color: '#ccc' }}>{iconMap[item.icon]}</ListItemIcon>
              )}
              <ListItemText primary={item.text} />
              {item.subItems &&
                (openItems[item.text] ? <ExpandLess /> : <ExpandMore />)}
            </ListItem>
            {item.subItems && (
              <Collapse in={openItems[item.text]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.subItems.map((subItem) => (
                    <ListItem
                      button
                      component={Link}
                      to={subItem.link}
                      key={subItem.text}
                      sx={{ pl: 4, color: '#ccc' }}
                    >
                      <ListItemIcon sx={{ minWidth: "42px", color: '#ccc' }}>
                        <RxDot fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary={subItem.text} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
};

export default Sidebar;
