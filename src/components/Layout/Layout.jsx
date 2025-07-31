import React from "react";
import { Header } from "./Header/Header";
import { Box } from "@mui/material";
import { Footer } from "./Footer/Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Box sx={{ m: -1 }}>
        <Header />
        {children}
        <Footer />
      </Box>
    </>
  );
};
