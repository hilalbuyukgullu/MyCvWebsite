import React from 'react'
import Navbar from './Navbar'
import logo from "./person.png"
import EmailIcon from '@mui/icons-material/Email';

export default function Header() {
  return (
    <div>
      <div className='background-img'>
        <Navbar />
        <div className="home-intro" >
          <div className="home-intro-text typewriter">
            <h1> Who is Hilal?</h1>
            <p>Hello, I'm a Junior Frontend developer who is just at the beginning of the road. Welcome to my personal blog, which I created to introduce myself and give a little information about my projects. If you want to reach me, I leave my e-mail address.</p>
            <div className="intro-mailbox">
            <div className="intro-border">
              <div className="home-intro-mail">
                <EmailIcon/>
                <h6 className="mail-text">hilal.buyukgullu@gmail.com</h6>
              </div>
            </div>
            </div>
          </div>
          <div>
            <img src={logo} className="intro-img" alt=""></img>
          </div>
        </div>
      </div>
    </div>
  )
}
