import { Box, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";

export const AboutUsSliderDesktop = () => {
  return (
    <>
      <Grid container>
        <Grid xs={12} md={6}>
          <Grid container gap={3} sx={{ pl: 7, mt: -2 }}>
            <Grid item xs={12} sx={{ px: 3 }}>
              <Box
                sx={{
                  height: "201px",
                  width: "100%",
                  overflow: "hidden",
                  position: "relative",
                  boxShadow: "0px 2px 5px 0px #0F481880",
                  borderRadius: "8px",
                }}
              >
                <Image
                  src={"/images/auh/img1.png"}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sx={{ px: 3 }}>
              <Box
                sx={{
                  height: "201px",
                  width: "100%",
                  overflow: "hidden",
                  position: "relative",
                  boxShadow: "0px 2px 5px 0px #0F481880",
                  borderRadius: "8px",
                }}
              >
                <Image
                  src={"/images/auh/img2.png"}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={12} md={6}>
          <Grid container gap={3} sx={{ pr: 7, mt: 0 }}>
            <Grid item xs={12} sx={{ px: 3 }}>
              <Box
                sx={{
                  height: "201px",
                  width: "100%",
                  overflow: "hidden",
                  position: "relative",
                  boxShadow: "0px 2px 5px 0px #0F481880",
                  borderRadius: "8px",
                }}
              >
                <Image
                  src={"/images/auh/img3.png"}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sx={{ px: 3 }}>
              <Box
                sx={{
                  height: "201px",
                  width: "100%",
                  overflow: "hidden",
                  position: "relative",
                  boxShadow: "0px 2px 5px 0px #0F481880",
                  borderRadius: "8px",
                }}
              >
                <Image
                  src={"/images/auh/img4.png"}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
