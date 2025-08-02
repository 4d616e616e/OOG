import { Close } from "@mui/icons-material";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";

export const TeamMemberModalMobile = ({ setOpenModal, memberData }) => {
  const isSmallScreen = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <Box sx={{ pb: 5 }}>
        <Box sx={{ display: "flex", flexDirection: "row-reverse", p: "32px" }}>
          <Close
            onClick={() => setOpenModal(false)}
            sx={{ cursor: "pointer" }}
          />
        </Box>
        <Box
          sx={{
            px: "12px",
          }}
        >
          <Grid container>
            <Grid
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={memberData?.img}
                layout="intrinsic"
                height={isSmallScreen ? 344 : 300}
                width={isSmallScreen ? 344 : 300}
              />
            </Grid>
            <Grid
              sx={{
                position: "relative",
                borderRadius: "8px",
                px: "17px",
                pt: "170px",
                pb: "20px",
                mt: -20,
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
              xs={12}
            >
              <Typography
                fontSize="24px"
                lineHeight="46px"
                fontWeight={700}
                className="font-sora"
                sx={{
                  color: "#262626",
                }}
              >
                {memberData?.name}
              </Typography>
              <Typography
                className="font-sora"
                sx={{ color: "#4A4A4A", mt: 3 }} // Add margin top to compensate for name position
                fontSize="18px"
                lineHeight="30px"
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
