import {
  Box,
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

const AddQuestions = () => {
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
          Add Question
        </Typography>
      </Box>
      <Divider sx={{ marginBottom: "7px" }} />
      <Box sx={{ width: "100%", display: "flex" }}>
        <Box sx={{}}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={Competency}
            sx={{ width: 200, ml: 3, mt: 2 }}
            className="Filter"
            renderInput={(params) => (
              <TextField {...params} label="Competency tag" />
            )}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={Competency}
            sx={{ width: 200, ml: 3, mt: 2 }}
            className="Filter"
            renderInput={(params) => (
              <TextField {...params} label="Select Grade" />
            )}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={Competency}
            sx={{ width: 200, ml: 3, mt: 2 }}
            className="Filter"
            renderInput={(params) => (
              <TextField {...params} label="Select Subject" />
            )}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={Competency}
            sx={{ width: 200, ml: 3, mt: 2 }}
            className="Filter"
            renderInput={(params) => (
              <TextField {...params} label="Select Medium" />
            )}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={Competency}
            sx={{ width: 200, ml: 3, mt: 2 }}
            className="Filter"
            renderInput={(params) => (
              <TextField {...params} label="Select Chapter" />
            )}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={Competency}
            sx={{ width: 200, ml: 3, mt: 2 }}
            className="Filter"
            renderInput={(params) => (
              <TextField {...params} label="Select Topic" />
            )}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={Competency}
            sx={{ width: 200, ml: 3, mt: 2 }}
            className="Filter"
            renderInput={(params) => (
              <TextField {...params} label="Select Node" />
            )}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={Competency}
            sx={{ width: 200, ml: 3, mt: 2 }}
            className="Filter"
            renderInput={(params) => (
              <TextField {...params} label="Evidence Type" />
            )}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={Competency}
            sx={{ width: 200, ml: 3, mt: 2 }}
            className="Filter"
            renderInput={(params) => (
              <TextField {...params} label="Search Evidence Description" />
            )}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={Competency}
            sx={{ width: 200, ml: 3, mt: 2, mb: 4 }}
            className="Filter"
            renderInput={(params) => (
              <TextField {...params} label="Select Difficulty" />
            )}
          />
        </Box>

        <Box sx={{ width: "100%", p: 3 }}>
          <Box sx={{ display: "flex" }}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={Competency}
              sx={{ width: 300, mt: 2 }}
              className="Filter"
              renderInput={(params) => (
                <TextField {...params} label="Select Question Type" />
              )}
            />
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={Competency}
              sx={{ width: 300, mt: 2 }}
              className="Filter"
              renderInput={(params) => (
                <TextField {...params} label="Select Question Format" />
              )}
            />
          </Box>
          {/* <CustomTextarea
            minRows={6}
            placeholder="Enter your text here"
            sx={{ mt: 4 }}
          /> */}

          <textarea
            name="postContent"
            rows={8}
            cols={80}
            placeholder="Enter Your Text Here"
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

          <TextField
            id="outlined-basic"
            label="Mark Alloted"
            variant="outlined"
            sx={{ width: "100%", mt: 4 }}
          />
          <FormControl sx={{ mt: 4 }}>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Explanation
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="Text" control={<Radio />} label="Text" />
              <FormControlLabel
                value="Image"
                control={<Radio />}
                label="Image"
              />
              <FormControlLabel
                value="Audio"
                control={<Radio />}
                label="Audio"
              />
              <FormControlLabel value="Pdf" control={<Radio />} label="Pdf" />
              <FormControlLabel value="None" control={<Radio />} label="None" />
            </RadioGroup>
          </FormControl>
        </Box>
        {/* <Box sx={{ width: "50%", p: 3, backgroundColor: "red" }}></Box> */}
      </Box>
    </>
  );
};

export default AddQuestions;
