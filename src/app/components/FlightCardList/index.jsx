import { Box } from "@mui/material";
import React from "react";
import FlightCard from "../FlightCard";

const FlightCardList = (props) => {
  const { flightResults } = props;

  return (
    <Box>
      {flightResults.map((flight) => {
        return (
          <FlightCard
            key={flight.id}
            flight={flight?.displayData}
            fare={flight?.fare}
          />
        );
      })}
    </Box>
  );
};

export default FlightCardList;
