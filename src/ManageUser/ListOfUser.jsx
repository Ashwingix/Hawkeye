import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { FaEdit, FaTrash } from "react-icons/fa";

import { Box, Typography, Button, Divider } from "@mui/material";
import AddModal from "../components/AddModel";

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
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalConfig, setModalConfig] = useState({ title: "", fields: [] });

  const openModal = (config) => {
    setModalConfig(config);
    setModalOpen(true);
  };

  const handleModalSubmit = (data) => {
    console.log("Form Data:", data);
    setModalOpen(false);
  };

  const pagination = true;
  const paginationPageSize = 10;
  const paginationPageSizeSelector = [10, 20, 50, 100];
  const [rowData, setRowData] = useState([]);
  const [colDefs, setColDefs] = useState([
    {
      headerName: "Sno",
      valueGetter: "node.rowIndex + 1",
      resizable: true,
      minWidth: 150,
      filter: false,
    },
    { field: "name", resizable: true, minWidth: 150 },
    { field: "username", resizable: true, minWidth: 150 },
    { field: "Email", resizable: true, minWidth: 150 },
    { field: "Role", resizable: true, minWidth: 150 },
    { field: "Product", resizable: true, minWidth: 150 },
    { field: "Client Name", resizable: true, minWidth: 150 },

    {
      field: "Actions",
      cellRenderer: ActionsCellRenderer,
      filter: false,
      resizable: true,
      minWidth: 150,
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = "http://3.109.144.250/phase3/api/v1/users/list";
      const apiToken = sessionStorage.getItem("api_token");

      try {
        const response = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiToken}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setRowData(data?.data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

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
            fontFamily: "Roboto",
          }}
        >
          List Of User
        </Typography>

        <Button
          variant="contained"
          color="success"
          onClick={() =>
            openModal({
              title: "Add User",
              fields: [
                {
                  name: "name",
                  label: "Name",
                },
                {
                  name: "email",
                  label: "Email",
                  type: "email",
                },
                {
                  name: "Role",
                  label: "Role",
                 
                },
                {
                  name: "Product",
                  label: "Product",
                  
                },
                {
                  name: "Client Name",
                  label: "Client Name",
                  
                },
              ],
            })
          }
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
        <Box className="ag-theme-quartz" sx={{ flexGrow: 1 }}>
          <AddModal
            isOpen={isModalOpen}
            onClose={() => setModalOpen(false)}
            title={modalConfig.title}
            fields={modalConfig.fields}
            onSubmit={handleModalSubmit}
          />
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
