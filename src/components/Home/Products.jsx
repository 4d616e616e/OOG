import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";

export const Products = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  return (
    <>
      <Box
        sx={{
          backgroundImage: `
      url('/images/products/stripes.png'),
     linear-gradient(
    90deg,
    #78bd83 0%,
    #7fd091 22.4%,
    #9bdd83 65.9%,
    #ade988 91.9%
  );
    `,
          backgroundSize: "cover, cover, cover",
          backgroundRepeat: "no-repeat, no-repeat, no-repeat",
          backgroundPosition: "center, center, center",
          my: { xs: "40px", md: "80px" },
          py: "30px",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid container alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                fontWeight={600}
                fontSize={{ xs: "28px", md: "36px", lg: "48px" }}
                lineHeight={{ xs: "29px", md: "40px", lg: "54px" }}
                sx={{ color: "#3F6341", pl: { xs: 0, md: 10 } }}
                className="font-sora"
              >
                We offer a variety of products
              </Typography>
              <Typography
                fontWeight={400}
                fontSize={{ xs: "18px", md: "28px", lg: "32px" }}
                lineHeight={{ xs: "22px", md: "34px", lg: "40px" }}
                sx={{ color: "#3F6341E5", pl: { xs: 0, md: 10 }, mt: "35px" }}
                className="font-sora"
              >
                We trade in quality Hydrocarbon products like:
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                mt: { xs: "56px", md: 0 },
              }}
            >
              {isMobile ? (
                <Image
                  src={"/images/products/img2.png"}
                  layout="intrinsic"
                  width={546}
                  height={213}
                />
              ) : (
                <Image
                  src={"/images/products/img1.png"}
                  layout="intrinsic"
                  width={566}
                  height={500}
                />
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
