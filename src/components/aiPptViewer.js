import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IconButton } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

const AIPPTViewer = () => {
  const { pptId } = useParams();
  const [pptPages, setPptPages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch PPT pages from backend
    axios.get(`/api/ppts/${pptId}/pages`) // Update with your backend endpoint
      .then((response) => setPptPages(response.data))
      .catch((error) => console.error('Error fetching PPT pages:', error));
  }, [pptId]);

  return (
    <div className="bg-[#191825] text-white min-h-screen p-5">
      {/* Back button */}
      <IconButton
        onClick={() => navigate(-1)}
        className="text-white bg-[#865DFF] hover:bg-[#E384FF] m-2"
      >
        <ArrowBack />
      </IconButton>

      <h1 className="text-center text-4xl text-[#FFA3FD] font-bold mb-8">
        PPT Viewer
      </h1>

      <div className="flex flex-col items-center">
        {pptPages.map((page, index) => (
          <img
            key={index}
            src={page.imageUrl}
            alt={`PPT Page ${index + 1}`}
            className="w-full max-w-4xl mb-8 rounded-xl shadow-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default AIPPTViewer;
