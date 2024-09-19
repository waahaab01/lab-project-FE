import React from 'react';

const AboutSection = ({ imgSrc, name, description, isCentered }) => {
  return (
    <div className={`flex justify-center my-10 px-4 lg:px-20`}>
      <div 
        className={`relative w-full lg:w-4/5 p-5 flex  items-center transition-transform duration-500 ease-in-out
          ${isCentered ? 'transform rotate-2' : 'transform'} 
          hover:scale-105 hover:shadow-2xl`}
      >
        <div 
          className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#191825] via-[#865DFF] to-[#E384FF] opacity-70 rounded-3xl shadow-lg ${isCentered ? 'z-0' : 'z-10'}`}
        ></div>
        <div className={` w-full relative z-10 flex items-center justify-center p-5`}>
          <img 
            src={imgSrc} 
            alt={name} 
            className='w-40 h-40 rounded-full object-cover shadow-lg'
          />
          <div className={`relative mt-5  text-center w-full`}>
            <h2 
              className={`text-2xl font-bold text-center ${isCentered ? 'text-[#FFA3FD]' : 'text-[#E384FF]'} transition-colors duration-500`}
            >
              {name}
            </h2>
            <p 
              className={`text-lg mt-2  text-center${isCentered ? 'text-[#000000]' : 'text-[#FFFFFF]'} transition-colors duration-500`}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
