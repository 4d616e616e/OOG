import { Box, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";

export const AboutUsSliderMobile = () => {
  return (
    <>
      <Box sx={{ mx: -10 }}>
        <Grid container gap={1.2}>
          <Grid xs={12} sx={{ ml: 30, mt: -1 }}>
            <Grid container>
              <Grid item xs={6} sx={{ px: 1 }}>
                <Box
                  sx={{
                    height: { xs: "129px", sm: "170px" },
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
              <Grid item xs={6} sx={{ px: 1 }}>
                <Box
                  sx={{
                    height: { xs: "129px", sm: "170px" },
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
          <Grid xs={12} sx={{ mr: 30, mt: 1 }}>
            <Grid container>
              <Grid item xs={6} sx={{ px: 1 }}>
                <Box
                  sx={{
                    height: { xs: "129px", sm: "170px" },
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
              <Grid item xs={6} sx={{ px: 1 }}>
                <Box
                  sx={{
                    height: { xs: "129px", sm: "170px" },
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
      </Box>
    </>
  );
};
