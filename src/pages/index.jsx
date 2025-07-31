//REACT IMPORT
import { AboutUs } from "@/components/Home/AboutUs";
import { BusinessAproach } from "@/components/Home/BusinessApproach";
import { ComingNext } from "@/components/Home/ComingNext";
import { HomeSlider } from "@/components/Home/HomeSlider";
import { Products } from "@/components/Home/Products";
import { Future } from "@/components/Home/Responsive/Future";
import { Layout } from "@/components/Layout/Layout";
import { Box } from "@mui/material";
import React from "react";

export default function Home({}) {
  return (
    <>
      <Layout>
        <Box bgcolor={"#FAFBF9"}>
          <HomeSlider />
          <AboutUs />
          <Future />
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
