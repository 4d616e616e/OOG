import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const Future = () => {
  return (
    <>
      <Box sx={{ pb: 26 }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              backgroundImage: `url('/images/f/img1.png')`,
              backgroundSize: "cover, cover, cover",
              backgroundRepeat: "no-repeat, no-repeat, no-repeat",
              backgroundPosition: "center, center, center",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              py: 6,
              px: 11,
            }}
          >
            <Grid container sx={{ alignItems: "center" }}>
              <Grid item md={4} sx={{}}>
                <Image
                  src={"/images/f/earth.png"}
                  layout="intrinsic"
                  height={420}
                  width={420}
                />
              </Grid>
              <Grid item md={8} sx={{ pr: "56px", pl: "100px" }}>
                <Typography
                  fontWeight={700}
                  fontSize={{ xs: "", md: "48px" }}
                  lineHeight={{ xs: "", md: "55px" }}
                  sx={{ color: "#3F6341" }}
                >
                  Overseas Oil and Gas (OOG) is shaping the future of energy
                  while addressing the needs of its partners and stakeholders.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};
