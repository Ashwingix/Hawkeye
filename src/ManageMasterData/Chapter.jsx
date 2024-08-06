import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { FaEdit, FaTrash } from "react-icons/fa";

import { Box, Typography, Button, Divider } from "@mui/material";
import AddModal from "../components/AddModel";

const ActionsCellRenderer = (params) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalConfig, setModalConfig] = useState({ title: "", fields: [] });

  const openModal = (config) => {
    setModalConfig(config);
    setModalOpen(true);
  };

  const handleEdit = (rowData) => {
    console.log("Edit action for: ", rowData);

    openModal({
      title: "Edit Chapter",
      fields: [
        {
          name: "Grade",
          label:"Grade",
        },
        
        {
          name: "Subject",
          label:"Subject",
         
        },
        {
          name: "Medium",
          label:"Medium",
         
        },
        {
          name: "Chapter Name",
          label:"Chapter Name",
         
        },
        {
          name: "Description",
          label:"Description",
         
        },
        
      ],
    });
  };

  const handleDelete = (rowData) => {
    console.log("Delete action for: ", rowData);
    // Add your delete logic here
  };

  const handleModalSubmit = (data) => {
    console.log("Form Data:", data);
    setModalOpen(false);
    // Add your form submission logic here
  };

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
      <AddModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title={modalConfig.title}
        fields={modalConfig.fields}
        onSubmit={handleModalSubmit}
      />
    </div>
  );
};

const Chapter = () => {
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
    { field: "Grade", resizable: true, minWidth: 150 },
    { field: "Subject", resizable: true, minWidth: 150 },
    { field: "Medium", resizable: true, minWidth: 150 },
    {  headerName: "Chapter Name",field: "name", resizable: true, minWidth: 150 },
    { field: "description", resizable: true, minWidth: 150 },

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
      const apiUrl = "http://3.109.144.250/phase3/api/v1/chapter/list";
      console.log(apiUrl)
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
          Chapter
        </Typography>

        <Button
          variant="contained"
          color="success"
          onClick={() =>
            openModal({
              title: "Add Chapter",
              fields: [
                {
                  name: "Grade",
                  label:"Grade",
                },
                
                {
                  name: "Subject",
                  label:"Subject",
                 
                },
                {
                  name: "Medium",
                  label:"Medium",
                 
                },
                {
                  name: "Chapter Name",
                  label:"Chapter Name",
                 
                },
                {
                  name: "Description",
                  label:"Description",
                 
                },
                
              ],
            })
          }
        >
          Add Chapter
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


export default Chapter;
