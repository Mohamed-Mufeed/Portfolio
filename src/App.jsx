import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import { Banner, Resume, About } from "./Body.jsx"
import Project from "./Project.jsx";
import Contact from "./Contact.jsx";

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
      <Footer />
    </>
  );
}

export default App