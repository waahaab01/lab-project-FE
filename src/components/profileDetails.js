import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Import icons from react-icons

const UserDetails = () => {
  const userInfo = [
    { icon: <FaPhoneAlt className="w-6 h-6 text-[#865DFF]" />, label: 'Phone Number', value: '123-456-7890' },
    { icon: <FaEnvelope className="w-6 h-6 text-[#865DFF]" />, label: 'Email', value: 'info@example.com' },
    { icon: <FaMapMarkerAlt className="w-6 h-6 text-[#865DFF]" />, label: 'Address', value: '123 Main St, Anytown, USA' },
  ];

  return (
    <div className="md:ml-6">
      <h2 className="text-2xl font-bold mb-4 text-[#E384FF]">User Details</h2>
      {userInfo.map((info, index) => (
        <div key={index} className="flex items-center mb-4 p-4 border rounded-md shadow-md hover:bg-[#E384FF] hover:text-white transition-all">
          <div className="mr-4">{info.icon}</div>
          <div>
            <p className="font-semibold text-[#fff]">{info.label}:</p>
            <p className=' text-[#fff]'>{info.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserDetails;
