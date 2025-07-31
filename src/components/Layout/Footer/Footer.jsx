import { MENUS } from "@/constant";
import {
  ArrowOutwardRounded,
  FacebookRounded,
  Instagram,
  LinkedIn,
  X,
} from "@mui/icons-material";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Box sx={{ pt: "59px", borderTop: "1px solid #303A2614" }}>
        <Container maxWidth="xl">
          <Grid container>
            <Grid item xs={12} md={6}>
              <Typography
                className="font-sora"
                sx={{
                  fontWeight: 600,
                  background:
                    "linear-gradient(90deg, #1E9130 0%, #29B147 22.4%, #58C631 65.9%, #76DA38 91.9%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Overseas Oil and Gas
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "30px", md: "44px" },
                  fontWeight: 600,
                  mt: "8px",
                }}
                className="font-sora"
              >
                Driving Sustainable
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "30px", md: "44px" }, fontWeight: 600 }}
                className="font-sora"
              >
                Energy Solutions
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "30px", md: "44px" }, fontWeight: 600 }}
                className="font-sora"
              >
                Worldwide.
              </Typography>
              <Button
                sx={{
                  textTransform: "none",
                  bgcolor: "#F7F7F6",
                  color: "#586150",
                  pt: "8px",
                  px: "18px",
                  mt: "17px",
                  borderRadius: "26px",
                  "&:hover": {
                    bgcolor: "#F7F7F6",
                    color: "#586150",
                  },
                }}
                className="font-sora"
                endIcon={<ArrowOutwardRounded sx={{ color: "#586150" }} />}
              >
                Learn more
              </Button>
            </Grid>
            <Grid item xs={4} md={2} sx={{ mt: { xs: "34px", md: 0 } }}>
              <Typography
                className="font-sora"
                sx={{ fontWeight: 600, color: "#303A26" }}
              >
                Quick Links
              </Typography>
              <Box sx={{ my: "12px" }}>
                {MENUS?.map((item, key) => (
                  <a href={item.link}>
                    <Typography
                      sx={{ color: "#303A26", lineHeight: "26px" }}
                      className="font-sora"
                    >
                      {item?.name}
                    </Typography>
                  </a>
                ))}
              </Box>
            </Grid>
            <Grid item xs={8} md={3}>
              <Image
                src="/images/location.svg"
                layout="intrinsic"
                height={206}
                width={266}
              />
            </Grid>
          </Grid>
          {/* Contact Box */}
          <Box sx={{ mt: { xs: "", md: "58px" } }}>
            <Box
              sx={{
                borderTop: "1px solid #303A2614",
                display: "flex",
                flexDirection: { xs: "column-reverse", md: "row" },
                alignItems: { xs: "flex-start", md: "center" },
                justifyContent: "space-between",
                pt: "21px",
                pb: "19px",
              }}
            >
              <Box sx={{ mt: { xs: "16px", md: "0" } }}>
                <Typography className="font-sora" fontSize="12px">
                  ©{currentYear} Overseas Oil and Gas LLC
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: { xs: "flex-start", md: "center" },
                  flexDirection: { xs: "column", md: "row" },
                  gap: "16px",
                }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <Typography className="font-sora" fontSize="12px">
                    Contact:
                  </Typography>
                  <a href="tel:+968 2255 8336">
                    <Typography
                      sx={{ color: "#303A26", textDecoration: "underline" }}
                      className="font-sora"
                      fontSize="12px"
                    >
                      +968 2255 8336
                    </Typography>
                  </a>
                  <a href="mailto:info@oog.com">
                    <Typography
                      sx={{ color: "#303A26", textDecoration: "underline" }}
                      className="font-sora"
                      fontSize="12px"
                    >
                      info@oog.com
                    </Typography>
                  </a>
                </Box>
                <Box
                  sx={{ display: "flex", gap: "7.5px", alignItems: "center" }}
                >
                  <X sx={{ color: "#303A26" }} fontSize="small" />
                  <Instagram sx={{ color: "#303A26" }} fontSize="small" />
                  <FacebookRounded sx={{ color: "#303A26" }} fontSize="small" />
                  <LinkedIn sx={{ color: "#303A26" }} fontSize="small" />
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
