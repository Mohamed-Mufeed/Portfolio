import profile from "./assets/Mufeed-banner.png"
import CV from './assets/CV-updated.pdf'
function Banner() {
    return (
        <>
            <div className="outerBanner">
                <div className="bannerLeft">
                    <h1>I'm Mohamed Mufeed</h1>
                    <h2>Frontend Developer</h2>
                    <p>I build and building interactive web applications</p>
                </div>
            </div>
        </>
    );
}

function About() {
    return (
        <>
            <div className="outerAbout">
                <div className="about">
                    <h2>About</h2>
                    <p>I'm currently studying Information Technology in St. Joseph's College of Engineering. I'm a web developer and a adaptive learner.</p>
                    <p>I've completed multiple front-end projects like portfolios, landing pages, and interactive web apps. I've also completed internships at companies like Codsoft and InternPe, where I built projects including a scientific calculator, e-commerce website, and a Connect Four game.
                        I'm currently deepening my skills in React and exploring full-stack development. I've also completed a course in Machine Learning and love combining tech with practical solutions, such as an AI-based education platform for visually impaired learners.
                        Outside of coding, I enjoy solving algorithmic challenges on LeetCode and have maintained long daily streaks as part of my 100 Days of Code journey.
                        My goal i to become a full-stack developer who builds meaningful and accessible digital experiences.
                    </p>
                </div>
            </div>

        </>
    );
}

function Resume() {
    return (<>
        <div className="resume">
            <h2>Here is my resume. Click to view</h2>
            <button className="resumeBtn" onClick={() => window.open(CV, "_blank")}>Resume</button>
        </div>
    </>);
}
export { Banner, Resume, About }