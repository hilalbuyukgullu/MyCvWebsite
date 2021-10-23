import React from 'react'
import "./css/about.css"
import images from "./image/me.jpeg"
export default function About() {
  return (
    <>
      <div className='row about'>
        <div className='col-sm-12 col-md-5 hover01'>
          <figure><img alt="" src={images} className='profile' /></figure>
        </div>
        <div className='col-sm-12 col-md-7 about-col'>
          <h1>About Me</h1>
          <p>
            Hello, I'm Hilal. As I mentioned in the beginning part, I am a very new frontend developer. Let me tell you my story. I graduated from Sakarya University Computer and Instructional Technologies department in 2020 as the 3rd in the department. Due to covid-19 during my graduation, I had to teach for a short time. But then an important opportunity came my way. I participated in the Front-End Training Program at BilgeAdam company for 3 months. During the training process, I developed many projects such as RestApi applications, Dynamic websites, Web applications, the technologies used in the projects I developed, I explained in detail in the "My Projects" section. After successfully completing the training, I will join the Şekerbank team.
          </p>
        </div>
      </div>
    </>
  )
}
