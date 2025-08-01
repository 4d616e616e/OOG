import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const Future = () => {
  return (
    <>
      <Box sx={{ pb: { xs: "40px", md: 26 } }}>
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
              px: { xs: 5, md: 11 },
            }}
          >
            <Grid container sx={{ alignItems: "center" }}>
              <Grid
                item
                xs={12}
                md={4}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    overflow: "hidden",
                    position: "relative",
                    height: { xs: "230px", md: "250px", lg: "400px" },
                    width: { xs: "230px", md: "250px", lg: "400px" },
                  }}
                >
                  <Image
                    src={"/images/f/earth.png"}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={8}
                sx={{
                  pr: { xs: 0, md: "56px" },
                  pl: { xs: 0, md: "100px" },
                  mt: { xs: "35px", md: 0 },
                }}
              >
                <Typography
                  fontWeight={700}
                  fontSize={{ xs: "24px", md: "28px", lg: "48px" }}
                  lineHeight={{ xs: "28px", md: "40px", lg: "55px" }}
                  sx={{ color: "#3F6341" }}
                  textAlign={{ xs: "center", md: "left" }}
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
