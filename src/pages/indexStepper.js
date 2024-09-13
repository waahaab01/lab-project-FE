import * as React from 'react';
import { Box, Typography, Container } from '@mui/material';
import QuestionnaireStepper from '../components/stepper';
import ResponsiveAppBar from '../components/navbar'; 

export default function IndexStepper() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        bgcolor: '#000000',
        color: '#FFFFFF',
      }}
    >
      {/* Navbar */}
      <ResponsiveAppBar />
      <Typography
          variant="h3"
          sx={{
            marginTop:"40px",
            color: "#E384FF",
            marginBottom: "10px",
            textAlign: "center",
          }}
        >
          Questionnaire
        </Typography>
      {/* Main Content */}
      <Container
        sx={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
        }}
      >
        <QuestionnaireStepper />
      </Container>
    </Box>
  );
}
