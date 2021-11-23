import { Icon } from "semantic-ui-react";
import myImages from "./me.jpeg";

export default function About() {
  return (
    <>
      <div className='row about' id="About">
        <div className='col-sm-12 col-md-5 hover01 col-12'>
          <figure><img alt="" src={myImages} className='profile' /></figure>
        </div>
        <div className='col-sm-12 col-md-6 col-12'>
          <h1>About Me</h1>
          <p>
            Hello, I'm Hilal. As I mentioned in the beginning part, I am a very new frontend developer.
            Let me tell you my story. I graduated from Sakarya University Computer and Instructional Technologies
            department in 2020 as the 3rd in the department. Due to covid-19 during my graduation, I had to teach
            for a short time. But then an important opportunity came my way. I participated in the Front-End Training
            Program at BilgeAdam company for 3 months. During the training process, I developed many projects such as
            RestApi applications, Dynamic websites, Web applications, the technologies used in the projects I developed,
            I explained in detail in the "My Projects" section. After successfully completing the training, I will join
            the Şekerbank team.
          </p>
          <h3>If you want to follow me<br /></h3>
          <div className="effect varrius">
            <div className="social-buttons">
              <a href="https://www.linkedin.com/in/hilal-buyukgullu/" target={"_blank"} className="in" title="Join us on Twitter"><Icon className="linkedin" aria-hidden="true"></Icon></a>
              <a href="https://www.instagram.com/hilalbuyukgullu/" target={"_blank"} className="tw" title="Join us on Instagram In"><Icon className="instagram" aria-hidden="true"></Icon></a>
              <a href="https://github.com/hilalbuyukgullu" target={"_blank"} className="ggithub" title="Join us on Github In"><Icon className="github" aria-hidden="true"></Icon></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
