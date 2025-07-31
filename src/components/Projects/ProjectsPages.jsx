import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const ProjectsPage = () => {
  const data = [
    {
      heading: "Grassroot Integrated Petrochemical Complex - ",
      location: "Oman",
      content:
        "Duqm, Sultanate of OMAN – OOG is in the process of developing an integrated petrochemical complex including with an Oil refining capacity of 300,000 barrel a day with an estimated CAPEX of US$ 12 BN. The Project has obtained the necessary licenses and all ingredients for setting up a world class petrochemical complex is organized The Complex is planned to Complete by 2025 Q4.",
      img: "/images/img1.png",
    },
    {
      heading: "Grassroot Integrated Petrochemical Complex - ",
      location: "Indonesia",
      content:
        "Similarly, OOG is developing a grass root integrated Petrochemical complex in INDONESIA at Kalimantan region with an Oil refining capacity of 300,000 barrel a day with an estimated CAPEX of US$ 12 BN. The Project has obtained the necessary licenses and all ingredients for setting up a world class petrochemical complex is organized. The Complex is Scheduled to Complete by 2025 Q4 and is now at the FEED stage",
      img: "/images/img2.png",
    },
  ];
  return (
    <>
      <Box sx={{ bgcolor: "#F6F7F5" }}>
        <Box sx={{ position: "relative" }}>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: { xs: "100px", md: "303px" },
              width: "100%",
              overflow: "hidden",
            }}
          >
            <Image
              src="/images/projects/arc.svg"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </Box>
          <Box
            sx={{
              bgcolor: "#FFFFFF",
              borderRadius: { xs: "10px", md: "27px" },
              padding: { xs: "6px 8px", md: "18px 24px" },
              width: "fit-content",
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              bottom: 0,
              whiteSpace: "nowrap",
            }}
          >
            <Typography
              className="font-sora"
              fontSize={{ xs: "28px", sm: "32px", md: "72px" }}
              lineHeight={{ xs: "35px", sm: "40px", md: "96px" }}
              fontWeight={600}
              sx={{ color: "#4A4A4A" }}
            >
              Pioneering{" "}
              <span className="gradient-text-one font-sora">Sustainable</span>
            </Typography>
            <Typography
              className="font-sora"
              fontSize={{ xs: "28px", sm: "32px", md: "72px" }}
              lineHeight={{ xs: "35px", sm: "40px", md: "96px" }}
              fontWeight={600}
              sx={{ color: "#4A4A4A" }}
            >
              <span className="gradient-text-one font-sora">Growth</span> and
              Innovation
            </Typography>
          </Box>
        </Box>
        <Container
          maxWidth="xl"
          sx={{
            pt: { xs: "22px", md: "101px" },
            pb: { xs: "73px", md: "101px" },
          }}
        >
          <Grid container>
            {/* Content CONT */}
            <Grid
              item
              xs={12}
              lg={6}
              sx={{ pr: { xs: 0, lg: "51px", xl: "71px" } }}
            >
              <Typography
                fontSize={{ xs: "24px", md: "48px" }}
                lineHeight={{ xs: "30px", md: "56px" }}
                fontWeight={400}
                className="font-sora"
                sx={{ color: "#1A3F1C" }}
              >
                {data[0]?.heading}
              </Typography>
              <Typography
                fontSize={{ xs: "24px", md: "48px" }}
                lineHeight={{ xs: "30px", md: "56px" }}
                fontWeight={600}
                className="font-sora"
                sx={{
                  background:
                    "linear-gradient(90deg, #1E9130 0%, #29B147 22.4%, #58C631 65.9%, #76DA38 91.9%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {data[0]?.location}
              </Typography>
              <Typography
                sx={{ color: "#818181", mt: "24px" }}
                fontSize={{ xs: "16px", md: "20px" }}
                lineHeight={{ xs: "29px", lg: "32px" }}
                fontWeight={600}
                className="font-sora"
              >
                {data[0]?.content}
              </Typography>
            </Grid>
            {/* IMG CONT */}
            <Grid
              item
              xs={12}
              lg={6}
              sx={{
                mt: { xs: "32px", lg: "0" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={data[0].img}
                layout="intrinsic"
                height={447}
                width={671}
              />
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              mt: { xs: "76px", md: "105px" },
              flexDirection: { xs: "column-reverse", lg: "row" },
            }}
          >
            {/* IMG CONT */}
            <Grid
              item
              xs={12}
              lg={6}
              sx={{
                mt: { xs: "32px", lg: "0" },
                display: "flex",
                alignItems: { xs: "center", lg: "flex-start" },
                justifyContent: { xs: "center", lg: "flex-start" },
              }}
            >
              <Image
                src={data[1].img}
                layout="intrinsic"
                height={447}
                width={671}
              />
            </Grid>

            {/* Content CONT */}
            <Grid item xs={12} lg={6} sx={{ ml: { xs: 0, xl: -5 }, pr: 2 }}>
              <Typography
                fontSize={{ xs: "24px", md: "48px" }}
                lineHeight={{ xs: "30px", md: "56px" }}
                fontWeight={400}
                className="font-sora"
                sx={{ color: "#1A3F1C" }}
              >
                {data[1]?.heading}
              </Typography>

              <Typography
                fontSize={{ xs: "24px", md: "48px" }}
                lineHeight={{ xs: "30px", md: "56px" }}
                fontWeight={600}
                className="font-sora"
                sx={{
                  background:
                    "linear-gradient(90deg, #1E9130 0%, #29B147 22.4%, #58C631 65.9%, #76DA38 91.9%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {data[1]?.location}
              </Typography>

              <Typography
                sx={{ color: "#818181", mt: "24px" }}
                fontSize={{ xs: "16px", md: "20px" }}
                lineHeight={{ xs: "29px", md: "32px" }}
                fontWeight={600}
                className="font-sora"
              >
                {data[1]?.content}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
