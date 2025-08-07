import React, { useEffect, useRef } from "react";
import { Box, Typography, Grid, Container, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { FILL_PATH, IMG_PATH, LINE_PATH } from "@/constant";

export const AnimationOne = () => {
  const containerRef = useRef(null);
  const elementRef = useRef(null);
  const boatOrbitRef = useRef(null);
  const spacerRef = useRef(null);
  const dottedLineRef = useRef(null);

  const isMobile = useMediaQuery("(max-width: 768px)");
  const isSmallLaptop = useMediaQuery("(max-width: 1024px)");

  useEffect(() => {
    const cont = containerRef.current;
    const elem = elementRef.current;
    const boatOrbitContainer = boatOrbitRef.current;
    const dottedLine = dottedLineRef.current;

    if (!cont || !elem || !boatOrbitContainer) {
      console.error("Required elements not found!");
      return;
    }

    let h = 0;
    let top = 0;
    const animationDuration = 1000;
    const totalRotation = 90;

    // Get the dotted line path for animation
    const setupDottedLineAnimation = () => {
      if (dottedLine) {
        const paths = dottedLine.querySelectorAll("path, circle");
        paths.forEach((path) => {
          const pathLength = path.getTotalLength ? path.getTotalLength() : 0;
          if (pathLength > 0) {
            path.style.strokeDasharray = pathLength;
            path.style.strokeDashoffset = pathLength;
            path.style.transition = "none";
          }
        });
      }
    };

    const updateAnimation = (progress) => {
      // Update boat rotation
      const rotation = progress * totalRotation;
      boatOrbitContainer.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;

      // Update dotted line animation
      if (dottedLine) {
        const paths = dottedLine.querySelectorAll("path, circle");
        paths.forEach((path) => {
          const pathLength = path.getTotalLength ? path.getTotalLength() : 0;
          if (pathLength > 0) {
            // Calculate how much of the path should be visible based on progress
            // Since boat rotates 90 degrees, we want the line to appear progressively
            const visibleLength = pathLength * progress;
            path.style.strokeDashoffset = pathLength - visibleLength;
          }
        });
      }
    };

    const handleScroll = () => {
      const y = window.scrollY;
      const start = top;
      const end = start + animationDuration;
      const pinned = y >= start && y < end;
      const ended = y >= end;
      const wasPinned = elem.classList.contains("is-pinned");
      const wasEnded = elem.classList.contains("is-ended");

      const progress =
        y < start ? 0 : y >= end ? 1 : (y - start) / animationDuration;

      requestAnimationFrame(() => updateAnimation(progress));

      if (wasPinned !== pinned) {
        elem.classList.toggle("is-pinned", pinned);
        if (pinned) {
          elem.style.width = `${cont.offsetWidth}px`;
          if (!spacerRef.current) {
            spacerRef.current = document.createElement("div");
            spacerRef.current.style.cssText =
              "width:100%;box-sizing:border-box;display:block";
            spacerRef.current.setAttribute("aria-hidden", "true");
            cont.insertBefore(spacerRef.current, elem);
          }
          spacerRef.current.style.height = `${elem.offsetHeight}px`;
        } else {
          elem.style.width = "";
          if (spacerRef.current) {
            spacerRef.current.style.height = "0";
          }
        }
      }

      if (wasEnded !== ended) {
        elem.classList.toggle("is-ended", ended);
        if (!ended && !pinned) {
          elem.style.position = elem.style.bottom = elem.style.left = "";
        }
      }
    };

    const handleResize = () => {
      requestAnimationFrame(() => {
        h = elem.offsetHeight;
        top = window.scrollY + cont.getBoundingClientRect().top;
        cont.style.height = `${h + animationDuration}px`;
        if (spacerRef.current && elem.classList.contains("is-pinned")) {
          spacerRef.current.style.height = `${h}px`;
        }
        setupDottedLineAnimation();
        handleScroll();
      });
    };

    // Initialize dotted line animation
    setupDottedLineAnimation();

    handleResize();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (spacerRef.current && spacerRef.current.parentNode) {
        spacerRef.current.parentNode.removeChild(spacerRef.current);
      }
    };
  }, []);

  return (
    <Box>
      <Container
        maxWidth="xl"
        ref={containerRef}
        sx={{
          position: "relative",
          overflow: "hidden",
          // border: "2px solid green",
        }}
      >
        <Box
          ref={elementRef}
          className="earth-boat-section"
          sx={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            width: "100%",
            boxSizing: "border-box",
            top: "auto",
            left: "auto",
            bottom: "auto",
            zIndex: 10,
            // border: "1px solid black",
            mx: "auto",
            "&.is-pinned": {
              position: "fixed !important",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              maxWidth: {
                xs: "calc(100% - 32px)",
                sm: "calc(100% - 48px)",
                md: "calc(100% - 48px)",
                lg: "calc(100% - 48px)",
                xl: "1486px",
              },
              width: "100%",
              zIndex: 10,
            },
            "&.is-ended": {
              position: "absolute !important",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              maxWidth: {
                xs: "calc(100% - 32px)",
                sm: "calc(100% - 48px)",
                md: "calc(100% - 48px)",
                lg: "calc(100% - 48px)",
                xl: "1486px",
              },
              width: "100%",
              zIndex: 10,
            },
          }}
        >
          <Box
            sx={{
              backgroundImage: `url('/images/f/img1.png')`,
              backgroundSize: "cover, cover, cover",
              backgroundRepeat: "no-repeat, no-repeat, no-repeat",
              backgroundPosition: "center, center, center",
              borderRadius: "16px",
              pt: { xs: 15, md: 15, lg: 13 },
              pb: { xs: 15, md: 15, lg: 7 },
            }}
          >
            <Grid container display={"flex"} alignItems={"center"}>
              <Grid
                item
                xs={12}
                md={4}
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: 0,
                }}
              >
                {/* Earth Image */}
                <Box
                  sx={{
                    overflow: "hidden",
                    position: "relative",
                    height: { xs: "230px", md: "250px", lg: "420px" },
                    width: { xs: "230px", md: "250px", lg: "420px" },
                  }}
                >
                  <Image
                    src={"/images/f/earth.png"}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    alt="Earth"
                  />
                </Box>

                {/* Static Background Boat */}
                <svg
                  style={{
                    position: "absolute",
                    width: "86px",
                    height: "51px",
                    top: isMobile
                      ? "calc(50% - 174.5px)"
                      : isSmallLaptop
                      ? "calc(50% - 190px)"
                      : "calc(50% - 250px - 25.5px)",
                    left: "calc(50% - 43px)",
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="86"
                  height="51"
                  viewBox="0 0 86 51"
                  fill="none"
                >
                  <path d={IMG_PATH} fill="#B2EAB8" />
                </svg>

                {/* Animated Dotted Lines */}
                <Box
                  ref={dottedLineRef}
                  sx={{
                    position: "absolute",
                    top: isMobile
                      ? "calc(50% - 145px)"
                      : isSmallLaptop
                      ? "calc(50% - 162px)"
                      : "calc(50% - 222px - 25.5px)",
                    left: "calc(50% - -26px)",
                    pointerEvents: "none",
                    // border: "1px solid black",
                  }}
                >
                  <svg
                    width="226"
                    height="226"
                    viewBox="0 0 226 226"
                    fill="none"
                    opacity={isMobile ? 0.8 : 0.4}
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      width: isMobile
                        ? "130px"
                        : isSmallLaptop
                        ? "140px"
                        : "226px",
                      height: isMobile
                        ? "130px"
                        : isSmallLaptop
                        ? "140px"
                        : "226px",
                      // border: "1px solid orange",
                    }}
                  >
                    <path
                      d={LINE_PATH}
                      stroke="#B2EAB8"
                      stroke-width="3"
                      stroke-dasharray="8 8"
                    />
                  </svg>
                </Box>

                {/* Rotating Boat Container */}
                <Box
                  ref={boatOrbitRef}
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "100%",
                    height: "100%",
                    pointerEvents: "none",
                  }}
                  className="boat-orbit-container"
                >
                  <svg
                    className="boat-svg"
                    style={{
                      position: "absolute",
                      width: "86px",
                      height: "51px",
                      top: isMobile
                        ? "calc(50% - 174.5px)"
                        : isSmallLaptop
                        ? "calc(50% - 190px)"
                        : "calc(50% - 250px - 25.5px)",
                      left: "calc(50% - 43px)",
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="86"
                    height="51"
                    viewBox="0 0 86 51"
                    fill="none"
                  >
                    <path d={IMG_PATH} fill="#009205" />
                  </svg>
                  <svg
                    className="boat-svg"
                    style={{
                      position: "absolute",
                      width: "86px",
                      height: "51px",
                      top: isMobile
                        ? "calc(50% - 174.5px)"
                        : isSmallLaptop
                        ? "calc(50% - 190px)"
                        : "calc(50% - 250px - 25.5px)",
                      left: "calc(50% - 43px)",
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="86"
                    height="51"
                    viewBox="0 0 86 51"
                    fill="none"
                  >
                    <path d={FILL_PATH} fill="#defadf" />
                  </svg>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={8}
                sx={{
                  pr: { xs: "30px", md: "56px" },
                  pl: { xs: "30px", md: "100px" },
                  mt: { xs: "70px", md: 0 },
                }}
              >
                <Typography
                  fontWeight={700}
                  fontSize={{ xs: "24px", sm: "30px", md: "36px", lg: "48px" }}
                  lineHeight={{
                    xs: "28px",
                    sm: "40px",
                    md: "46px",
                    lg: "55px",
                  }}
                  sx={{ color: "#3F6341" }}
                  textAlign={{ xs: "center", md: "left" }}
                >
                  Overseas Oil and Gas (OOG) is shaping the future of energy
                  while addressing the needs of its partners and stakeholders.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
