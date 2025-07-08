import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import { Banner, Resume, About } from "./Body.jsx"
import Project from "./Project.jsx";
import Contact from "./Contact.jsx";
import Social from "./Social.jsx"

function App() {
  return (
    <>
      <div className="appContainer">
        <Header />
        <div className="leftFixed">
          <Banner />
        </div>
        <div className="rightScroll">
          <About />
          <Resume />
          <Project />
        </div>
      </div>
      <Contact />
      <Social/>
      <Footer />
    </>
  );
}

export default App