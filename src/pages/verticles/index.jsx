import { Layout } from "@/components/Layout/Layout";
import { VerticlesPage } from "@/components/Verticles/VerticlesPage";
import { VerticlesPageMobile } from "@/components/Verticles/VerticlesPageMobile";
import React from "react";
import { useMediaQuery } from "@mui/material";

const Index = () => {
  const isMobile = useMediaQuery("(max-width:500px)");

  return (
    <Layout>{isMobile ? <VerticlesPageMobile /> : <VerticlesPage />}</Layout>
  );
};

export default Index;
