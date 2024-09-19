import React from 'react';
import ProfileHeader from '../components/profileHeader';
import UserDetails from '../components/profileDetails'; // Assuming you renamed ProfileDetails to UserDetails
import ResponsiveAppBar from '../components/navbar';
import Footer from '../components/footer';
const IndexProfile = () => {
  return (
    <>
    <ResponsiveAppBar/>
    <div className="h-full bg-gradient-to-r from-[#000] via-[#865DFF] to-[#FFA3FD] flex items-center justify-center p-20">
      <div className="bg-[#191825] rounded-lg shadow-lg p-8 flex flex-col md:flex-row w-full max-w-4xl">
        <ProfileHeader />
        <UserDetails /> {/* Make sure this is the correct component name */}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default IndexProfile;
