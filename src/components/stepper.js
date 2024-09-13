import * as React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Box from '@mui/material/Box';
import { useTheme, createTheme, ThemeProvider } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const customTheme = createTheme({
  palette: {
    background: {
      default: '#191825', // Dark purple background
    },
    primary: {
      main: '#865DFF', // Purple for components like inputs or radios
    },
    secondary: {
      main: '#FFA3FD', // Light pink text highlight
    },
    text: {
      primary: '#FFFFFF', // White text
      secondary: '#FFA3FD', // Pink text for special labels or buttons
    },
  },
  typography: {
    h6: {
      color: '#FFA3FD', // Title color
    },
    body1: {
      color: '#FFFFFF', // White body text
    },
  },
});

const questions = [
  {
    question: 'What type of laboratory are you looking for?',
    options: ['Chemistry', 'Physics', 'Biology', 'Other'],
  },
  {
    question: 'What is the purpose of your laboratory?',
    options: ['Research', 'Teaching', 'Industry', 'Other'],
  },
  {
    question: 'How many people will use the laboratory?',
    options: ['1-5', '5-10', '10-20', 'Other'],
  },
  {
    question: 'What specific equipment do you need?',
    options: ['Microscope', 'Centrifuge', 'Spectrometer', 'Other'],
  },
  {
    question: 'Do you have any special requirements?',
    options: ['Yes', 'No', 'Other'],
  },
];

export default function QuestionnaireStepper() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = React.useState(0);
  const [answers, setAnswers] = React.useState(Array(questions.length).fill(''));
  const [customAnswer, setCustomAnswer] = React.useState('');
  const [isOther, setIsOther] = React.useState(false);
  const maxSteps = questions.length;

  const handleNext = () => {
    if (answers[activeStep] !== '') {
      if (activeStep === maxSteps - 1) {
        console.log('User answers:', answers);
        navigate('/aiprodcuts');
      } else {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setIsOther(false);
        setCustomAnswer('');
      }
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleOptionChange = (e) => {
    const value = e.target.value;
    setAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[activeStep] = value;
      return newAnswers;
    });
    setIsOther(value === 'Other');
  };

  const handleCustomAnswerChange = (e) => {
    const value = e.target.value;
    setCustomAnswer(value);
    setAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[activeStep] = value;
      return newAnswers;
    });
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Box
        sx={{
          maxWidth: '100%',
          width: { xs: '90%', sm: '80%', md: '70%', lg: '50%' },
          margin: 'auto',
          flexGrow: 1,
          backgroundColor: customTheme.palette.background.default,
          borderRadius: 4,
          boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.6)',
          overflow: 'hidden',
        }}
      >
        {/* Question Header */}
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 50,
            pl: 2,
            bgcolor: customTheme.palette.primary.main, // Purple background
            color: customTheme.palette.text.primary, // White text
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
          }}
        >
          <Typography variant="h6">
            Question {activeStep + 1} of {maxSteps}
          </Typography>
        </Paper>

        {/* Question and Options Area with Dark Background */}
        <Box sx={{ maxWidth: '100%', p: 3, backgroundColor: '#191825', color: '#FFFFFF', borderBottomLeftRadius: 4, borderBottomRightRadius: 4 }}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {questions[activeStep].question}
          </Typography>
          <FormControl component="fieldset">
            <FormLabel component="legend" sx={{ color: '#FFA3FD' }}>
              Select an option
            </FormLabel>
            <RadioGroup
              value={answers[activeStep]}
              onChange={handleOptionChange}
            >
              {questions[activeStep].options.map((option, index) => (
                <FormControlLabel
                  key={index}
                  value={option}
                  control={<Radio sx={{ color: customTheme.palette.primary.main }} />}
                  label={option}
                  sx={{ color: '#FFFFFF' }} // White text for options
                />
              ))}
            </RadioGroup>
          </FormControl>

          {/* Custom input for "Other" option */}
          {isOther && (
            <TextField
              variant="outlined"
              fullWidth
              value={customAnswer}
              onChange={handleCustomAnswerChange}
              placeholder="Please specify"
              sx={{ 
                mt: 2, 
                backgroundColor: 'transparent', // Transparent background
                color: '#FFFFFF', // White text
                border: '1px solid #865DFF', // Purple border
                '& .MuiInputBase-input': {
                  color: '#FFFFFF', // White text inside the input
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#865DFF', // Purple border when idle
                  },
                  '&:hover fieldset': {
                    borderColor: '#FFA3FD', // Pink border on hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#FFA3FD', // Pink border on focus
                  },
                },
              }}
            />
          )}
        </Box>

        {/* Navigation Buttons */}
        <MobileStepper
          variant="text"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={answers[activeStep] === ''}
              sx={{ color: customTheme.palette.secondary.main, textTransform: 'none' }} // Pink text, no background
            >
              {activeStep === maxSteps - 1 ? 'Finish' : 'Next'}
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
              sx={{ color: customTheme.palette.secondary.main, textTransform: 'none' }} // Pink text, no background
            >
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
          sx={{
            backgroundColor: customTheme.palette.background.default,
          }}
        />
      </Box>
    </ThemeProvider>
  );
}
