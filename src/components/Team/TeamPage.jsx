import React, { useState } from "react";
import { Box, Container, Grid, Modal, Typography } from "@mui/material";
import { TEAMMEMBERS } from "@/constant";
import Image from "next/image";
import { TeamMemberModal } from "./TeamMemberModal";
import { ContactUs } from "./ContactUs";

export const TeamPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [memberData, setMemberData] = useState();

  const handleClick = (item) => {
    setOpenModal(true);
    setMemberData(item);
  };
  return (
    <>
      <Box sx={{ bgcolor: "#F6F7F5", py: "21px" }}>
        <Container maxWidth="xl" sx={{ mb: "37px" }}>
          <Box sx={{ px: { xs: 0.7, md: 1.3 } }}>
            <Typography
              className="font-sora gradient-text-one"
              fontSize={{ xs: "24px", md: "48px" }}
              fontWeight={{ xs: 600, md: 600 }}
            >
              Meet the OOG Team
            </Typography>
            <Typography
              sx={{ color: "#4A4A4A" }}
              fontSize={{ xs: "24px", md: "48px" }}
              fontWeight={{ xs: 600, md: 600 }}
              className="font-sora"
            >
              Driving our mission with passion and expertise
            </Typography>
          </Box>
          <Grid
            container
            rowGap={{ xs: "20px", md: "73px" }}
            sx={{ mt: "27px", mb: "60px" }}
          >
            {TEAMMEMBERS?.map((item, key) => (
              <Grid
                item
                xs={6}
                md={3}
                key={key}
                onClick={() => handleClick(item)}
                sx={{
                  px: { xs: 0.7, md: 1.3 },
                  "&:hover": {
                    cursor: "pointer",
                    "& .name-typography": {
                      background:
                        "linear-gradient(90deg, #1E9130 0%, #29B147 22.4%, #58C631 65.9%, #76DA38 91.9%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    },
                  },
                }}
              >
                <Image
                  src={item.img}
                  layout="intrinsic"
                  height={419}
                  width={419}
                />
                <Typography
                  className="name-typography"
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: "14px", md: "20px" },
                    mt: "12px",
                    mb: "6px",
                  }}
                >
                  {item?.name}
                </Typography>
                <Typography
                  sx={{
                    color: "#71736E",
                    fontWeight: 600,
                    fontSize: { xs: "12px", md: "18px" },
                  }}
                  className="font-sora"
                >
                  {item?.desigination}
                </Typography>
              </Grid>
            ))}
          </Grid>
          <ContactUs />
        </Container>
      </Box>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            width: { xs: "50%", md: "1026px" },
            borderRadius: "6px",
            outline: "none",
          }}
        >
          <TeamMemberModal
            setOpenModal={setOpenModal}
            memberData={memberData}
          />
        </Box>
      </Modal>
    </>
  );
};
