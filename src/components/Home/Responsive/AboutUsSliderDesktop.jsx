import { Box, Grid } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export const AboutUsSliderDesktop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: Disconnect observer after first trigger
          observer.disconnect();
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of component is visible
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before fully visible
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={componentRef}>
      <Grid container>
        <Grid xs={12} md={6}>
          <Grid
            container
            gap={3}
            sx={{
              pl: 7,
              mt: isVisible ? -1 : -12,
              transition: "margin-top 0.8s ease-in-out",
            }}
          >
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
          <Grid
            container
            gap={3}
            sx={{
              pr: 7,
              mt: isVisible ? -1 : 12,
              transition: "margin-top 0.8s ease-in-out",
            }}
          >
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
    </div>
  );
};
