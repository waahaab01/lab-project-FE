import React from "react";
import AboutSection from "../components/aboutSection";
import Footer from "../components/footer";
import ResponsiveAppBar from "../components/navbar";
import about1 from '../assets/images/about1.png'
import about2 from '../assets/images/about2.jpg'
import OurVision from "../components/aboutVision";

const IndexAbout = () => {
  return (
    <div className="bg-[#00000] text-white">
        
      <ResponsiveAppBar />
      <h2 className="text-5xl font-bold text-center my-10 text-[#865DFF]">About Us</h2>
      <AboutSection
        name="About"
        description="Hello this is me nice to meet you"
        imgSrc={about1}
        // isCentered={true}
      />
      <AboutSection
      imgSrc={about2}   
        name="Our Vision"
        description="Our vision is to lead the market with cutting-edge technology."
        // isCentered={false}
      />

      <AboutSection
        // imgSrc="https://via.placeholder.com/400"
        name="Our Vision"
        imgSrc={about1}
        description="Our vision is to lead the market with cutting-edge technology."
        // isCentered={true}
      />

      <OurVision 
    //   imgSrc={}
    //   backgroundImg={visionbg}
    visionText="At our company, we aim to revolutionize the industry with cutting-edge technology and unparalleled service. Our vision is to drive innovation and provide solutions that enhance the quality of life."
    />
      <Footer />
    </div>
  );
};

export default IndexAbout;
