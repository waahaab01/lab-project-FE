import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { IconButton } from "@mui/material";
import { ArrowBack, ArrowLeft, ArrowRight, Close } from "@mui/icons-material";

const AIVideoList = () => {
  const [videos, setVideos] = useState([]);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/api/videos")
      .then((response) => {
        setVideos(response.data);
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
      });
  }, []);

  const handleFullScreen = (index) => {
    setCurrentIndex(index);
    setIsFullScreen(true);
  };

  const handlePrevVideo = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  const handleNextVideo = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleExitFullScreen = () => {
    setIsFullScreen(false);
  };

  return (
    <div className="bg-[#191825] text-white min-h-screen p-5 relative">
      <IconButton
        onClick={() => navigate(-1)}
        className="text-white bg-[#865DFF] hover:bg-[#E384FF] m-2"
      >
        <ArrowBack />
      </IconButton>

      <h1 className="text-center text-4xl text-[#FFA3FD] font-bold mb-8">
        AI Generated Videos
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <div key={index} className="text-center">
            <video
              src={video.url}
              controls
              className="w-full h-auto rounded-xl shadow-lg cursor-pointer"
              poster={video.poster}
              onClick={() => handleFullScreen(index)}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>

      {isFullScreen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          <div className="relative w-full h-full flex items-center justify-center">
            <video
              src={videos[currentIndex]?.url}
              controls
              autoPlay
              className="max-w-full max-h-full"
            >
              Your browser does not support the video tag.
            </video>

            <IconButton
              className="absolute left-4 bg-[#865DFF] hover:bg-[#E384FF] text-white"
              onClick={handlePrevVideo}
            >
              <ArrowLeft fontSize="large" />
            </IconButton>

            <IconButton
              className="absolute right-4 bg-[#865DFF] hover:bg-[#E384FF] text-white"
              onClick={handleNextVideo}
            >
              <ArrowRight fontSize="large" />
            </IconButton>

            <IconButton
              className="absolute top-4 right-4 bg-[#865DFF] hover:bg-[#E384FF] text-white"
              onClick={handleExitFullScreen}
            >
              <Close fontSize="large" />
            </IconButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIVideoList;
