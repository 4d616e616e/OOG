import { Box, Typography } from "@mui/material";
import React from "react";

export const ContentOne = () => {
  return (
    <>
      <Box sx={{ my: { xs: "30px", md: "61px" } }}>
        <Typography
          className="font-sora"
          fontWeight={700}
          fontSize={{ xs: 22, md: 32 }}
          sx={{ color: "#1D1D1F" }}
        >
          Product Trading
        </Typography>
        <Typography
          fontSize={{ xs: "16px", md: "22px" }}
          lineHeight={{ xs: "22px", md: "32px" }}
          fontWeight={600}
          className="font-sora"
          sx={{ color: "#818181", mt: "12px" }}
        >
          We trade various{" "}
          <span className="gradient-text-two">commodities worldwide</span> and
          possess a <span className="gradient-text-two">strong supply</span>{" "}
          chain mechanism to cater to our client’s requirement. Key product
          under our current ambit are
        </Typography>
        <Typography
          fontSize={{ xs: "16px", md: "22px" }}
          lineHeight={{ xs: "22px", md: "32px" }}
          fontWeight={600}
          className="font-sora"
          sx={{ color: "#818181", mt: "20px" }}
        >
          We trade Hydro Carbon
        </Typography>
        <ul>
          <li>Products</li>
          <li> Crude Oil</li>
          <li> Condensate</li>
          <li> LPG</li>
          <li> Bitumen</li>
        </ul>
        <Typography
          fontSize={{ xs: "16px", md: "22px" }}
          lineHeight={{ xs: "22px", md: "32px" }}
          fontWeight={600}
          className="font-sora"
          sx={{ color: "#818181", mt: "20px" }}
        >
          We possess offtake understanding from some of the major producers as
          well suppliers and thus able to deliver the products with quality and
          in a cost-effective manner to our buyer segment
        </Typography>
      </Box>
    </>
  );
};
