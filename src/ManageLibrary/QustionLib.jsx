import React, { useState } from 'react';
import MUIDataTable from "mui-datatables";
import { Box, Typography, Button, Divider, TextField, Autocomplete } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useNavigate } from 'react-router-dom';
import "./QusLib.css";

const QuestionLib = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [value, setValue] = useState(null);
  const navigate = useNavigate();

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const columns = [
    "QId",
    "Format",
    "Grade",
    "Subject",
    "Medium",
    "EOL Description",
    "Node IDs",
    "Node Description",
    "Difficulty",
    "Actions",
  ];
  const data = [["Joe James", "Test Corp", "Yonkers", "NY"]];
  const options = {
    filterType: "checkbox",
  };

  const QusFormat = [
    { label: "MCQ" },
    { label: "Fill in the Blanks" },
    { label: "Match the following" },
    { label: "Arrange the following" },
    { label: "One word" },
    { label: "Error Analysis" },
    { label: "Subjective Rearrange" },
    { label: "Grouped Questions" },
    { label: "Subjective" },
    { label: "Survey" },
    { label: "Step wise group" },
    { label: "Sequencing" },
  ];
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
          Question Library
        </Typography>
        <Button variant="contained" color="success" onClick={() => navigate('/ManageLibrary/AddQuestions')}>
          Add Question
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
            mb:3
          }}
        >
          Filters
        </Typography>

        <Box sx={{ ml: 4, mb: 2, display: "flex" }}>
          <Autocomplete
            multiple
            id="combo-box-demo"
            options={QusFormat}
            sx={{ width: 200 }}
            className="Filter"
            renderInput={(params) => (
              <TextField {...params} label="Select Question Format" />
            )}
          />
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
            className="Filter"
            id="combo-box-demo"
            options={SelectSubject}
            sx={{ width: 200 }}
            renderInput={(params) => (
              <TextField {...params} label="Select Subject" />
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
              <TextField {...params} label="Select Node" />
            )}
          />
        </Box>

        <Box >
          <Box  sx={{ ml: 4}}>
          <a href="#" onClick={toggleExpand} >
            {isExpanded ? 'hide advanced filter' : 'show advanced filter'}
          </a>
          </Box>
          {isExpanded && (
            <Box sx={{ ml: 4, mb: 5,mt: 2, display: 'flex' }}>
              <Autocomplete
                className="Filter"
                multiple
                id="combo-box-demo"
                options={SelectChapter}
                sx={{ width: 200 }}
                renderInput={(params) => (
                  <TextField {...params} label="Select Chapter" />
                )}
              />
              <Autocomplete
                multiple
                className="Filter"
                id="combo-box-demo"
                options={SelectTopic}
                sx={{ width: 200 }}
                renderInput={(params) => (
                  <TextField {...params} label="Select Topic" />
                )}
              />
              <Autocomplete
                multiple
                className="Filter"
                id="combo-box-demo"
                options={SelectDifficulty}
                sx={{ width: 200 }}
                renderInput={(params) => (
                  <TextField {...params} label="Select Difficulty" />
                )}
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  sx={{ width: 200, mr: '15px' }}
                  label="Created At"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} sx={{ pr: 2 }} />}
                />
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  sx={{ width: 200, mr: '15px' }}
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

        <Box sx={{ padding: 2 }}>
          <MUIDataTable data={data} columns={columns} options={options} />
        </Box>
      </Box>
    </>
  );
};

export default QuestionLib;
