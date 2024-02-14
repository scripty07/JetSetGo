import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FilterProvider } from "./app/context/filterContext";
import "./index.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#458f75",
      light: "#EEF4F2",
    },
    secondary: {
      main: "#112211",
    },
    text: {
      primary: "#112211",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 550,
      md: 768,
      lg: 950,
      xl: 1200,
    },
  },
  salmon: {
    main: "#FF8682",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <FilterProvider>
        <Home />
      </FilterProvider>
    </ThemeProvider>
  </React.StrictMode>
);
