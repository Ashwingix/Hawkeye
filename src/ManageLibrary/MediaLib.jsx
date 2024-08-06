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
import "./QusLib.css";

const MediaLib = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [value, setValue] = useState(null);
  const navigate = useNavigate();

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const columns = [
    "Media Id",

    "Grade",
    "Topic",
    "Medium",
    "Name",
    "Remidial LO's",
    "Resources",

    "Actions",
  ];
  const data = [["Joe James", "Test Corp", "Yonkers", "NY"]];
  const options = {
    filterType: "checkbox",
  };

  
  const SelectGrade = [{ label: "Test" }, { label: "Test" }];
  const SelectSubject = [{ label: "Test" }];
  const SelectMedium = [{ label: "Test" }];
  const SelectNode = [{ label: "Test" }];
  const SelectChapter = [{ label: "Test" }];
  const SelectTopic = [{ label: "Test" }];
  const SelectDifficulty = [{ label: "Test" }];
  const Published = [{ label: "Test" }];

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
          Media Library
        </Typography>
        <Button
          variant="contained"
          color="success"
          onClick={() => navigate("/ManageLibrary/AddMedia")}
        >
          Add Media
        </Button>
      </Box>
      <Divider sx={{ marginBottom: "7px" }} />
      <Box sx={{ width: "100%" }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            color: "#1d2127",
            fontWeight: "bold",
            letterSpacing: 1.2,
            fontFamily: "Roboto",
            pl: 3,
            mt: 3,
            mb: 3,
          }}
        >
          Filters
        </Typography>

        <Box sx={{ ml: 4, mb: 2, display: "flex" }}>
         
          <Autocomplete
            multiple
            id="combo-box-demo"
            className="Filter"
            options={SelectGrade}
            sx={{ width: 200 }}
            renderInput={(params) => (
              <TextField {...params} label="Select Grade" />
            )}
          />
           <Autocomplete
            multiple
            id="combo-box-demo"
            options={SelectSubject}
            sx={{ width: 200 }}
            className="Filter"
            renderInput={(params) => (
              <TextField {...params} label="SelectSubject" />
            )}
          />
          <Autocomplete
            className="Filter"
            multiple
            id="combo-box-demo"
            options={SelectMedium}
            sx={{ width: 200 }}
            renderInput={(params) => (
              <TextField {...params} label="Select Medium" />
            )}
          />
          <Autocomplete
            multiple
            className="Filter"
            id="combo-box-demo"
            options={SelectNode}
            sx={{ width: 200 }}
            renderInput={(params) => (
              <TextField {...params} label="Select Video Provider" />
            )}
          />
        </Box>

        <Box>
          <Box sx={{ ml: 4 }}>
            <a href="#" onClick={toggleExpand}>
              {isExpanded ? "hide advanced filter" : "show advanced filter"}
            </a>
          </Box>
          {isExpanded && (
            <Box sx={{ ml: 4, mb: 5, mt: 2, display: "flex" }}>
              <Autocomplete
                className="Filter"
                multiple
                id="combo-box-demo"
                options={SelectChapter}
                sx={{ width: 200 }}
                renderInput={(params) => (
                  <TextField {...params} label="Select CG Channel" />
                )}
              />

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  sx={{ width: 200, mr: "15px" }}
                  label="Created At"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField {...params} sx={{ pr: 2 }} />
                  )}
                />
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  sx={{ width: 200, mr: "15px" }}
                  label="Updated At"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
              <Autocomplete
                multiple
                id="combo-box-demo"
                className="Filter"
                options={Published}
                sx={{ width: 200 }}
                renderInput={(params) => (
                  <TextField {...params} label="Published" />
                )}
              />
            </Box>
          )}
        </Box>

        <Box sx={{ padding: 2}}>
          <MUIDataTable data={data} columns={columns} options={options} />
        </Box>
      </Box>
    </>
  );
};

export default MediaLib;
