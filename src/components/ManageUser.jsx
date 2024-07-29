import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { FaEdit, FaTrash } from "react-icons/fa"; // Import icons from react-icons

import { Modal, Box, Typography, TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';


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

const ListUser = () => {
  // Row Data: The data to be displayed.
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

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    { field: "Name", width: 200, filter: true },
    { field: "Username", width: 200, filter: true },
    { field: "Email", width: 250, filter: true },
    { field: "Role", width: 150, filter: true },
    {
      field: "Actions",
      width: 100,
      cellRenderer: ActionsCellRenderer,
      filter: false,
    },
  ]);

  // Modal state management
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formValues, setFormValues] = useState({
    name: '',
    username: '',
    email: '',
    role: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e,onSubmit) => {
    e.preventDefault();
    onSubmit(formValues);
    handleClose();
  };

  return (
    <Box sx={{ position: "relative", height: "400px" ,p:"5px 20px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          // alignItems: "center",
          marginBottom: 2,
        }}
      >
        <Box></Box> {/* Empty Box to fill the left space */}
        <Button variant="contained" color="success" onClick={handleOpen} sx={{ margin:"5px 50px" }}
        >
          Add User
        </Button>
      </Box>
      <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          // border: '2px solid #000',
          // boxShadow: 24,
          p: 4,
                    borderRadius: 2, // Added border radius

        }}
      >
        <Typography variant="h6" component="h2">
          Add/Edit User
        </Typography>
        {/* <Typography sx={{ mt: 2 }}>
          Here you can add or edit user information.
        </Typography> */}
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
          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
            <Button onClick={handleClose} sx={{ mr: 2 }}>Cancel</Button>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
      <Box className="ag-theme-quartz" sx={{ height: "100%" }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          pagination={pagination}
          paginationPageSize={paginationPageSize}
          paginationPageSizeSelector={paginationPageSizeSelector}
        />
      </Box>
    </Box>
  );
};

export default ListUser;
