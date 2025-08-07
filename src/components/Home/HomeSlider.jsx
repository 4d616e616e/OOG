import { IMAGES_TOP_CONT } from "@/constant";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const HomeSlider = () => {
  return (
    <>
      <Box sx={{ bgcolor: "#FAFBF9" }}>
        <Container maxWidth="xl">
          <Box sx={{ pt: 4, pb: { xs: 0, md: 4 } }}>
            <Typography
              className="gradient-text-one font-sora"
              fontWeight={700}
              fontSize={{ xs: "26px", sm: "44px", md: "54px", lg: "64px" }}
              textAlign={"center"}
            >
              Driving Innovation and{" "}
            </Typography>
            <Typography
              className="gradient-text-one font-sora"
              fontWeight={700}
              fontSize={{ xs: "26px", sm: "44px", md: "54px", lg: "64px" }}
              textAlign={"center"}
            >
              Integrity In Sustainable{" "}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: { xs: 1.5, lg: 2.5 },
              }}
            >
              <Typography
                className="gradient-text-one font-sora"
                fontWeight={700}
                fontSize={{ xs: "26px", sm: "44px", md: "54px", lg: "64px" }}
                textAlign={"center"}
              >
                Energy
              </Typography>
              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  height: { xs: "30px", sm: "50px", md: "54", lg: "70px" },
                  width: { xs: "30px", sm: "50px", md: "54", lg: "70px" },
                }}
              >
                <Image
                  src={"/images/earth.svg"}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </Box>
              <Typography
                className="gradient-text-one font-sora"
                fontWeight={700}
                fontSize={{ xs: "26px", sm: "44px", md: "54px", lg: "64px" }}
                textAlign={"center"}
              >
                Worldwide
              </Typography>
            </Box>
          </Box>
        </Container>
        <Box
          sx={{
            backgroundImage: `url('/images/hs/arc.svg')`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
            minHeight: { xs: "200px", md: "300px" },
            py: { xs: 5, md: 10 },
          }}
        >
          <Swiper
            breakpoints={{
              1440: { slidesPerView: 2.5 },
              1024: { slidesPerView: 2.2 },
              600: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}
            initialSlide={1}
            spaceBetween={46}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            {IMAGES_TOP_CONT?.map((item, key) => (
              <SwiperSlide key={key}>
                <Box
                  sx={{
                    position: "relative",
                    height: { xs: "200px", md: "280px", lg: "400px" },
                    width: "100%",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={item}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </>
  );
};
