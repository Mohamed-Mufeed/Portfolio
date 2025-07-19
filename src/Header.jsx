 import { useState} from "react";
import { FaBars, FaTimes } from "react-icons/fa";
function Header() {

    const [link, setLink] = useState(null);
    const[menu, setMenu] = useState(false);

    const toggleMenu =()=>{
        setMenu(!menu);
    };

    
    const getColor = (anchor) => {
        return link === anchor ? "#8b5cf6" : "#e2e8f0";
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
        <>
        <header>
                <div className="header">
                    <ul>
                        <li><a href="#about" onClick={handleScroll("about")} style={{ color: getColor("about") }}>About</a></li>
                        <li><a href="#skill" onClick={handleScroll("skill")} style={{ color: getColor("skill") }}>Skills</a></li>
                        <li><a href="#project" onClick={handleScroll("project")} style={{ color: getColor("project") }}>Projects</a></li>
                        <li><a href="#contact" onClick={handleScroll("contact")} style={{ color: getColor("contact") }}>Contact</a></li>
                    </ul>
                    
                    <div className="hamburger" onClick={toggleMenu} style={{padding: "10px", paddingLeft: "20px"}}>
                    {menu ? <FaTimes size={24} style={{color: "#e2e8f0", transform: "rotate("}}/> : <FaBars size={24} />}</div>

                </div>
        </header>

        <div className="mediaHeader"  style={{transform : menu? "translateX(0px)": "translateX(-210px)", transition: "transform 0.5s ease-in-out"}}>            
            <div className="sideHead">

                <ul>
                    <li><a href="#about" onClick={toggleMenu}>About</a></li>
                    <li><a href="#skill" onClick={toggleMenu}>Skills</a></li>
                    <li><a href="#project" onClick={toggleMenu}>Projects</a></li>
                    <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                </ul>
            </div>
        </div>
        </>
    );
}

function MediaHeader(){
    return(
    <>
        
    </>
    );
}
export {Header, MediaHeader}