import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import Navbar from "../../app/components/Navbar";
import FlightView from "../../app/containers/FlightView";
import FilterGroup from "../../app/components/Filters";

const Home = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Navbar />
      <FilterGroup />
      <FlightView />
    </LocalizationProvider>
  );
};

export default Home;
