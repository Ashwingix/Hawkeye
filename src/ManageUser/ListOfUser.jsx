import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { FaEdit, FaTrash } from "react-icons/fa";

import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Divider,
} from "@mui/material";

const ActionsCellRenderer = (params) => {
  return (
    <div>
      <FaEdit
        style={{ cursor: "pointer", marginRight: 10 }}
        onClick={() => handleEdit(params.data)}
      />
      <FaTrash
        style={{ cursor: "pointer" }}
        onClick={() => handleDelete(params.data)}
      />
    </div>
  );
};

const handleEdit = (rowData) => {
  console.log("Edit action for: ", rowData);
  // Add your edit logic here
};

const handleDelete = (rowData) => {
  console.log("Delete action for: ", rowData);
  // Add your delete logic here
};

const ListOfUser = () => {
  const pagination = true;
  const paginationPageSize = 500;
  const paginationPageSizeSelector = [200, 500, 1000];
  const [rowData, setRowData] = useState([
    {
      Name: "Tesla",
      Username: "Model Y",
      Email: "example@example.com",
      Role: "fd",
    },
    {
      Name: "Tesla",
      Username: "Model Y",
      Email: "example@example.com",
      Role: "fd",
    },
    {
      Name: "Tesla",
      Username: "Model Y",
      Email: "example@example.com",
      Role: "fd",
    },
    {
      Name: "Tesla",
      Username: "Model Y",
      Email: "example@example.com",
      Role: "fd",
    },
  ]);

  const [colDefs, setColDefs] = useState([
    { field: "Name", resizable: true, minWidth: 150 },
    { field: "Username", resizable: true, minWidth: 150 },
    { field: "Email", resizable: true, minWidth: 200 },
    { field: "Role", resizable: true, minWidth: 100 },
    {
      field: "Actions",
      cellRenderer: ActionsCellRenderer,
      filter: false,
      resizable: true,
      minWidth: 150,
    },
  ]);

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formValues, setFormValues] = useState({
    name: "",
    username: "",
    email: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e, onSubmit) => {
    e.preventDefault();
    onSubmit(formValues);
    handleClose();
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
          variant="h6"
          component="div"
          sx={{
            color: "#1d2127",
            fontWeight: "bold",
            letterSpacing: 1.2,
            fontFamily: 'Roboto',
          }}
        >
          List Of User
        </Typography>

        <Button
          variant="contained"
          color="success"
          onClick={handleOpen}
          // sx={{ margin: "5px" }}
        >
          Add User
        </Button>
      </Box>
      <Divider sx={{ marginBottom: "7px" }} />
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          p: "5px 20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              p: 4,
              borderRadius: 2,
            }}
          >
            <Typography variant="h6" component="h2">
              Add/Edit User
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Name"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Username"
                name="username"
                value={formValues.username}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <FormControl fullWidth margin="normal">
                <InputLabel>Role</InputLabel>
                <Select
                  name="role"
                  value={formValues.role}
                  onChange={handleChange}
                >
                  <MenuItem value="Admin">Admin</MenuItem>
                  <MenuItem value="User">User</MenuItem>
                  <MenuItem value="Viewer">Viewer</MenuItem>
                </Select>
              </FormControl>
              <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
                <Button onClick={handleClose} sx={{ mr: 2 }}>
                  Cancel
                </Button>
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </Box>
            </form>
          </Box>
        </Modal>
        <Box className="ag-theme-quartz" sx={{ flexGrow: 1 }}>
          <AgGridReact
            rowData={rowData}
            columnDefs={colDefs}
            pagination={pagination}
            paginationPageSize={paginationPageSize}
            paginationPageSizeSelector={paginationPageSizeSelector}
            domLayout="autoHeight"
            onGridReady={(params) => params.api.sizeColumnsToFit()}
          />
        </Box>
      </Box>
    </>
  );
};

export default ListOfUser;