import Header from "./Header";
import logo from "./image/person.png"
import mailIcon from "./image/mail-icon.png"
import About from "./About";
import MyProject from "./MyProject";
import MySkill from "./MySkill";
import Contact from "./Contact";
function App() {
  return (
    <>
      <div className='background-img'>
        <Header />
        <div className="home-intro" >
          <div className="home-intro-text typewriter">
            <h1> Who is Hilal?</h1>
            <p>Hello, I'm a Junior Frontend developer who is just at the beginning of the road. Welcome to my personal blog, which I created to introduce myself and give a little information about my projects. If you want to reach me, I leave my e-mail address.</p>
            <div className="intro-mailbox">
            <div className="intro-border">
              <div className="home-intro-mail">
                <img src={mailIcon} style={{ width: 22, paddingBottom: 2 }}></img>
                <h6 className="mail-text">hilal.buyukgullu@gmail.com</h6>
              </div>
            </div>
            </div>
          </div>
          <div>
            <img src={logo} className="intro-img"></img>
          </div>
        </div>
      </div>
      <About></About>
      <MyProject></MyProject>
      <MySkill></MySkill>
      <Contact></Contact>

    </>
  );
}

export default App;
