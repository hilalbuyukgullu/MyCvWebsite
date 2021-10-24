
import About from "./components/About";
import MyProject from "./components/MyProject";
import MySkill from "./components/MySkill";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";

import "./css/about.css"
import "./css/myproject.css";

function App() {
  return (
    <>
      <Header />
      <About />
      <MyProject />
      <MySkill />
      <Contact />
      <Footer />

    </>
  );
}

export default App;
