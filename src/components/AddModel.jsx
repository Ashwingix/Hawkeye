import React from "react";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";

const AddModal = ({ isOpen, onClose, title, fields, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const formData = {};
    data.forEach((value, key) => {
      formData[key] = value;
    });
    onSubmit(formData);
  };

  return (
    <Modal open={isOpen} onClose={onClose} aria-labelledby={title}>
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
          {title}
        </Typography>
        <form onSubmit={handleSubmit}>
          {fields.map((field, index) => (
            <TextField
              key={index}
              label={field.label}
              name={field.name}
              type={field.type || "text"}
              fullWidth
              margin="normal"
            />
          ))}
          <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
            <Button onClick={onClose} sx={{ mr: 2 }}>
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default AddModal;
