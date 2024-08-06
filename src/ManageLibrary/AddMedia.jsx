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

const AddMedia = () => {
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
          Add Media
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
            renderInput={(params) => <TextField {...params} label="Topic Id" />}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={Competency}
            sx={{ width: 200, ml: 3, mt: 2 }}
            className="Filter"
            renderInput={(params) => (
              <TextField {...params} label="CG YT Channel d" />
            )}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={Competency}
            sx={{ width: 200, ml: 3, mt: 2 }}
            className="Filter"
            renderInput={(params) => <TextField {...params} label="Provider" />}
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
              <TextField {...params} label="Select subject" />
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
        </Box>

        <Box  sx={{
    width: "100%",
    ml: 5,
    height: "600px", // Set a fixed height
    overflowY: "auto", // Enable vertical scrolling
    overflowX: "hidden" // Disable horizontal scrolling (optional)
  }}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={Competency}
            sx={{ width: 600, mt: 2 }}
            className="Filter"
            renderInput={(params) => <TextField {...params} label="Topic" />}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={Competency}
            sx={{ width: 600, mt: 2 }}
            className="Filter"
            renderInput={(params) => (
              <TextField {...params} label="Vernacular Topic" />
            )}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={Competency}
            sx={{ width: 600, mt: 2 }}
            className="Filter"
            renderInput={(params) => (
              <TextField {...params} label="Sub Topic" />
            )}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={Competency}
            sx={{ width: 600, mt: 2 }}
            className="Filter"
            renderInput={(params) => (
              <TextField {...params} label="Sub Vernacular Topic" />
            )}
          />

          {/* <CustomTextarea
              minRows={6}
              placeholder="Enter your text here"
              sx={{ mt: 4 }}
            /> */}

          <textarea
            name="postContent"
            rows={8}
            cols={80}
            placeholder="Node Description"
            style={{
              width: "90%", // Make it responsive
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "16px",
              fontFamily: "Arial, sans-serif",
              resize: "vertical", // Allows vertical resizing only
              marginTop: "20px",
            }}
          />
          <Box sx={{ display: "flex", paddingRight: 2 }}>
            <TextField
              id="outlined-basic"
              label="M.Course Id"
              variant="outlined"
              sx={{ width: "100%", mt: 2, mr: 2 }}
            />
            <TextField
              id="outlined-basic"
              label="M.Sequence Id"
              variant="outlined"
              sx={{ width: "100%", mt: 2, mr: 2 }}
            />
          </Box>
          <TextField
            id="outlined-basic"
            label="Course Name"
            variant="outlined"
            sx={{ width: 600, mt: 2, mr: 2 }}
          />
          <Box sx={{ display: "flex", paddingRight: 2 }}>
            <TextField
              id="outlined-basic"
              label="Media Name"
              variant="outlined"
              sx={{ width: "100%", mt: 2, mr: 2 }}
            />
            <TextField
              id="outlined-basic"
              label="Media Url"
              variant="outlined"
              sx={{ width: "100%", mt: 2, mr: 2 }}
            />
          </Box>
          <TextField
            id="outlined-basic"
            label="Keyword"
            variant="outlined"
            sx={{ width: 600, mt: 2, mr: 2 }}
          />
          <TextField
            id="outlined-basic"
            label="Vernacular Keyword"
            variant="outlined"
            sx={{ width: 600, mt: 2, mr: 2 }}
          />
          <TextField
            id="outlined-basic"
            label="Remedial LO's"
            variant="outlined"
            sx={{ width: 600, mt: 2, mr: 2 }}
          />
          <Box sx={{ display: "flex", paddingRight: 2 }}>
            <FormControl sx={{ mt: 2 }}>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Lession plan type
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
          <Box sx={{ display: "flex", paddingRight: 2 }}>
            <FormControl sx={{ mt: 2 }}>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Worksheet type
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
            sx={{ mb: 2 }}
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

export default AddMedia;
