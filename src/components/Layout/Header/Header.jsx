import { MENUS } from "@/constant";
import {
  CloseRounded,
  FacebookRounded,
  Instagram,
  LinkedIn,
  MenuRounded,
  X,
} from "@mui/icons-material";
import { Box, Drawer, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

export const Header = () => {
  const router = useRouter();
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          py: "18px",
          px: { xs: "16px", md: "56px" },
        }}
      >
        <a href="/">
          <Box sx={{ cursor: "pointer" }}>
            <Image
              src="/images/oog_logo.svg"
              layout="intrinsic"
              height={55}
              width={87}
            />
          </Box>
        </a>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: "32px",
          }}
        >
          {MENUS?.map((item, key) => (
            <a href={item.link}>
              <Typography
                sx={{
                  color: "#303A26",
                  fontWeight: router.pathname === item?.link ? 700 : 400,
                  position: "relative",
                  pb: 0.5,
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    height: "3px",
                    width: router.pathname === item?.link ? "100%" : 0,
                    transition: "width 0.3s ease",
                    background: `
        linear-gradient(90deg, rgba(0, 71, 3, 0.75) 5.37%, 
                             rgba(0, 122, 5, 0.75) 54.38%, 
                             rgba(0, 173, 7, 0.75) 92.46%),
        linear-gradient(0deg, rgba(255, 255, 255, 0.2), 
                             rgba(255, 255, 255, 0.2))
      `,
                  },
                  "&:hover": {
                    cursor: "pointer",
                    "&::after": {
                      width: "100%",
                    },
                  },
                }}
              >
                {item?.name}
              </Typography>
            </a>
          ))}
        </Box>
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #CDC7C140",
            borderRadius: "6px",
            height: "34px",
            width: "34px",
          }}
          onClick={() => setOpenDrawer(true)}
        >
          <MenuRounded sx={{ color: "#1C1A17A8" }} />
        </Box>
      </Box>
      {/* Drawer for Mobile */}
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{
          sx: {
            width: "100vw", // Full screen width
            maxWidth: "100vw", // Prevent maxWidth limit
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          },
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              py: "18px",
              px: { xs: "16px", md: "56px" },
            }}
          >
            <Box>
              <Image
                src="/images/oog_logo.svg"
                layout="intrinsic"
                height={55}
                width={87}
              />
            </Box>

            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #CDC7C140",
                borderRadius: "6px",
                height: "34px",
                width: "34px",
              }}
              onClick={() => setOpenDrawer(false)}
            >
              <CloseRounded sx={{ color: "#1C1A17A8" }} />
            </Box>
          </Box>
          <Box sx={{ width: "100%" }}>
            {MENUS?.map((item, key) => (
              <a href={item.link} key={key}>
                <Box
                  sx={{
                    px: 2,
                    pt: "16px",
                    pb: "18px",
                    borderTop: "1px solid #00000014",
                    borderBottom: key === 3 && "1px solid #00000014",
                    background:
                      router.pathname === item?.link &&
                      "linear-gradient(90deg, rgba(30, 145, 48, 0.08) 0%, rgba(41, 177, 71, 0.08) 22.4%, rgba(88, 198, 49, 0.08) 65.9%, rgba(118, 218, 56, 0.08) 91.9%)",
                    "&:hover": {
                      background:
                        "linear-gradient(90deg, rgba(30, 145, 48, 0.08) 0%, rgba(41, 177, 71, 0.08) 22.4%, rgba(88, 198, 49, 0.08) 65.9%, rgba(118, 218, 56, 0.08) 91.9%)",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: "#303A26",
                      fontWeight: router.pathname === item?.link ? 700 : 400,
                      position: "relative",
                      pb: 0.5,

                      width: "fit-content",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        left: 0,
                        bottom: 0,
                        height: "3px",
                        width: router.pathname === item?.link ? "100%" : 0,
                        transition: "width 0.3s ease",
                        background: `
        linear-gradient(90deg, rgba(0, 71, 3, 0.75) 5.37%, 
                             rgba(0, 122, 5, 0.75) 54.38%, 
                             rgba(0, 173, 7, 0.75) 92.46%),
        linear-gradient(0deg, rgba(255, 255, 255, 0.2), 
                             rgba(255, 255, 255, 0.2))
      `,
                      },
                      "&:hover": {
                        fontWeight: 700,
                        cursor: "pointer",
                        "&::after": {
                          width: "100%",
                        },
                      },
                    }}
                    className="font-sora"
                  >
                    {item.name}
                  </Typography>
                </Box>
              </a>
            ))}
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Typography sx={{ color: "#303A26" }} className="font-sora">
              Contact:
            </Typography>
            <a href="tel:+968 2255 8336">
              <Typography
                sx={{ textDecoration: "underline", color: "#303A26" }}
                className="font-sora"
              >
                +968 2255 8336
              </Typography>
            </a>
            <a href="mailto:info@oog.com">
              <Typography
                sx={{ textDecoration: "underline", color: "#303A26" }}
                className="font-sora"
              >
                info@oog.com
              </Typography>
            </a>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              pt: "16px",
              pb: "18px",
            }}
          >
            <X sx={{ color: "#303A26" }} />
            <Instagram sx={{ color: "#303A26" }} />
            <FacebookRounded sx={{ color: "#303A26" }} />
            <LinkedIn sx={{ color: "#303A26" }} />
          </Box>
        </Box>
      </Drawer>
    </>
  );
};
