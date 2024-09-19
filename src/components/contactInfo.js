import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
const ContactInfo = () => {
  const info = [
    {
      icon: <FaPhoneAlt className="w-6 h-6 text-[#000]" />,
      text: "123-456-7890",
    },
    {
      icon: <FaEnvelope className="w-6 h-6 text-[#000]" />,
      text: "info@example.com",
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6 text-[#000]" />,
      text: "123 Main St, Anytown, USA",
    },
  ];
  return (
    <div className=" relative w-full md:w-1/2 p-7 space-y-2 bg-gradient-to-r from-[#865DFF] via-[#E384FF] to-[#FFA3FD] rounded-lg shadow-lg">
        <div className='absolute inset-0  bg-black opacity-30'></div>

      {info.map((item, index) => (
        <div
          key={index}
          className="flex items-center flex-col space-x-4 bg-gradient-to-r from-[#865DFF] via-[#865DFF] to-[#E384FF] opacity-70 p-7 rounded-md shadow-md relative border-[#000000] border-solid border-2"
        >
          {item.icon}
          <span className="text-[#000] mt-2" >{item.text}</span>
        </div>
      ))}
    </div>
  );
};
export default ContactInfo;
