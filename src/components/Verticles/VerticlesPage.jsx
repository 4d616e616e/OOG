import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { ContentOne } from "./ContentOne";
import { ContentTwo } from "./ContentTwo";
import Image from "next/image";

export const VerticlesPage = () => {
  const [activeImage, setActiveImage] = useState("/images/verticles/img1.png");

  const contentOneRef = useRef(null);
  const contentTwoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const oneBox = contentOneRef.current?.getBoundingClientRect();
      const twoBox = contentTwoRef.current?.getBoundingClientRect();

      const oneVisibleHeight = Math.max(
        0,
        Math.min(window.innerHeight, oneBox.bottom) - Math.max(0, oneBox.top)
      );

      const twoVisibleHeight = Math.max(
        0,
        Math.min(window.innerHeight, twoBox.bottom) - Math.max(0, twoBox.top)
      );

      if (oneVisibleHeight > twoVisibleHeight) {
        setActiveImage("/images/verticles/img1.png");
      } else {
        setActiveImage("/images/verticles/img2.png");
      }
    };

    handleScroll(); // initial check
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box sx={{ bgcolor: "#F6F7F5", py: "21px" }}>
      <Container maxWidth="xl" sx={{ mb: "37px" }}>
        <Box sx={{ px: { xs: 0.7, md: 1 } }}>
          <Typography
            className="font-sora"
            fontSize={{ xs: "24px", md: "48px" }}
            fontWeight={{ xs: 600, md: 600 }}
            sx={{ color: "#4A4A4A" }}
          >
            <span className="gradient-text-one">Our Business Verticals:</span>{" "}
            Our Business Verticals: Trading, Development & Sustainable Solutions
          </Typography>
        </Box>

        <Grid container>
          {/* LEFT CONTENT */}
          <Grid item xs={12} md={5} sx={{ px: { xs: 0.7, md: 1.5 } }}>
            <Box ref={contentOneRef} sx={{ mb: 4 }}>
              <ContentOne />
            </Box>
            <Box ref={contentTwoRef}>
              <ContentTwo />
            </Box>
          </Grid>

          {/* STICKY IMAGE */}
          <Grid
            item
            xs={12}
            md={7}
            sx={{
              position: { xs: "static", md: "sticky" },
              top: { md: "100px" },
              alignSelf: "flex-start",
              pl: 2,
              mt: 10,
            }}
          >
            <Image
              src={activeImage}
              layout="intrinsic"
              height={419}
              width={777}
              alt="Business Verticals"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
