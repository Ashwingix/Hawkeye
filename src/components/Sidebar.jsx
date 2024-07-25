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

const iconMap = {
  Home: <HomeIcon />,
  Person: <Person />,
  Settings: <Settings />,
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
          bgcolor: "#f5f5f5",
          borderRight: "1px solid",
          borderColor: "divider",
        },
      }}
    >
      <List>
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            margin: '15px 0',
            color: '#404040',
          }}
        >
          Welcome onBoard
        </Typography>
        <Divider sx={{ marginBottom: '20px' }} />
        {sidebarItemsData.map((item) => (
          <React.Fragment key={item.text}>
            <ListItem
              button
              component={item.link ? Link : "div"}
              to={item.link}
              onClick={() => item.subItems && handleItemClick(item.text)}
            >
              {item.icon && (
                <ListItemIcon sx={{ pl: 1 }}>{iconMap[item.icon]}</ListItemIcon>
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
                      sx={{ pl: 4 }}
                    >
                      <ListItemIcon sx={{ minWidth: "32px" }}>
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
