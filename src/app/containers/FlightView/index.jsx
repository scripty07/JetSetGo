import React from "react";
import { Box, Container } from "@mui/material";
import SideFilters from "../../components/SideFilters";
import FlightResults from "../../components/FlightResults";

const FlightView = () => {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
        }}
      >
        <Box
          sx={{
            flex: 1,
            maxWidth: { xs: "100%", md: "33%" },
          }}
        >
          <SideFilters />
        </Box>
        <Box
          sx={{
            flex: 1,
            overflow: "auto",
          }}
        >
          <FlightResults />
        </Box>
      </Box>
    </Container>
  );
};

export default FlightView;
