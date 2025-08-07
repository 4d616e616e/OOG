//REACT IMPORT
import { AboutUs } from "@/components/Home/AboutUs";
import { BusinessAproach } from "@/components/Home/BusinessApproach";
import { ComingNext } from "@/components/Home/ComingNext";
import { HomeSlider } from "@/components/Home/HomeSlider";
import { Products } from "@/components/Home/Products";
import { Layout } from "@/components/Layout/Layout";
import { AnimationOne } from "@/components/TestAnimation/AnimationOne";
import { Box, useMediaQuery } from "@mui/material";
import React from "react";

export default function Home({}) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <Layout>
        <Box bgcolor={"#FAFBF9"} sx={{ overflow: isMobile && "hidden" }}>
          <HomeSlider />
          <AboutUs />
          <AnimationOne />
          <BusinessAproach />
          <Products />
          <ComingNext />
        </Box>
      </Layout>
    </>
  );
}

export async function getServerSideProps({}) {
  return {
    props: {},
  };
}

// 4d616e616e 54616e64616e
