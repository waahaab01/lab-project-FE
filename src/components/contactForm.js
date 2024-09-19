import React from 'react';
import {TextField,Button} from '@mui/material';
const ContactForm = () => {
    return(
        <div className='w-full md:w-1/2 border-[#E384FF] border-solid border-2 p-8 rounded-lg shadow-lg'>
            <form className='space-y-6'>
                <div>
                    <TextField label="Your Name" variant="outlined" fullWidth InputLabelProps={{style: {color: '#865DFF'}}} sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#865DFF',
                            },
                            '&:hover fieldset': {
                                borderColor: '#E384FF',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#E384FF',
                            },

                        },
                        input:{ color : '#fff'},
                        backgroundColor: '#191825',
                        borderRadius: '6px'
                    }}/>
                </div>
                <div>
                <TextField label="Your Email" variant="outlined" fullWidth InputLabelProps={{style: {color: '#865DFF'}}} sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#865DFF',
                            },
                            '&:hover fieldset': {
                                borderColor: '#E384FF',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#E384FF',
                            },
                        },
                        input:{ color : '#fff'},
                        backgroundColor: '#191825',
                        borderRadius: '6px'
                    }}/>
                </div>
                <div>
                <TextField label="Your Message" variant="outlined" multiline rows={4} fullWidth InputLabelProps={{style: {color: '#865DFF'}}} sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#865DFF',
                            },
                            '&:hover fieldset': {
                                borderColor: '#E384FF',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#E384FF',
                            },
                        },
                        input:{ color : '#fff'},
                        backgroundColor: '#191825',
                        borderRadius: '6px'
                    }}/>
                </div>
                <Button type="submit" fullWidth variant="contained" sx={{backgroundColor:'#E384FF','&:hover':{backgroundColor:"#FFA3FD"}, color:'#fff', padding:'12px', borderRadius:'8px', transition:'all 0.3s ease-in-out'}}>Send Message</Button>
            </form>
        </div>
    )
    
}
export default ContactForm;