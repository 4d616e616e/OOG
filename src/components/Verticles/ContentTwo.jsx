import { Box, Typography } from "@mui/material";
import React from "react";

export const ContentTwo = () => {
  return (
    <>
      <Box sx={{ my: { xs: "30px", md: "61px" } }}>
        <Typography
          className="font-sora"
          fontWeight={700}
          fontSize={{ xs: 22, md: 32 }}
          sx={{ color: "#1D1D1F" }}
        >
          Project Development
        </Typography>
        <Typography
          fontSize={{ xs: "16px", md: "22px" }}
          lineHeight={{ xs: "22px", md: "32px" }}
          fontWeight={600}
          className="font-sora"
          sx={{ color: "#818181", mt: "12px" }}
        >
          OOG has partnered with a number of{" "}
          <span className="gradient-text-two">high-profile organizations</span>{" "}
          to provide sustainable and economically viable solutions. At OOG we
          are committed to serving the communities in which we operate by{" "}
          <span className="gradient-text-two">adding value</span> to their
          economies and safeguarding their interests.
        </Typography>
        <ul>
          <li> Development of Integrated Petrochemical Complexes.</li>
          <li> Upstream Oil and Gas development activities.</li>
          <li> Develop Oil Storage facilities in Far east</li>
          <li> OOG is aimed to develop Renewable Energies.</li>
          <li> Water Technologies based projects</li>
        </ul>
      </Box>
    </>
  );
};
