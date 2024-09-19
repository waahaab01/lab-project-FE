import React from 'react';
import vision from '../assets/images/vision.jpg'

const OurVision = () => {
  return (
    <div className="relative w-full min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-r from-[#191825] via-[#865DFF] to-[#E384FF] opacity-70"></div>
      <div className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 lg:px-20 py-5 text-center lg:text-left">
        <div className="lg:w-1/2 p-6">
          <h1 className="text-4xl font-bold text-[#E384FF] mb-4">Our Vision</h1>
          <p className="text-lg text-[#FFFFFF]">
            Our vision is to revolutionize the way people interact with technology, creating innovative solutions that enhance everyday life. We strive to push the boundaries of what's possible, making cutting-edge technology accessible and enjoyable for everyone.
          </p>
        </div>
        <div className="lg:w-1/2 p-6 flex items-center justify-center">
          <img
            src={vision}
            alt="Vision"
            className="w-full max-w-screen-xl h-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default OurVision;

