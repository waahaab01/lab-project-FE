import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import aiPptCard from '../assets/images/aipptimage.jpg';  

export default function AIPPTGeneratorCard() {
  return (
    <Card
      sx={{ maxWidth: { xs: 300, sm: 400, md: 500 }, height:'90%',margin: '20px auto',  backgroundColor: '#191825', color: '#FFFFFF', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)', overflow: 'hidden',':hover': {transform: 'scale(1.05)'}, transform: 'perspective(1px) translateZ(0)',  transition: 'transform 0.3s ease-in-out', }} >
      <CardActionArea>
        <CardMedia component="img" height="140" image={aiPptCard} alt="AI PPT Generator" sx={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ color: '#FFA3FD', textAlign: 'center' }} > AI PPT Generator </Typography>
            <Typography variant="body2" sx={{ color: '#FFFFFF', textAlign: 'center' }} >
            Effortlessly create professional PowerPoint presentations with AI. Generate visually stunning and content-rich slides in no time.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: 'center', padding: ' 0px 14px 14px ' }}>
        <Button size="large" sx={{ backgroundColor: '#865DFF', color: '#FFFFFF', borderRadius: '50px', padding: '10px 30px', ':hover': { backgroundColor: '#FFA3FD' }, boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)' }} > Generate PPT </Button>
      </CardActions>
    </Card>
  );
}
