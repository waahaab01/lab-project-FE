import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import aivideocard from "../assets/videos/aivideo.mp4";
import aivideoposter from "../assets/images/aivideoposter.jpg";
import { useNavigate } from "react-router-dom";

export default function AIVideoGeneratorCard() {
  const navigate = useNavigate();

  const handleGenerateClick = () => {
    navigate("/ai-video-generator");
  };
  return (
    <Card
      sx={{
        maxWidth: { xs: 300, sm: 400, md: 500 },
        height: "100%",
        margin: "20px auto",
        backgroundColor: "#191825",
        color: "#FFFFFF",
        borderRadius: "15px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
        transform: "perspective(1px) translateZ(0)",
        transition: "transform 0.3s ease-in-out",
        ":hover": { transform: "scale(1.05)" },
      }}
    >
      <CardActionArea>
        <video
          width="100%"
          loop
          muted
          autoPlay
          poster={aivideoposter}
          style={{ borderTopLeftRadius: "15px", borderTopRightRadius: "15px" }}
        >
          <source src={aivideocard} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: "#FFA3FD", textAlign: "center", paddingTop: "10px" }}
          >
            AI Video Generator
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#FFFFFF", textAlign: "center", paddingTop: "20px" }}
          >
            Experience the power of AI in generating creative videos. With just
            a click, create visually stunning video clips with AI-driven
            technology.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: "center", paddingTop: "20px" }}>
        <Button
          size="large"
          sx={{
            backgroundColor: "#865DFF",
            color: "#FFFFFF",
            borderRadius: "50px",
            padding: "10px 30px",
            ":hover": { backgroundColor: "#FFA3FD" },
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
          }}
          onClick={handleGenerateClick}
        >
          {" "}
          Generate Video{" "}
        </Button>
      </CardActions>
    </Card>
  );
}
