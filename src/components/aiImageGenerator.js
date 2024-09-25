import React, { useState, useEffect } from "react";
import { Modal, IconButton } from "@mui/material";
import { ArrowBack, ArrowForward, Close } from "@mui/icons-material";
import axios from "axios";
const AiImageGenerator = () => {
  const [images, setImages] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios.get("")
    .then((response) => {
      setImages(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
  },[])

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleprevious = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const handleNext = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className="bg-[#191825] text-white min-h-screen p-5">
      <h1 className="text-center text-4xl text-[#FFA3FD] font-bold mb-8">
        Ai Generated Images
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {images.map((image, index) => {
          <div key={index} className="text-center">
            <img
              src={image.url}
              alt={`Ai Generated ${index}`}
              className="w-full h-auto rounded-xl shadow-lg cursor-pointer"
              onClick={() => handleImageClick(index)}
            />
          </div>;
        })}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        className="flex justify-center items-center"
      >
        <div className="relative bg-[#191825] p-4 rounded-lg">
          <IconButton
            onClick={handleClose}
            className="absolute top-2 right-2 text-white"
          >
            <Close />
          </IconButton>
          <img
            src={images[selectedImageIndex]?.url}
            alt={`ai generated ${selectedImageIndex}`}
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <div className="flex justify-center mt-4">
            <IconButton
              onClick={handleprevious}
              className="text-white bg-[#865DFF] hover:bg-[#E384FF]"
            >
              <ArrowBack />
            </IconButton>
            <IconButton className="text-white bg-[#865DFF] hover:bg-[#E384FF]" onClick={handleNext}>
                <ArrowForward />
            </IconButton>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default AiImageGenerator;
