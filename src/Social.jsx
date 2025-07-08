import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode} from "react-icons/si"
function Social(){
    const linkedIn= ()=>{
        window.open("https://www.linkedin.com/in/n-mohamed-mufeed/" ,"_blank" , "noopener, noreferrer")
    }
    const gitHub= ()=>{
        window.open("https://github.com/Mohamed-Mufeed" ,"_blank" , "noopener, noreferrer")
    }
    const leetCode=()=>{
        window.open( "https://leetcode.com/u/Mohamed-Mufeed/","_blank" , "noopener, noreferrer")
    }

    
   return(
    <>
    <div className="socialLinks">
        <button className="linkBtn" onClick={()=> gitHub()} ><FaGithub className="icons" /></button>
        <button className="linkBtn" onClick={()=> linkedIn()} ><FaLinkedin className="icons" /></button>
        <button className="linkBtn" onClick={()=> leetCode()} ><SiLeetcode className="icons" /></button>

    </div>
    </>

);
}
export default Social