import { Box, Grid } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export const AboutUsSliderMobile = () => {
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
    <div ref={componentRef}>
      <Box sx={{ mx: -10 }}>
        <Grid container gap={1.2}>
          {/* FIRST ROW */}
          <Grid
            xs={12}
            sx={{
              transform: isVisible
                ? { xs: "translateX(50px)", sm: "translateX(110px)" }
                : { xs: "translateX(100px)", sm: "translateX(200px)" },
              mt: -1,
              transition: "transform 0.8s ease-in-out",
            }}
          >
            <Grid container>
              <Grid
                item
                xs={6}
                sx={{
                  px: 1,
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Box
                  sx={{
                    height: { xs: "129px", sm: "170px" },
                    width: { xs: "148px", sm: "250px" },
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
                    alt="img1"
                  />
                </Box>
              </Grid>
              <Grid item xs={6} sx={{ px: 1 }}>
                <Box
                  sx={{
                    height: { xs: "129px", sm: "170px" },
                    width: { xs: "148px", sm: "250px" },
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
                    alt="img2"
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>

          {/* SECOND ROW */}
          <Grid
            xs={12}
            sx={{
              transform: isVisible
                ? { xs: "translateX(-50px)", sm: "translateX(-110px)" }
                : { xs: "translateX(-100px)", sm: "translateX(-200px)" },
              mt: 1,
              transition: "transform 0.8s ease-in-out",
            }}
          >
            <Grid container>
              <Grid
                item
                xs={6}
                sx={{ px: 1, display: "flex", justifyContent: "flex-end" }}
              >
                <Box
                  sx={{
                    height: { xs: "129px", sm: "170px" },
                    width: { xs: "148px", sm: "250px" },
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
                    alt="img3"
                  />
                </Box>
              </Grid>
              <Grid item xs={6} sx={{ px: 1 }}>
                <Box
                  sx={{
                    height: { xs: "129px", sm: "170px" },
                    width: { xs: "148px", sm: "250px" },
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
                    alt="img4"
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
