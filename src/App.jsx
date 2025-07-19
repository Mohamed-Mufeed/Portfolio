import {Header,MediaHeader} from "./Header.jsx";
import Footer from "./Footer.jsx"
import { Banner, Resume, About } from "./Body.jsx"
import Skills from "./Skills.jsx";
import Project from "./Project.jsx";
import Contact from "./Contact.jsx";
import Social from "./Social.jsx"

function App() {
  return (
    <>
      <div className="appContainer">
        <Header />
        <MediaHeader />
        <div className="leftFixed">
          <Banner />
        </div>
        <div className="rightScroll">
          <About />
          <Resume />
          <Skills />
          <Project />
        </div>
      </div>
      <Contact />
      <Social />
      <Footer />
    </>
  );
}

export default App