import { useState } from "react";
function Header() {

        const [link , setLink] = useState(null);

        const changeColor = (anchor) => {
            setLink(anchor);
        }
        const getColor= (anchor)=>{
            return link === anchor ? "#8b5cf6":"#e2e8f0";
        }

            const handleScroll = (anchor) => (e) => {
    e.preventDefault();
    setLink(anchor);
    const target = document.getElementById(anchor);
    if (target) {
        target.scrollIntoView({ behavior: "smooth" });
    }
    };


    return (
        <header>
            <div className="header">
                <ul>
  <li><a href="#about" onClick={handleScroll("about")} style={{ color: getColor("about") }}>About</a></li>
  <li><a href="#project" onClick={handleScroll("project")} style={{ color: getColor("project") }}>Project</a></li>
  <li><a href="#contact" onClick={handleScroll("contact")} style={{ color: getColor("contact") }}>Contact</a></li>
</ul>

            </div>

        </header>
    );
}
export default Header