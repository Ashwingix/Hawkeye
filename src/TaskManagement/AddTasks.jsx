import { Box, TextField, Autocomplete,Typography,Divider,Button} from "@mui/material";
import React, { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
const AddTasks = () => {
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
          Add Task
        </Typography>
      </Box>
      <Divider sx={{ marginBottom: "7px" }} />
      <Box sx={{ paddingRight: 2}}>
        <TextField
          id="outlined-basic"
          label="Task Name"
          variant="outlined"
          sx={{ width: 600, ml: 5, mt: 3 }}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={Competency}
          sx={{ width: 615, ml: 5, mt: 2 }}
          className="Filter"
          renderInput={(params) => (
            <TextField {...params} label="Select Grade" />
          )}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={Competency}
          sx={{ width: 615, ml: 5, mt: 2 }}
          className="Filter"
          renderInput={(params) => (
            <TextField {...params} label="Select Subject" />
          )}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={Competency}
          sx={{ width: 615, ml: 5, mt: 2 }}
          className="Filter"
          renderInput={(params) => <TextField {...params} label="Task Type" />}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={Competency}
          sx={{ width: 615, ml: 5, mt: 2 }}
          className="Filter"
          renderInput={(params) => (
            <TextField {...params} label="Select Medium" />
          )}
        />
        <textarea
          name="postContent"
          rows={8}
          cols={80}
          placeholder="Enter Your Text Here"
          style={{
            width: 600, // Make it responsive
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            fontSize: "16px",
            fontFamily: "Arial, sans-serif",
            resize: "vertical", // Allows vertical resizing only
            marginTop: "20px",
            marginLeft: "40px",
          }}
        />
        <Box>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              sx={{ width: 600, ml:5,mt:2}}
              label="Due Date"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Box>
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            //   sx={{ height: '100vh' }} // Optional: This makes the container take up the full viewport height
          >
            <Button variant="contained" color="primary" sx={{ mt: 4,mb:3,width:200}}>
              Submit
            </Button>
          </Box>
      </Box>
    </>
  );
};

export default AddTasks;
