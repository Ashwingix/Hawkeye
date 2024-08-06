import {
  Box,
  Button,
  Typography,
  Autocomplete,
  TextField,
  Divider,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  TextareaAutosize,
  styled,
} from "@mui/material";

const AddTextbook = () => {
  const Competency = [{ label: "asdfg" }, { label: "asdkjfg" }];
  const CustomTextarea = styled(TextareaAutosize)`
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-size: 16px;
    resize: vertical; /* allows resizing only in the vertical direction */
  `;
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
          Add Text book
        </Typography>
      </Box>
      <Divider sx={{ marginBottom: "7px" }} />
      <Box sx={{ width: "100%", display: "flex" }}>
        <Box sx={{}}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={Competency}
            sx={{ width: 300, ml: 3, mt: 2 }}
            className="Filter"
            renderInput={(params) => (
              <TextField {...params} label="Select Grade" />
            )}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={Competency}
            sx={{ width: 300, ml: 3, mt: 2 }}
            className="Filter"
            renderInput={(params) => (
              <TextField {...params} label="Select Subject" />
            )}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={Competency}
            sx={{ width: 300, ml: 3, mt: 2 }}
            className="Filter"
            renderInput={(params) => (
              <TextField {...params} label="Select Medium" />
            )}
          />
        </Box>

        <Box sx={{ width: "100%", ml: 5 }}>
          <Box sx={{ display: "flex", paddingRight: 2 }}>
            <TextField
              id="outlined-basic"
              label="Select Board"
              variant="outlined"
              sx={{ width: "100%", mt: 2, mr: 2 }}
            />
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={Competency}
              sx={{ width: "100%", ml: 3, mt: 2 }}
              className="Filter"
              renderInput={(params) => (
                <TextField {...params} label="Content Type" />
              )}
            />
          </Box>
          <Box sx={{ display: "flex", paddingRight: 2 }}>
            <TextField
              id="outlined-basic"
              label="Book Title"
              variant="outlined"
              sx={{ width: "100%", mt: 2, mr: 2 }}
            />
            <TextField
              id="outlined-basic"
              label="File Title"
              variant="outlined"
              sx={{ width: "100%", mt: 2, mr: 2 }}
            />
          </Box>
          <Box sx={{ display: "flex", paddingRight: 2 }}>
            <FormControl sx={{ mt: 2 }}>
              <FormLabel id="demo-row-radio-buttons-group-label">
                File type
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="Link"
                  control={<Radio />}
                  label="Link"
                />
                <FormControlLabel value="pdf" control={<Radio />} label="pdf" />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            //   sx={{ height: '100vh' }} // Optional: This makes the container take up the full viewport height
          >
            <Button variant="contained" color="primary" sx={{ mt: 4 }}>
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AddTextbook;
