import About from "./components/About";
import MyProject from "./components/MyProject";
import MySkill from "./components/MySkill";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollArrow from "./components/Scroll";
import {Helmet} from "react-helmet";

function App(props:any) {
  return (
    <>
      <Helmet>
        <title>{props.location.hash.slice(1)}</title>
      </Helmet>
      <Header/>
      <About/>
      <MyProject/>
      <MySkill/>
      <Contact/>
      <Footer/>
      <ScrollArrow/>
    </>
  );
}

export default App;
