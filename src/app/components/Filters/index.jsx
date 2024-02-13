import * as React from "react";
import { Box, Button, Container, TextField, Autocomplete } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import SearchIcon from "@mui/icons-material/Search";

export default function FilterGroup() {
  const fromCity = [
    { label: "Delhi (DEL)", value: "del" },
    { label: "Mumbai (BOM)", value: "bom" },
    { label: "Chandigarh (CHD)", value: "chd" },
  ];

  const toCity = [
    { label: "Bengluru (BLR)", value: "blr" },
    { label: "Chennai (MAA)", value: "maa" },
    { label: "Gujrat (GUJ)", value: "guj" },
  ];

  const classType = [
    { label: "Economy", value: "1" },
    { label: "Premium Economy", value: "2" },
    { label: "Business", value: "3" },
    { label: "First Class", value: "4" },
  ];

  const passengerCount = Array(10)
    .fill(1)
    .map((_, ind) => {
      return { label: ind + 1, value: ind + 1 };
    });

  const tripType = [
    { label: "One Way", value: "1" },
    { label: "Round Trip", value: "2" },
    { label: "Multiple City", value: "3" },
  ];

  return (
    <Container
      maxWidth="xl"
      sx={{ backgroundColor: "white", position: "sticky", top: 0, zIndex: 100 }}
    >
      <Box
        sx={{
          my: 5,
          padding: "1.5rem 1rem",
          display: "flex",
          justifyContent: "space-between",
          boxShadow: "0 0 20px #ddd",
          borderRadius: 5,
        }}
      >
        <Autocomplete
          options={fromCity}
          sx={{
            width: 200,
            display: "inline-block",
            mr: 1,
          }}
          renderInput={(params) => <TextField {...params} label="From" />}
        />
        <Autocomplete
          disablePortal
          options={toCity}
          sx={{ width: 200, display: "inline-block", mr: 1 }}
          renderInput={(params) => <TextField {...params} label="To" />}
        />
        <Autocomplete
          options={tripType}
          sx={{ width: 200, display: "inline-block", mr: 1 }}
          renderInput={(params) => <TextField {...params} label="Trip" />}
        />
        <DatePicker label="Depart" sx={{ mr: 1, width: 200 }} />
        <Autocomplete
          disablePortal
          options={passengerCount}
          sx={{ width: 200, display: "inline-block", mr: 1 }}
          renderInput={(params) => <TextField {...params} label="Passenger" />}
        />
        <Autocomplete
          disablePortal
          options={classType}
          sx={{ width: 200, display: "inline-block", mr: 1 }}
          renderInput={(params) => <TextField {...params} label="Class" />}
        />
        <Button
          type="button"
          variant="contained"
          sx={{
            backgroundColor: "primary",
            ":hover": {
              backgroundColor: "primary",
            },
          }}
        >
          <SearchIcon
            fontSize="inherit"
            sx={{ fontSize: 32, color: "secondary" }}
          />
        </Button>
      </Box>
    </Container>
  );
}
