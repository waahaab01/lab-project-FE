import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import aivideocard from '../assets/videos/aivideo.mp4'
import aivideoposter from '../assets/images/aivideoposter.jpg'

export default function AIVideoGeneratorCard() {
  return (
    <Card sx={{ maxWidth: { xs: 300, sm: 400, md: 500 },height:'90%', margin: '20px auto', backgroundColor: '#191825', color: '#FFFFFF', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',  transform: 'perspective(1px) translateZ(0)',  transition: 'transform 0.3s ease-in-out',  ':hover': {transform: 'scale(1.05)' }}} >
      <CardActionArea>
        <video  width="100%"loop muted  autoPlay poster={aivideoposter} style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px'}} >
          <source src={aivideocard} type="video/mp4" />  
          Your browser does not support the video tag.
        </video>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ color: '#FFA3FD', textAlign: 'center' }}>
            AI Video Generator
          </Typography>
          <Typography variant="body2" sx={{ color: '#FFFFFF', textAlign: 'center' }}>
            Experience the power of AI in generating creative videos. With just a click, create visually stunning video clips with AI-driven technology.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: 'center', padding:"0px 14px 14px" }}>
        <Button  size="large" sx={{ backgroundColor: '#865DFF', color: '#FFFFFF', borderRadius: '50px', padding: '10px 30px', ':hover': { backgroundColor: '#FFA3FD' }, boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'}}> Generate Video </Button>
      </CardActions>
    </Card>
  );
}
