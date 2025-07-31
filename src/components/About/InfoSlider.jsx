import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const InfoSlider = () => {
  const isTablet = useMediaQuery("(max-width:1024px)");
  const isSmallLaptop = useMediaQuery("(max-width:1440px)");
  return (
    <>
      <Swiper
        slidesPerView="auto"
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        style={{
          height: isTablet ? "600px" : isSmallLaptop ? "720px" : "780px",
        }}
      >
        <SwiperSlide style={{ width: "40%" }}>
          <Card
            elevation={0}
            sx={{ py: { md: "90px", lg: "100px", xl: "190px" }, px: "45px" }}
          >
            <CardContent>
              <Typography
                fontSize={{ md: "24px", lg: "36px" }}
                lineHeight={{ md: "30px", lg: "42px" }}
                sx={{ color: "#6E6E73" }}
                className="font-sora"
                fontWeight={600}
              >
                We empower communities by boosting local economies and
                protecting their interests.
              </Typography>
            </CardContent>
          </Card>
        </SwiperSlide>
        <SwiperSlide style={{ width: "70%" }}>
          <Card
            sx={{
              border: "1px solid #0000001A",
              borderRadius: "18px",
              bgcolor: "#FAFAFA",
              py: { md: "90px", lg: "134px", xl: "190px" },
              px: "45px",
            }}
            elevation={0}
          >
            <CardContent>
              <Box>
                <Grid container>
                  <Grid item xs={6} sx={{ pr: "32px" }}>
                    <Typography
                      fontWeight={400}
                      fontSize="24px"
                      lineHeight="30px"
                    >
                      Vision
                    </Typography>
                    <Typography
                      fontWeight={700}
                      className="font-sora"
                      fontSize={{ md: "24px", lg: "32px" }}
                      lineHeight={{ md: "30px", lg: "42px" }}
                    >
                      To become{" "}
                      <span className="gradient-text-one">
                        global energy leaders
                      </span>{" "}
                      with expertise spanning every stage to deployment,
                      delivering energy solutions in a safe and sustainable
                      manner.
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Image
                      src="/images/about/arrows.png"
                      layout="intrinsic"
                      height={1380}
                      width={2070}
                      style={{ borderRadius: "28px" }}
                    />
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </SwiperSlide>
        <SwiperSlide style={{ width: "70%" }}>
          <Card
            sx={{
              border: "1px solid #0000001A",
              borderRadius: "18px",
              bgcolor: "#D7F4D8",
              py: { md: "75px", lg: "90px", xl: "173px" },
              px: "45px",
            }}
            elevation={0}
          >
            <CardContent>
              <Box>
                <Grid container>
                  <Grid item xs={6} sx={{ pr: "12px" }}>
                    <Typography
                      fontWeight={400}
                      fontSize="24px"
                      lineHeight="30px"
                    >
                      Mission
                    </Typography>
                    <Typography
                      fontWeight={700}
                      className="font-sora"
                      fontSize={{ md: "24px", lg: "32px" }}
                      lineHeight={{ md: "30px", lg: "42px" }}
                    >
                      Build and operate{" "}
                      <span className="gradient-text-one">
                        modern petrochemical complexes
                      </span>{" "}
                      while conserving the environment, contributing to local
                      infrastructure, and safely producing to fulfill national
                      ambitions.
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Image
                      src="/images/about/papers.png"
                      layout="intrinsic"
                      height={1380}
                      width={2070}
                      style={{ borderRadius: "28px" }}
                    />
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </SwiperSlide>
        <SwiperSlide style={{ width: "70%" }}>
          <Card
            sx={{
              border: "1px solid #0000001A",
              borderRadius: "18px",
              bgcolor: "#FAFAFA",
              py: { md: "150px", lg: "155px", xl: "173px" },
              px: "45px",
            }}
            elevation={0}
          >
            <CardContent>
              <Box>
                <Grid container>
                  <Grid item xs={6} sx={{ pr: "32px" }}>
                    <Typography
                      fontWeight={400}
                      fontSize="24px"
                      lineHeight="30px"
                    >
                      Focus
                    </Typography>
                    <Typography
                      fontWeight={700}
                      className="font-sora"
                      fontSize={{ md: "24px", lg: "32px" }}
                      lineHeight={{ md: "30px", lg: "42px" }}
                    >
                      Dedicated to achieving our mission through{" "}
                      <span className="gradient-text-one">
                        unwavering commitment
                      </span>{" "}
                      to our vision.
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Image
                      src="/images/about/darts.png"
                      layout="intrinsic"
                      height={1380}
                      width={2070}
                      style={{ borderRadius: "28px" }}
                    />
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
