import { useState } from "react";
// import { SiJava, SiPython, SiC, SiJavascript } from 'react-icons/si';
// import { FaReact } from 'react-icons/fa';
function Skills() {

    const [isVisible, setVisible] = useState(null);
    
    const skillAssign = [
        { name: "Java", level: "75%" },
        { name: "Python", level: "60%" },
        { name: "C", level: "80%" },
        { name: "JavaScript", level: "75%" },
        { name: "Front-end", level: "45%" },
        { name: "React", level: "45%" },
    ];

    return (
        <>
            <div className="outerSkill" id="skill">
                <h2>Skills</h2>
                <div className="skillContainer">
                    {skillAssign.map((skill, index) =>{

                            if(isVisible === index){
                                var barStyle = {width: skill.level , opacity : "1"};
                                var progBar = {border : "1px solid #8b5cf6"};
                                var outBarStyle = {color : "#e2e8f0", zIndex : "1"};
                                var setSkill = skill.level;
                            }
                            else{
                                var barStyle = {width: "0%" , opacity : "0"};
                                var progBar = {border : "none"};
                                var setSkill = skill.name;
                            }

                            return(
                            <div className="skills" key={index}
                                onMouseEnter={() => setVisible(index)}
                                onMouseLeave={() => setVisible(null)}>
                                <h3 className="skillText" style={outBarStyle}>{setSkill}</h3>
                                <div className="skillProgress" style={progBar}><div style={barStyle}></div></div>
                            </div>
                            );
                    })}

                </div>
            </div>
        </>
    );

}

export default Skills
