import React from 'react';
import ContactHeading from '../components/contactHeading';
import ContactInfo from '../components/contactInfo';
import ContactForm from '../components/contactForm';
import ResponsiveAppBar from '../components/navbar';
import Footer from '../components/footer';
const IndexContact = () => {
    return(
        <>
        <ResponsiveAppBar/>
        <div className=' flex flex-col items-center justify-center bg-[#000000] text-white'>
            <ContactHeading/>
            <div className='container mx-auto p-8 flex justify-between flex-col md:flex-row gap-8 items-start mt-8'>
                <ContactInfo/>
                <ContactForm/>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default IndexContact;