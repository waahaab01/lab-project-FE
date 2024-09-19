import React from 'react';
import {FaFacebookF, FaTwitter , FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-10 mt-10">
      <div className="container mx-auto text-center">
        <h3 className="text-2xl font-bold text-[#E384FF]">Stay Connected</h3>
        <p className="mt-2 text-lg text-[#E384FF]">Follow us on our social media for the latest updates.</p>

        <div className="flex justify-center space-x-6 mt-5">
          <a href="#" className="hover:text-[#865DFF] text-[#E384FF]"><FaFacebookF size = {24}/></a>
          <a href="#" className="hover:text-[#865DFF] text-[#E384FF]"><FaTwitter size = {24}/> </a>
          <a href="#" className="hover:text-[#865DFF] text-[#E384FF]"><FaInstagram size = {24}/></a>
          <a href="#" className="hover:text-[#865DFF] text-[#E384FF]"><FaLinkedinIn size= {24}/></a>
        </div>

        <p className="mt-8 text-[#E384FF]">&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
