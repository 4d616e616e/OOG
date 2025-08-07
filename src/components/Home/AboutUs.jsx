import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { AboutUsSliderDesktop } from "./Responsive/AboutUsSliderDesktop";
import { AboutUsSliderMobile } from "./Responsive/AboutUsSliderMobile";

export const AboutUs = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <Box>
        <Container
          maxWidth="xl"
          sx={{ mt: { xs: "30px", md: "80px" }, pb: { xs: "40px", md: "0px" } }}
        >
          <Grid container>
            <Grid item xs={12} md={6}>
              <Typography
                fontWeight={400}
                fontSize={{ xs: "18px", lg: "24px" }}
                className="font-sora"
                sx={{ color: "#303A26" }}
              >
                About us
              </Typography>
              <Typography
                fontWeight={700}
                fontSize={{ xs: "32px", lg: "48px" }}
                className="font-sora"
                sx={{ color: "#303A26" }}
              >
                Overseas Oil & Gas
              </Typography>
              <Typography
                fontWeight={400}
                fontSize={{ xs: "16px", md: "20px", lg: "24px" }}
                lineHeight={{ xs: "22px", md: "28px", lg: "30px" }}
                className="font-sora"
                sx={{
                  color: "#586150",
                  mt: { xs: "2.2px", md: "10px", lg: "19px" },
                }}
              >
                Founded in 2010 with the support of the Government of the
                Sultanate of Oman, OVERSEAS OIL & GAS (OOG) is a global leader
                in the energy sector. Headquartered in Oman, OOG specializes in
                hydrocarbon trading, energy project development, and delivering
                large-scale petrochemical solutions to international markets.
              </Typography>
              <Typography
                fontWeight={400}
                fontSize={{ xs: "16px", md: "20px", lg: "24px" }}
                lineHeight={{ xs: "22px", md: "28px", lg: "30px" }}
                className="font-sora"
                sx={{ color: "#586150", mt: { xs: "16px", md: "22px" } }}
              >
                Guided by a commitment to efficiency, transparency, and safety,
                the company committed to building a sustainable global business
                that fosters community impact and trust.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ pl: { xs: 0, md: 10 }, mt: { xs: "36px", md: 0 } }}
            >
              <Box
                sx={{
                  height: { xs: "263px", sm: "340px", md: "410px" },
                  width: "100%",
                  borderRadius: "16px",
                }}
                className="gradient-bg-color"
              >
                {isMobile ? <AboutUsSliderMobile /> : <AboutUsSliderDesktop />}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
