import React from 'react';
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <>
      <h1 className="contact-h1">Contact Us</h1>
      <div className='contact'>
        <div className='contact-form'>
          <form>
            <TextField type="text" id="name" label="Name" variant="outlined" />
            <TextField type="text" id="surname" label="Surname" variant="outlined" />
            <TextField type="email" id="email" label="E-mail" variant="outlined" />
            <TextField id="message" label="Message" multiline rows={4} variant="outlined" />
            <div className='send-button'><Button variant="contained">Send</Button></div>
            <hr />
            <p className="MuiTypography-root MuiTypography-body2 MuiTypography-alignLeft css-1cpso70">By clicking on "Send" you agree to our &nbsp;
            <Link className="MuiBox-root css-9k7nvd" to="">Privacy Policy</Link>, &nbsp;
            <Link className="MuiBox-root css-9k7nvd" to="">Data Policy</Link> and  &nbsp;
            <Link className="MuiBox-root css-9k7nvd" to="">Cookie Policy</Link>.</p>
          </form>
        </div>
      </div>
    </>
  )
}
