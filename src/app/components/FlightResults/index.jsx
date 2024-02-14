import { Box, Typography, FormControl, Select, MenuItem } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import FlightCardList from "../FlightCardList";
import { Triangle } from "react-loader-spinner";
import { NO_DATA_FOUND } from "../../constants/assets.const";

const FlightResults = () => {
  const hasFetchedResults = useRef(false);
  const [flightResults, setFlightResults] = useState([]);
  const [sortFilter, setSortFilter] = useState(1);

  const [isLoading, setIsLoading] = useState(true);

  const fetchFlightResults = async () => {
    const endPoint = "https://api.npoint.io/4829d4ab0e96bfab50e7";

    setIsLoading(true);
    try {
      const res = await fetch(endPoint, {
        method: "GET",
      });
      const flightData = await res.json();

      setFlightResults(flightData?.data?.result ?? []);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSortFilterChange = (event) => {
    setSortFilter(event.target.value);

    if (event.target.value === 1) {
      setFlightResults((prev) => prev.sort((a, b) => a.fare - b.fare));
    } else {
      setFlightResults((prev) => prev.sort((a, b) => b.fare - a.fare));
    }
  };

  useEffect(() => {
    if (!hasFetchedResults.current) {
      fetchFlightResults();
    }
  }, []);

  return isLoading ? (
    <Box
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Triangle
        visible={true}
        height="50"
        width="50"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperClass=""
      />
    </Box>
  ) : flightResults.length ? (
    <Box>
      <Box ml={2}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography component="p" fontSize={{ xs: 12, lg: 16 }}>
            Showing
            <Typography
              component="span"
              color="salmon"
              fontSize={{ xs: 12, lg: 16 }}
            >
              {` ${flightResults.length} `}
            </Typography>
            places
          </Typography>
          <Box display="flex" alignItems="center">
            <Typography fontSize={{ xs: 10, lg: 12 }} fontWeight={400}>
              Sort by
            </Typography>
            <FormControl
              variant="standard"
              sx={{ m: 1, minWidth: { xs: 90, lg: 120 } }}
            >
              <Select
                value={sortFilter}
                sx={{
                  fontSize: { xs: 12, lg: 16 },
                }}
                onChange={handleSortFilterChange}
              >
                <MenuItem
                  value={1}
                  sx={{
                    fontSize: { xs: 12, lg: 16 },
                  }}
                >
                  Economic
                </MenuItem>
                <MenuItem
                  value={2}
                  sx={{
                    fontSize: { xs: 12, lg: 16 },
                  }}
                >
                  Expensive
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Box>
      <Box>
        <FlightCardList flightResults={flightResults} />
      </Box>
    </Box>
  ) : (
    <Box width={550} m="auto">
      <img src={NO_DATA_FOUND} width="100%" alt="No Data" />
    </Box>
  );
};

export default FlightResults;
