import React, { useState } from 'react';
import { FaUserTag } from 'react-icons/fa'; // Import only the needed icons

const ProfileHeader = () => {
  const [image, setImage] = useState(null);
  const [showUpload, setShowUpload] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative h-60 w-full bg-gradient-to-r from-[#E384FF] via-[#E384FF] to-[#000]">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative top-36 flex flex-col items-center justify-center h-full text-center text-white">
        <div
          className="relative w-32 h-32 rounded-full border-4 border-white overflow-hidden shadow-lg cursor-pointer hover:opacity-80 transition-opacity duration-300"
          onMouseEnter={() => setShowUpload(true)}
          onMouseLeave={() => setShowUpload(false)}
        >
          <img
            src={image || "default-profile.png"}
            alt="Profile"
            className="w-full h-full object-cover"
          />
          {showUpload && (
            <input
              type="file"
              onChange={handleImageChange}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          )}
        </div>
        <div className="mt-4">
          <h1 className="text-3xl font-bold hover:text-[#FFA3FD] transition-colors duration-300 text-white">
            John Doe
          </h1>
          <p className="text-lg flex  text-white items-center justify-center mt-2 hover:text-[#E384FF] transition-colors duration-300">
            <FaUserTag className="mr-2 text-[#865DFF]" /> Role: Developer
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
