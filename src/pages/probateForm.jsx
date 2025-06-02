import React, { useState } from "react";
import { Box, Button, TextField, Typography, Paper, Stack } from "@mui/material";

export default function ProbateForm() {
  const [form, setForm] = useState({
    deceasedName: "",
    executorName: "",
    estateValue: "",
    propertyValue: "",
    propertyAddress: "",
    urgencyLevel: "",
    clientName: "",
    // Add more fields as needed
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send form data to backend
    alert("Probate case submitted!");
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f5f6fa", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Paper elevation={4} sx={{ p: 6, borderRadius: 4, minWidth: 400 }}>
        <Typography variant="h4" gutterBottom color="primary">Probate Case Details</Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField label="Deceased Name" name="deceasedName" value={form.deceasedName} onChange={handleChange} required />
            <TextField label="Executor Name" name="executorName" value={form.executorName} onChange={handleChange} required />
            <TextField label="Client Name" name="clientName" value={form.clientName} onChange={handleChange} required />
            <TextField label="Estate Value (£)" name="estateValue" type="number" value={form.estateValue} onChange={handleChange} required />
            <TextField label="Property Value (£)" name="propertyValue" type="number" value={form.propertyValue} onChange={handleChange} required />
            <TextField label="Property Address" name="propertyAddress" value={form.propertyAddress} onChange={handleChange} required />
            <TextField label="Urgency Level (Low/Medium/High)" name="urgencyLevel" value={form.urgencyLevel} onChange={handleChange} required />
            <Button type="submit" variant="contained" color="primary" size="large">Submit Probate Case</Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
}