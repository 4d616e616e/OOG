import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";
import { InfoSlider } from "./InfoSlider";
import { MobileAboutPage } from "./MobileAboutPage";

export const AboutPage = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  return (
    <>
      <Box>
        <Container maxWidth="xl">
          <Image
            src="/images/about/aboutbg.png"
            layout="intrinsic"
            height={554}
            width={1512}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              mb: "27px",
            }}
          >
            <Box
              sx={{
                bgcolor: "#FFFFFF",
                py: "18px",
                px: { xs: "20px", md: "25px", lg: "50px" },
                borderRadius: { xs: "10px", md: "30px" },
                mt: { xs: -4, md: -10 },
              }}
            >
              <Typography
                fontSize={{ xs: "22px", sm: "40px", md: "60px", lg: "72px" }}
                fontWeight={600}
                sx={{ color: "#1E1F1D" }}
                className="font-sora"
                textAlign={"center"}
              >
                <span className="gradient-text-one">Powering Progress</span>{" "}
                with
              </Typography>
              <Typography
                fontSize={{ xs: "22px", sm: "40px", md: "60px", lg: "72px" }}
                fontWeight={600}
                sx={{ color: "#1E1F1D", mt: { xs: 0, md: -2 } }}
                className="font-sora"
                textAlign={"center"}
              >
                Expertise and Efficiency
              </Typography>
            </Box>
            <Typography
              textAlign={"center"}
              sx={{
                width: { xs: "100%", md: "1031px" },
                color: "#1E1F1D",
                mt: { xs: "22px", md: "48px" },
              }}
              fontWeight={400}
              fontSize={{ xs: "16px", md: "24px" }}
              lineHeight={{ xs: "22px", md: "30px" }}
              className="font-sora"
            >
              Founded in 2010, Overseas Oil & Gas is driven by a commitment to
              efficiency, transparency, and safety. We are dedicated to building
              a sustainable global business that fosters community impact and
              trust.
            </Typography>
          </Box>
          {isMobile ? (
            <Box>
              <MobileAboutPage />
            </Box>
          ) : (
            <Box sx={{ mt: "27px", mb: "165px" }}>
              <InfoSlider />
            </Box>
          )}
        </Container>
      </Box>
    </>
  );
};
