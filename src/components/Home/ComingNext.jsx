import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const ComingNext = () => {
  return (
    <>
      <Box sx={{ mt: "105px" }}>
        <Container maxWidth="xl">
          <Box>
            <Typography
              className="font-sora"
              fontSize={{ xs: "", md: "22px" }}
              lineHeight={{ xs: "", md: "29px" }}
              sx={{ color: "#303A26" }}
              textAlign="center"
              fontWeight={400}
            >
              WHAT'S COMING NEXT?
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                className="font-sora gradient-text-one"
                fontSize={{ xs: "", md: "48px" }}
                lineHeight={{ xs: "", md: "52px" }}
                textAlign="center"
                fontWeight={600}
                sx={{ width: "900px", mt: "11px", mb: "5.5px" }}
              >
                Grassroot Petrochemical Complex, Sultanate of Oman
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                className="font-sora"
                fontSize={{ xs: "", md: "22px" }}
                lineHeight={{ xs: "", md: "29px" }}
                sx={{ color: "#303A26", width: "1000px" }}
                textAlign="center"
                fontWeight={400}
              >
                We are currently developing an integrated petrochemical complex
                in Duqm, Sultanate of Oman, which will include an oil refinery
                with a capacity of 300,000 barrels per day.
              </Typography>
            </Box>
            <Grid container sx={{ mt: "156px", pb: "100px" }}>
              <Grid item xs={12} md={4} sx={{ pl: 10, pr: 3, py: 6 }}>
                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    height: "470px",
                    width: "100%",
                    borderRadius: "20px",
                    boxShadow: "8px 8px 69.1px 0px #C3F3C5",
                  }}
                >
                  <Image
                    src={"/images/comingnext/img1.png"}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={4} sx={{ p: 6, mt: "105px" }}>
                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    height: "470px",
                    width: "100%",
                    borderRadius: "20px",
                    boxShadow: "8px 8px 69.1px 0px #C3F3C5",
                  }}
                >
                  <Image
                    src={"/images/comingnext/img2.png"}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={4} sx={{ pr: 10, pl: 3, py: 6 }}>
                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    height: "470px",
                    width: "100%",
                    borderRadius: "20px",
                    boxShadow: "8px 8px 69.1px 0px #C3F3C5",
                  }}
                >
                  <Image
                    src={"/images/comingnext/img3.png"}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};
