import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import Navbar from './Navbar'
import person from "./person.png"

export default function Header() {
  return (
    <div>
      <div className='background-img' id="Home">
        <Navbar />
        <div className="home-intro" >
          <div className="home-intro-text typewriter">
            <h1> Who is Hilal?</h1>
            <p>Hello, I'm a Junior Frontend developer who is just at the beginning of the road. Welcome to my personal blog, which I created to introduce myself and give a little information about my projects. If you want to reach me, I leave my e-mail address.</p>
            <Link to="">
            <div className="intro-mailbox">
            <div className="intro-border">
              <div className="home-intro-mail">
              <Icon name='mail' /> 
                <h6 className="mail-text">Contact Me</h6>
              </div>
            </div>
            </div>
            </Link>
          </div>
          <div>
            <img src={person} className="intro-img" alt="person"></img>
          </div>
        </div>
      </div>
    </div>
  )
}
