import { Close } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const TeamMemberModal = ({ setOpenModal, memberData }) => {
  console.log(memberData, "MEMBER DATATATATAT");
  return (
    <>
      <Box>
        <Box sx={{ display: "flex", flexDirection: "row-reverse", p: "32px" }}>
          <Close
            onClick={() => setOpenModal(false)}
            sx={{ cursor: "pointer" }}
          />
        </Box>
        <Box
          sx={{
            px: "58px",
            pt: "38px",
            pb: { md: "140px", lg: "100px" },
            position: "relative",
          }}
        >
          <Box sx={{ position: "absolute", top: 0 }}>
            <Image
              src={memberData?.img}
              layout="intrinsic"
              height={344}
              width={344}
            />
          </Box>
          <Grid container>
            <Grid xs={4}></Grid>
            <Grid
              sx={{
                position: "relative",
                borderRadius: "8px",
                py: "46px",
                pl: "78px",
                pr: "46px",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  padding: "4px",
                  background:
                    "linear-gradient(90deg, #1E9130 0%, #29B147 22.4%, #58C631 65.9%, #76DA38 91.9%)",
                  borderRadius: "8px",
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  maskComposite: "xor",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  zIndex: -1,
                },
              }}
              xs={8}
            >
              <Typography
                fontSize={{ xs: "", md: "28px", lg: "32px" }}
                lineHeight={{ xs: "", md: "46px" }}
                fontWeight={700}
                className="font-sora"
                sx={{
                  color: "#262626",
                  position: "absolute",
                  top: "-23px", // Half of line height to center on border
                  left: "60px", // Same as container's left padding
                  background: "white", // Background color to hide border behind text
                  px: 2, // Padding left/right for better look
                }}
              >
                {memberData?.name}
              </Typography>
              <Typography
                className="font-sora"
                sx={{ color: "#4A4A4A", mt: 3 }} // Add margin top to compensate for name position
                fontSize={{ xs: "", md: "18px", lg: "22px" }}
                lineHeight={{ xs: "", md: "24px", lg: "30px" }}
                fontWeight={400}
              >
                {memberData?.description}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
