import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { IconButton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

const AIPPTList = () => {
  const [ppts, setPpts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/api/ppts")
      .then((response) => setPpts(response.data))
      .catch((error) => console.error("Error fetching PPTs:", error));
  }, []);

  const handleViewPPT = (pptId) => {
    navigate(`/ai-ppts/${pptId}`);
  };

  return (
    <div className="bg-[#191825] text-white min-h-screen p-5">
      <IconButton
        onClick={() => navigate(-1)}
        className="text-white bg-[#865DFF] hover:bg-[#E384FF] m-2"
      >
        <ArrowBack />
      </IconButton>

      <h1 className="text-center text-4xl text-[#FFA3FD] font-bold mb-8">
        AI Generated PPTs
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {ppts.map((ppt) => (
          <div key={ppt.id} className="text-center">
            <img
              src={ppt.thumbnailUrl}
              alt={ppt.title}
              className="w-full h-auto rounded-xl shadow-lg cursor-pointer"
              onClick={() => handleViewPPT(ppt.id)}
            />
            <h2 className="text-lg text-[#FFA3FD] mt-4">{ppt.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIPPTList;
