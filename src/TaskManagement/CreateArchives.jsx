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
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useNavigate } from "react-router-dom";
// import "./QusLib.css";

const CreateArchives = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [value, setValue] = useState(null);
  const navigate = useNavigate();

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const columns = [
    "Task Name",
    "Grade",
    "Subject",
    "Type",
    "Medium",
    "Assigned",
    "Due Date",
    "Progress",
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
          Task Archives
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


 
 
export default CreateArchives;