import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const HomeSlider = () => {
  const images = [
    "/images/hs/img1.png",
    "/images/hs/img2.png",
    "/images/hs/img3.png",
    "/images/hs/img4.png",
  ];
  return (
    <>
      <Box sx={{ bgcolor: "#FAFBF9" }}>
        <Container maxWidth="xl">
          <Box sx={{ py: 4 }}>
            <Typography
              className="gradient-text-one font-sora"
              fontWeight={700}
              fontSize={{ xs: "", md: "64px" }}
              lineHeight={{ xs: "", md: "93px" }}
              textAlign={"center"}
            >
              Driving Innovation and{" "}
            </Typography>
            <Typography
              className="gradient-text-one font-sora"
              fontWeight={700}
              fontSize={{ xs: "", md: "64px" }}
              lineHeight={{ xs: "", md: "93px" }}
              textAlign={"center"}
            >
              Integrity In Sustainable{" "}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 2.5,
              }}
            >
              <Typography
                className="gradient-text-one font-sora"
                fontWeight={700}
                fontSize={{ xs: "", md: "64px" }}
                lineHeight={{ xs: "", md: "93px" }}
                textAlign={"center"}
              >
                Energy
              </Typography>
              <Box>
                <Image
                  src={"/images/earth.svg"}
                  layout="intrinsic"
                  height={70}
                  width={70}
                />
              </Box>
              <Typography
                className="gradient-text-one font-sora"
                fontWeight={700}
                fontSize={{ xs: "", md: "64px" }}
                lineHeight={{ xs: "", md: "93px" }}
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
            minHeight: "300px",
            py: 10,
          }}
        >
          <Swiper
            breakpoints={{
              1440: { slidesPerView: 2.5 },
              1024: { slidesPerView: 3 },
              600: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}
            loop={true}
            spaceBetween={46}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            {images?.map((item, key) => (
              <SwiperSlide key={key}>
                <Box
                  sx={{
                    position: "relative",
                    height: "400px",
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
