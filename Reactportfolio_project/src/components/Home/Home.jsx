import React from 'react';
import './Home.css';
import man from '../../assets/MAN1.jpg';
import { Typewriter } from 'react-simple-typewriter';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaDownload } from "react-icons/fa";

function Home() {
  useGSAP(() => {
    let tl1 = gsap.timeline();
    tl1.from(".line1", { y: 100, duration: 1, opacity: 0 });
    tl1.from(".line2", { y: 100, duration: 1, opacity: 0 });
    tl1.from(".line3", { y: 80, duration: 1, opacity: 0 });
    gsap.from(".righthome img", { x: 200, duration: 1, opacity: 0 });
  });

  return (
    <div id="Home">
      <div className="lefthome">
        <div className="homedetails">
          <div className="line1">👋 Hello , I'M</div>
          <div className="line2">PRIY DARSHAN</div>
          <div className="line3">
            <span>
              <Typewriter
                words={[
                  'Java Full Stack Developer',
                  'React Developer' ,
                  'Spring Boot Learner',
                  'DSA Enthusiast' ,
                  'Problem Solver '
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </div>

          <div className="buttonGroup">
            <a
              href="/PRIY_DARSHAN_RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="resumeBtn">
                <FaDownload />
                <span> RESUME </span>
              </button>
            </a>

            <a href="#Contact">
              <button className="contactBtn">HIRE ME</button>
            </a>
          </div>
          <div className="socialIcons">
            <a
              href="https://www.linkedin.com/in/priy-darshan-10434b329/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/PRIYDARSHANGLBITM"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://leetcode.com/u/priydarshan197358/"
              target="_blank"
              rel="noopener noreferrer"
              title="LeetCode"
            >
              <SiLeetcode />
            </a>

          </div>
        </div>
      </div>

      <div className="righthome">
        <img src={man} alt="profile" />
      </div>
      <div className="scrollDown">
        <span>SCROLL</span>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
