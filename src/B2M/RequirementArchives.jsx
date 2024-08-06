import React, { useState } from "react";
import MUIDataTable from "mui-datatables";
import {
  Box,
  Typography,
  Button,
  Divider,
  TextField,
  Autocomplete,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
// import "./QusLib.css";

const RequirementArchives = () => {
  
 

  const columns = [
   "Project Name",
    "Task Name",
    "Grade",
    "Subject",
    "Medium",
    "Due Date",
    "Progress",
    "Video Stage",
    "Status",
    "Actions",
  ];
  const data = [["Joe James", "Test Corp", "Yonkers", "NY"]];
  const options = {
    filterType: "checkbox",
  };

 
 

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 2,
          pl: 2,
          pr: 2,
        }}
      >
        <Typography
          variant="h5"
          component="div"
          sx={{
            color: "#1d2127",
            fontWeight: "bold",
            letterSpacing: 1.2,
            fontFamily: "Roboto",
          }}
        >
          Requirement Archives
        </Typography>
       
      </Box>
      <Divider sx={{ marginBottom: "7px" }} />
      <Box sx={{ width: "100%" }}>
        

        <Box sx={{ padding: 2 }}>
          <MUIDataTable data={data} columns={columns} options={options} />
        </Box>
      </Box>
    </>
  );
};


 
 
 
export default RequirementArchives;