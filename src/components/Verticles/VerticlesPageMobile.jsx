import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { ContentOne } from "./ContentOne";
import { ContentTwo } from "./ContentTwo";
import Image from "next/image";

export const VerticlesPageMobile = () => {
  return (
    <Box sx={{ bgcolor: "#F6F7F5", py: "21px" }}>
      <Container maxWidth="xl" sx={{ mb: "37px" }}>
        <Box sx={{ px: { xs: 0.7, md: 1 } }}>
          <Typography
            className="font-sora"
            fontSize={{ xs: "24px", md: "48px" }}
            fontWeight={{ xs: 600, md: 600 }}
            sx={{ color: "#4A4A4A" }}
          >
            <span className="gradient-text-one">Our Business Verticals:</span>{" "}
            Trading, Development & Sustainable Solutions
          </Typography>
        </Box>

        <Grid container>
          <Grid item xs={12} sx={{ pt: "29px" }}>
            <Image
              src={"/images/verticles/img1.png"}
              layout="intrinsic"
              height={419}
              width={777}
              alt="Business Verticals"
            />
          </Grid>
          <Grid item xs={12}>
            <ContentOne />
          </Grid>
          <Grid item xs={12} sx={{ pt: "29px" }}>
            <Image
              src={"/images/verticles/img2.png"}
              layout="intrinsic"
              height={419}
              width={777}
              alt="Business Verticals"
            />
          </Grid>
          <Grid item xs={12} sx={{ px: { xs: 0.7, md: 1.5 } }}>
            <ContentTwo />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
