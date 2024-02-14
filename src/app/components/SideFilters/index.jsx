import React, { useContext } from "react";
import AccordionDetails from "@mui/material/AccordionDetails";
import {
  Accordion,
  AccordionSummary,
  Box,
  Button,
  Slider,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  FilterContext,
  UpdateFilterContext,
} from "../../context/filterContext";
import { INITIAL_FILTERS } from "../../constants/common.const";

const SideFilters = () => {
  const filterDetails = useContext(FilterContext);
  const setFilterDetails = useContext(UpdateFilterContext);

  const resetFilters = () => {
    setFilterDetails(INITIAL_FILTERS);
  };

  const handlePriceChange = (_, newValue) => {
    setFilterDetails((prev) => ({ ...prev, priceFilter: newValue }));
  };

  return (
    <Box borderRight={{ md: "1px solid #eee" }} pr={2}>
      <Box sx={{ display: "flex", justifyContent: "space-between", py: 2 }}>
        <Typography
          fontWeight={800}
          fontFamily={"sans-serif"}
          fontSize={{ xs: 15, lg: 18 }}
        >
          Filters
        </Typography>
        <Button
          type="reset"
          sx={{ p: 0, textTransform: "none" }}
          onClick={resetFilters}
        >
          <Typography
            fontSize={{ xs: 13, lg: 16 }}
            fontWeight={500}
            fontFamily={"sans-serif"}
            color={"primary"}
          >
            Reset
          </Typography>
        </Button>
      </Box>
      <Accordion
        defaultExpanded
        sx={{ m: 0, px: 0, border: "none", boxShadow: "none" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ px: 0, border: "none", boxShadow: "none" }}
        >
          <Typography fontSize={{ xs: 13, lg: 16 }} fontWeight={500}>
            Price
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ px: 0, border: "none", boxShadow: "none" }}>
          <Box sx={{ width: "90%", mx: "auto" }}>
            <Slider
              getAriaLabel={() => "Temperature range"}
              value={filterDetails.priceFilter}
              onChange={handlePriceChange}
              valueLabelFormat={(value) => `₹${value}`}
              valueLabelDisplay="auto"
              min={1500}
              max={5000}
              step={50}
              getAriaValueText={(value) => `₹${value}`}
              marks={[
                {
                  label: "₹1500",
                  value: 1500,
                },
                {
                  label: "₹5000",
                  value: 5000,
                },
              ]}
            />
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion
        defaultExpanded
        sx={{ m: 0, px: 0, border: "none", boxShadow: "none" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ px: 0, border: "none", boxShadow: "none" }}
        >
          <Typography fontSize={{ xs: 13, lg: 16 }} fontWeight={500}>
            Rating
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ px: 0, border: "none", boxShadow: "none" }}>
          <Box
            sx={{
              width: "90%",
              display: "flex",
              gap: 1,
              flexWrap: "wrap",
              m: "auto",
              justifyContent: "normal",
            }}
          >
            <Button
              variant={
                filterDetails.ratingsFilter[0] ? "contained" : "outlined"
              }
              color="primary"
              size="small"
              onClick={() => {
                setFilterDetails((prev) => ({
                  ...prev,
                  ratingsFilter: {
                    ...prev.ratingsFilter,
                    0: !prev.ratingsFilter[0],
                  },
                }));
              }}
            >
              <Typography fontSize={{ xs: 13, lg: 16 }}>0+</Typography>
            </Button>
            <Button
              variant={
                filterDetails.ratingsFilter[1] ? "contained" : "outlined"
              }
              color="primary"
              size="small"
              onClick={() => {
                setFilterDetails((prev) => ({
                  ...prev,
                  ratingsFilter: {
                    ...prev.ratingsFilter,
                    1: !prev.ratingsFilter[1],
                  },
                }));
              }}
            >
              <Typography fontSize={{ xs: 13, lg: 16 }}>1+</Typography>
            </Button>
            <Button
              variant={
                filterDetails.ratingsFilter[2] ? "contained" : "outlined"
              }
              color="primary"
              size="small"
              onClick={() => {
                setFilterDetails((prev) => ({
                  ...prev,
                  ratingsFilter: {
                    ...prev.ratingsFilter,
                    2: !prev.ratingsFilter[2],
                  },
                }));
              }}
            >
              <Typography fontSize={{ xs: 13, lg: 16 }}>2+</Typography>
            </Button>
            <Button
              variant={
                filterDetails.ratingsFilter[3] ? "contained" : "outlined"
              }
              color="primary"
              size="small"
              onClick={() => {
                setFilterDetails((prev) => ({
                  ...prev,
                  ratingsFilter: {
                    ...prev.ratingsFilter,
                    3: !prev.ratingsFilter[3],
                  },
                }));
              }}
            >
              <Typography fontSize={{ xs: 13, lg: 16 }}>3+</Typography>
            </Button>
            <Button
              variant={
                filterDetails.ratingsFilter[4] ? "contained" : "outlined"
              }
              color="primary"
              size="small"
              onClick={() => {
                setFilterDetails((prev) => ({
                  ...prev,
                  ratingsFilter: {
                    ...prev.ratingsFilter,
                    4: !prev.ratingsFilter[4],
                  },
                }));
              }}
            >
              <Typography fontSize={{ xs: 13, lg: 16 }}>4+</Typography>
            </Button>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion
        defaultExpanded
        sx={{ m: 0, px: 0, border: "none", boxShadow: "none" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ px: 0, border: "none", boxShadow: "none" }}
        >
          <Typography fontSize={{ xs: 13, lg: 16 }} fontWeight={500}>
            Airlines
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ px: 0, border: "none", boxShadow: "none" }}>
          <Box sx={{ width: "90%", mx: "auto" }}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterDetails.airlinesFilter.spiceJet}
                    onChange={(e) =>
                      setFilterDetails((prev) => ({
                        ...prev,
                        airlinesFilter: {
                          ...prev.airlinesFilter,
                          spiceJet: e.target.value,
                        },
                      }))
                    }
                  />
                }
                label={
                  <Typography fontSize={{ xs: 13, lg: 16 }}>
                    SpiceJet
                  </Typography>
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterDetails.airlinesFilter.airIndia}
                    onChange={(e) =>
                      setFilterDetails((prev) => ({
                        ...prev,
                        airlinesFilter: {
                          ...prev.airlinesFilter,
                          airIndia: e.target.value,
                        },
                      }))
                    }
                  />
                }
                label={
                  <Typography fontSize={{ xs: 13, lg: 16 }}>
                    Air India
                  </Typography>
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterDetails.airlinesFilter.indigo}
                    onChange={(e) =>
                      setFilterDetails((prev) => ({
                        ...prev,
                        airlinesFilter: {
                          ...prev.airlinesFilter,
                          indigo: e.target.value,
                        },
                      }))
                    }
                  />
                }
                label={
                  <Typography fontSize={{ xs: 13, lg: 16 }}>Indigo</Typography>
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterDetails.airlinesFilter.vistara}
                    onChange={(e) => {
                      setFilterDetails((prev) => ({
                        ...prev,
                        airlinesFilter: {
                          ...prev.airlinesFilter,
                          vistara: e.target.value,
                        },
                      }));
                    }}
                  />
                }
                sx={{
                  fontSize: { xs: 13, lg: 16 },
                }}
                label={
                  <Typography fontSize={{ xs: 13, lg: 16 }}>Vistara</Typography>
                }
              />
            </FormGroup>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default SideFilters;
