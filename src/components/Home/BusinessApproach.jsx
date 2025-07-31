import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const BusinessAproach = () => {
  return (
    <>
      <Box>
        <Container maxWidth="xl">
          <Grid container>
            {/* LEFT CONTAINER */}
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                pr: { xs: 0, md: "103px" },
                position: "sticky",
                top: "100px",
                alignSelf: "flex-start",
              }}
            >
              <Typography
                fontWeight={600}
                fontSize={{ xs: "", md: "48px" }}
                lineHeight={{ xs: "", md: "54px" }}
                className="font-sora"
                sx={{ color: "#303A26" }}
              >
                Business Approach
              </Typography>
              <Typography
                fontWeight={400}
                fontSize={{ xs: "", md: "20px" }}
                lineHeight={{ xs: "", md: "27px" }}
                className="font-sora"
                sx={{ color: "#586150", mt: "20px" }}
              >
                We are built on integrity, driven by innovation, and inspired by
                people. With ethical practices and cutting-edge technology, we
                create sustainable value and drive growth.
              </Typography>
            </Grid>
            {/* RIGHT CONTAINER */}
            <Grid item xs={12} md={8} sx={{ pl: { xs: 0, md: "103px" } }}>
              <Grid container>
                <Grid item xs={6} sx={{ pr: { xs: "", md: "62px" } }}>
                  <Grid Container>
                    <Grid item xs={12}>
                      <Box
                        sx={{
                          position: "relative",
                          height: "450px",
                          width: "100%",
                          overflow: "hidden",
                          borderRadius: "7.2px",
                        }}
                      >
                        <Image
                          src={"/images/ba/img1.png"}
                          layout="fill"
                          objectFit="cover"
                          objectPosition="center"
                        />
                      </Box>
                      <Typography
                        fontWeight={600}
                        fontSize={{ xs: "", md: "24px" }}
                        lineHeight={{ xs: "", md: "30px" }}
                        className="font-sora"
                        sx={{ color: "#586150", mt: "14px" }}
                      >
                        Rooted in{" "}
                        <span className="gradient-text-one">
                          ethics and integrity
                        </span>
                        , we thrive by empowering our people, and leveraging
                        technology to drive sustainable growth and success.
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ mt: { xs: "", md: "141px" } }}>
                      <Box
                        sx={{
                          position: "relative",
                          height: "450px",
                          width: "100%",
                          overflow: "hidden",
                          borderRadius: "7.2px",
                        }}
                      >
                        <Image
                          src={"/images/ba/img2.png"}
                          layout="fill"
                          objectFit="cover"
                          objectPosition="center"
                        />
                      </Box>
                      <Typography
                        fontWeight={600}
                        fontSize={{ xs: "", md: "24px" }}
                        lineHeight={{ xs: "", md: "30px" }}
                        className="font-sora"
                        sx={{ color: "#586150", mt: "14px" }}
                      >
                        Our <span className="gradient-text-one">strength</span>{" "}
                        lies in our{" "}
                        <span className="gradient-text-one">people</span>, and
                        through nurturing their{" "}
                        <span className="gradient-text-one">growth</span>, we
                        fuel our ambition and success.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    pl: { xs: "", md: "62px" },
                    mt: { xs: "", md: "356px" },
                  }}
                >
                  <Grid Container>
                    <Grid item xs={12}>
                      <Box
                        sx={{
                          position: "relative",
                          height: "450px",
                          width: "100%",
                          overflow: "hidden",
                          borderRadius: "7.2px",
                        }}
                      >
                        <Image
                          src={"/images/ba/img3.png"}
                          layout="fill"
                          objectFit="cover"
                          objectPosition="center"
                        />
                      </Box>
                      <Typography
                        fontWeight={600}
                        fontSize={{ xs: "", md: "24px" }}
                        lineHeight={{ xs: "", md: "30px" }}
                        className="font-sora"
                        sx={{ color: "#586150", mt: "14px" }}
                      >
                        Built on a foundation of{" "}
                        <span className="gradient-text-one">
                          ethics and integrity
                        </span>
                        , our company thrives on these core values.
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ mt: { xs: "", md: "141px" } }}>
                      <Box
                        sx={{
                          position: "relative",
                          height: "450px",
                          width: "100%",
                          overflow: "hidden",
                          borderRadius: "7.2px",
                        }}
                      >
                        <Image
                          src={"/images/ba/img4.png"}
                          layout="fill"
                          objectFit="cover"
                          objectPosition="center"
                        />
                      </Box>
                      <Typography
                        fontWeight={600}
                        fontSize={{ xs: "", md: "24px" }}
                        lineHeight={{ xs: "", md: "30px" }}
                        className="font-sora"
                        sx={{ color: "#586150", mt: "14px" }}
                      >
                        We use{" "}
                        <span className="gradient-text-one">
                          technology and operational excellence
                        </span>{" "}
                        to drive value, growth, and sustainable profit.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
