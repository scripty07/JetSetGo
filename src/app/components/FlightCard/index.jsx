import { useTheme } from "@emotion/react";
import { FavoriteBorderOutlined } from "@mui/icons-material";
import { Box, Card, Typography, CardContent, Button } from "@mui/material";
import moment from "moment";
import React from "react";
import { AIRLINE_LOGO_MAP } from "../../constants/assets.const";

const FlightCard = (props) => {
  const { flight, fare } = props;
  const { source, destination, totalDuration, stopInfo } = flight;

  const theme = useTheme();
  const { palette } = theme;

  return (
    <Box>
      <Card
        sx={{
          mx: 2,
          my: 3,
          boxShadow: "0 0 20px #eee",
          borderRadius: 4,
          p: 1.5,
        }}
      >
        <CardContent>
          <Box display="flex" flex={1}>
            <Box
              width="15%"
              mr={2}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Box width={120}>
                <img
                  src={AIRLINE_LOGO_MAP[flight?.airlines[0]?.airlineName]}
                  width="100%"
                  alt="Airline"
                />
              </Box>
            </Box>
            <Box flex={1}>
              <Box
                display="flex"
                sx={{ pb: 2, borderBottom: "1px solid #ddd" }}
              >
                <Box flex={1}>
                  <Box>
                    <Typography
                      component="span"
                      sx={{
                        border: `1px solid ${palette.primary.main}`,
                        fontWeight: 500,
                        fontSize: 13,
                        p: 0.6,
                        borderRadius: 1,
                        fontFamily: "serif",
                      }}
                    >
                      4.2
                    </Typography>
                    <Typography
                      component="span"
                      sx={{
                        fontWeight: "bold",
                        fontSize: 14,
                        fontFamily: "sans-serif",
                      }}
                    >
                      {` Very Good `}
                      <Typography
                        component="span"
                        sx={{
                          fontWeight: 400,
                          fontSize: 13,
                          fontFamily: "serif",
                        }}
                      >
                        87 reviews
                      </Typography>
                    </Typography>
                  </Box>
                  <Box mt={2} display="flex" justifyContent="space-between">
                    <Typography component="p">
                      <Typography
                        fontWeight="bold"
                        component="span"
                        sx={{ mr: 1 }}
                      >
                        Departing
                      </Typography>
                      <Typography component="span">
                        {moment(source.depTime).format("ddd, DD MMM")}
                      </Typography>
                    </Typography>
                    <Typography component="p">
                      <Typography
                        fontWeight="bold"
                        component="span"
                        sx={{ mr: 1 }}
                      >
                        Arriving
                      </Typography>
                      <Typography component="span">
                        {moment(destination.arrTime).format("ddd, DD MMM")}
                      </Typography>
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{
                      mt: 1,
                      p: 1,
                      backgroundColor: `${palette.primary.light}`,
                    }}
                  >
                    <Box>
                      <Typography component="p" fontSize={24} fontWeight="bold">
                        {moment(source.depTime).format("HH:MM")}
                      </Typography>
                      <Typography component="p" fontSize={14} fontWeight={400}>
                        {`${source.airport.cityCode} (${source.airport.cityName})`}
                      </Typography>
                    </Box>
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                    >
                      <Typography component="p" fontSize={14} fontWeight={400}>
                        {totalDuration}
                      </Typography>
                      <Box
                        component="span"
                        display="inline-block"
                        width={120}
                        height={2}
                        sx={{ backgroundColor: `${palette.primary.main}` }}
                      />
                      <Typography component="p" fontSize={14} fontWeight={400}>
                        {stopInfo}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        component="p"
                        fontSize={24}
                        fontWeight="bold"
                        textAlign="right"
                      >
                        {moment(destination.arrTime).format("HH:MM")}
                      </Typography>
                      <Typography component="p" fontSize={14} fontWeight={400}>
                        {`${destination.airport.cityCode} (${destination.airport.cityName})`}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box width="15%" sx={{ direction: "rtl" }}>
                  <Box display="flex" flexDirection="column">
                    <Typography
                      component="span"
                      fontSize={12}
                      textAlign="right"
                    >
                      sarting from
                    </Typography>
                    <Typography
                      component="span"
                      fontSize={20}
                      textAlign="right"
                      fontFamily="sans-serif"
                      color="salmon"
                    >
                      {`₹${fare}`}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box pt={2} display="flex" gap={1}>
                <Button variant="outlined">
                  <FavoriteBorderOutlined color="secondary" />
                </Button>
                <Button variant="contained" sx={{ width: "100%" }}>
                  View Details
                </Button>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default FlightCard;
