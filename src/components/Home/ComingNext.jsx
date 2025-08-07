import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export const ComingNext = () => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <Box sx={{ mt: { xs: "40px", md: "105px" } }}>
      <Container maxWidth="xl">
        <Box>
          <Typography
            className="font-sora"
            fontSize={{ xs: "12px", md: "22px" }}
            lineHeight={{ xs: "15px", md: "29px" }}
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
              fontSize={{ xs: "20px", md: "48px" }}
              lineHeight={{ xs: "28px", md: "52px" }}
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
              fontSize={{ xs: "14px", md: "22px" }}
              lineHeight={{ xs: "20px", md: "29px" }}
              sx={{ color: "#303A26", width: "1000px" }}
              textAlign="center"
              fontWeight={400}
            >
              We are currently developing an integrated petrochemical complex in
              Duqm, Sultanate of Oman, which will include an oil refinery with a
              capacity of 300,000 barrels per day.
            </Typography>
          </Box>

          <Box sx={{ mx: { xs: -3, md: 0 } }} ref={componentRef}>
            <Grid
              container
              sx={{
                mt: { xs: "12px", md: "60px", lg: "156px" },
                pb: { xs: "50px", md: "100px" },
              }}
            >
              {/* First Image */}
              <Grid
                item
                xs={4}
                sx={{
                  pl: { xs: 0, md: 3, lg: 10 },
                  pr: { xs: 0.8, md: 3 },
                  py: 6,
                  mt: isVisible ? 0 : "-50px",
                  transition: "margin-top 0.8s ease-in-out",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    height: {
                      xs: "174px",
                      sm: "300px",
                      md: "400px",
                      lg: "470px",
                    },
                    width: "100%",
                    borderRadius: { xs: "7px", md: "20px" },
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

              {/* Second Image */}
              <Grid
                item
                xs={4}
                sx={{
                  p: { xs: 0.8, md: 3, lg: 6 },
                  mt: isVisible ? { xs: "40px", md: "5px" } : "105px",
                  transition: "margin-top 0.8s ease-in-out",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    height: {
                      xs: "174px",
                      sm: "300px",
                      md: "400px",
                      lg: "470px",
                    },
                    width: "100%",
                    borderRadius: { xs: "7px", md: "20px" },
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

              {/* Third Image */}
              <Grid
                item
                xs={4}
                sx={{
                  pr: { xs: 0, md: 3, lg: 10 },
                  pl: { xs: 0.8, md: 3 },
                  py: 6,
                  mt: isVisible ? 0 : "50px",
                  transition: "margin-top 0.8s ease-in-out",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    height: {
                      xs: "174px",
                      sm: "300px",
                      md: "400px",
                      lg: "470px",
                    },
                    width: "100%",
                    borderRadius: { xs: "7px", md: "20px" },
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
        </Box>
      </Container>
    </Box>
  );
};
