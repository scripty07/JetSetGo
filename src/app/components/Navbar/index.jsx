import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Box } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Flight } from "@mui/icons-material";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{ boxShadow: "0 0 20px #ddd" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ margin: "auto" }}>
          <Box
            sx={{
              display: "flex",
              margin: "auto",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Flight
              sx={{ mr: 1, color: "#458f75", fontSize: { xs: 24, sm: 29 } }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              fontSize={{ xs: 23, sm: 28 }}
              sx={{
                mr: 2,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: { xs: ".2rem", sm: ".3rem" },
                color: "inherit",
                textDecoration: "none",
              }}
            >
              JETSETGO
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
