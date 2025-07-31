import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const Products = () => {
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
          my: "80px",
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
                fontSize={{ xs: "", md: "48px" }}
                lineHeight={{ xs: "", md: "54px" }}
                sx={{ color: "#3F6341", pl: 10 }}
                className="font-sora"
              >
                We offer a variety of products
              </Typography>
              <Typography
                fontWeight={400}
                fontSize={{ xs: "", md: "32px" }}
                lineHeight={{ xs: "", md: "40px" }}
                sx={{ color: "#3F6341E5", pl: 10, mt: "35px" }}
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
              }}
            >
              <Image
                src={"/images/products/img1.png"}
                layout="intrinsic"
                width={566}
                height={500}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
