import * as React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import AIPPTGeneratorCard from "../components/aiPptCard";
import MultiActionAreaCard from "../components/aiImageCard";
import AIVideoGeneratorCard from "../components/aiVideoCard";
import ResponsiveAppBar from "../components/navbar";
export default function AICardWrapper() {
  return (
    <>
      <ResponsiveAppBar />
      <Container
        sx={{
          backgroundColor: "#121212",
          minHeight: "100vh",
          padding: "40px 20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "#E384FF",
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          Explore AI-Powered Tools
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={4} display="flex">
            <Box sx={{ flex: 1 }}>
              <MultiActionAreaCard />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} display="flex">
            <Box sx={{ flex: 1 }}>
              <AIVideoGeneratorCard />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} display="flex">
            <Box sx={{ flex: 1 }}>
              <AIPPTGeneratorCard />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
