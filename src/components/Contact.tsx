import { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Contact() {
const [name, setName] = useState("")
const [surname, setSurname] = useState("")
const [email, setEmail] = useState("")
const [message, setMessage] = useState("")

  function fncSubmit(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const returnMessage = {
      name: name,
      surname: surname,
      email: email,
      message: message
    }
    console.log('returnMessage :>> ', returnMessage);
}

  return (
    <>
      <h1 className="contact-h1" id="Contact">Contact Us</h1>
      <div className='contact'>
        <div className='contact-form'>
          <form onSubmit={(e)=> { fncSubmit(e)}}>
            <TextField onChange={(e)=> setName(e.target.value)} type="text" id="name" label="Name" variant="outlined"  required />
            <TextField onChange={(e)=> setSurname(e.target.value)} type="text" id="surname" label="Surname" variant="outlined"  required />
            <TextField onChange={(e)=> setEmail(e.target.value)} type="email" id="email" label="E-mail" variant="outlined"  required/>
            <TextField onChange={(e)=> setMessage(e.target.value)} id="message" label="Message" multiline rows={4} variant="outlined"  required/>
            <div className='send-button'><Button type="submit" variant="contained">Send</Button></div>
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
