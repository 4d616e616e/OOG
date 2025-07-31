import { Box, Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const MobileAboutPage = () => {
  return (
    <>
      <Typography
        textAlign="center"
        fontSize={{ xs: "20px", sm: "32px" }}
        className="font-sora"
        fontWeight={600}
        sx={{ color: "#6E6E73", mt: "39px" }}
      >
        We empower communities by boosting local economies and protecting their
        interests.
      </Typography>
      <Card
        sx={{
          border: "1px solid #E3E3E3",
          borderRadius: "12px",
          bgcolor: "#F7F7F7",
          mt: "18px",
        }}
        elevation={0}
      >
        <CardContent
          sx={{
            padding: "20px",
            "&:last-child": {
              paddingBottom: "20px",
            },
          }}
        >
          <Typography fontSize={"16px"} className="font-sora">
            Vision
          </Typography>
          <Typography
            fontSize={"20px"}
            lineHeight={"30px"}
            className="font-sora"
            fontWeight={600}
            sx={{ mt: "8px", mb: "18px" }}
          >
            To become{" "}
            <span className="gradient-text-one">global energy leaders</span>{" "}
            with expertise spanning every stage to deployment, delivering energy
            solutions in a safe and sustainable manner.
          </Typography>
          <Box
            sx={{
              height: "238px",
              width: "100%",
              overflow: "hidden",
              position: "relative",
              borderRadius: "18px",
            }}
          >
            <Image
              src="/images/about/arrows.png"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </Box>
        </CardContent>
      </Card>
      <Card
        sx={{
          border: "1px solid #D7F4D8",
          borderRadius: "12px",
          bgcolor: "#DEF4DF",
          my: "26px",
        }}
        elevation={0}
      >
        <CardContent
          sx={{
            padding: "20px",
            "&:last-child": {
              paddingBottom: "20px",
            },
          }}
        >
          <Typography fontSize={"16px"} className="font-sora">
            Mission
          </Typography>
          <Typography
            fontSize={"20px"}
            lineHeight={"30px"}
            className="font-sora"
            fontWeight={600}
            sx={{ mt: "8px", mb: "18px" }}
          >
            Build and operate{" "}
            <span className="gradient-text-one">
              modern petrochemical complexes
            </span>{" "}
            while conserving the environment, contributing to local
            infrastructure, and safely producing to fulfill national ambitions.
          </Typography>
          <Box
            sx={{
              height: "238px",
              width: "100%",
              overflow: "hidden",
              position: "relative",
              borderRadius: "18px",
            }}
          >
            <Image
              src="/images/about/papers.png"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </Box>
        </CardContent>
      </Card>
      <Card
        sx={{
          border: "1px solid #E3E3E3",
          borderRadius: "12px",
          bgcolor: "#F7F7F7",
          mt: "18px",
        }}
        elevation={0}
      >
        <CardContent
          sx={{
            padding: "20px",
            "&:last-child": {
              paddingBottom: "20px",
            },
          }}
        >
          <Typography fontSize={"16px"} className="font-sora">
            Focus
          </Typography>
          <Typography
            fontSize={"20px"}
            lineHeight={"30px"}
            className="font-sora"
            fontWeight={600}
            sx={{ mt: "8px", mb: "18px" }}
          >
            Dedicated to achieving our mission through{" "}
            <span className="gradient-text-one">unwavering commitment</span> to
            our vision.
          </Typography>
          <Box
            sx={{
              height: "238px",
              width: "100%",
              overflow: "hidden",
              position: "relative",
              borderRadius: "18px",
            }}
          >
            <Image
              src="/images/about/darts.png"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </Box>
        </CardContent>
      </Card>
    </>
  );
};
