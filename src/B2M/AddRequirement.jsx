import React, { useState } from "react";

import {
  Box,
  Typography,
  Autocomplete,
  TextField,
  Divider,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
const AddRequirement = () => {
  const Competency = [{ label: "asdfg" }, { label: "asdkjfg" }];
  const [value, setValue] = useState(null);

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
          Add Requirement
        </Typography>
      </Box>
      <Divider sx={{ marginBottom: "7px" }} />
      <Box sx={{ width: "100%", display: "flex" }}>
        <Box sx={{}}>
          <TextField
            id="outlined-basic"
            label="Project Name"
            variant="outlined"
            sx={{ width: 500, mt: 4, ml: 2 }}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={Competency}
            sx={{ width: 515, ml: 2, mt: 2 }}
            className="Filter"
            renderInput={(params) => (
              <TextField {...params} label="Select Grade" />
            )}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={Competency}
            sx={{ width: 515, ml: 2, mt: 2 }}
            className="Filter"
            renderInput={(params) => (
              <TextField {...params} label="Select Medium" />
            )}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={Competency}
            sx={{ width: 515, ml: 2, mt: 2 }}
            className="Filter"
            renderInput={(params) => (
              <TextField {...params} label="Translation Mediums" />
            )}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              sx={{ width: 500, mt: 2, ml: 2 }}
              label="Select Due Date"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} sx={{ pr: 2 }} />}
            />
          </LocalizationProvider>
          <TextField
            id="outlined-basic"
            label="No.of Question"
            variant="outlined"
            sx={{ width: 500, mt: 2, ml: 2 }}
          />
        </Box>

        <Box sx={{ width: "100%", mr: 3 }}>
          <TextField
            id="outlined-basic"
            label="Mark Alloted"
            variant="outlined"
            sx={{ width: "100%", mt: 4 }}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={Competency}
            sx={{ width: "100%", mt: 2.5 }}
            className="Filter"
            renderInput={(params) => (
              <TextField {...params} label="Select Subject" />
            )}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={Competency}
            sx={{ width: "100%", mt: 2.5 }}
            className="Filter"
            renderInput={(params) => (
              <TextField {...params} label="Select Medium" />
            )}
          />
          <textarea
            name="postContent"
            rows={8}
            cols={80}
            placeholder="Add notes"
            style={{
              width: "100%", // Make it responsive
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "16px",
              fontFamily: "Arial, sans-serif",
              resize: "vertical", // Allows vertical resizing only
              marginTop: "20px",
            }}
          />
        </Box>
        {/* <Box sx={{ width: "50%", p: 3, backgroundColor: "red" }}></Box> */}
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ mb: 2}}
      >
        <Button variant="contained" color="primary" sx={{ mt: 4,width:"30%" }}>
          Submit
        </Button>
      </Box>
    </>
  );
};

export default AddRequirement;
