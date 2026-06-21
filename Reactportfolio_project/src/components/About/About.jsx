import React from "react";
import "./About.css";
import Card from "../Card/Card";
import web from "../../assets/img1.jpg";
import java from "../../assets/img2.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { GitHubCalendar } from "react-github-calendar";

gsap.registerPlugin(ScrollTrigger);

function About() {
  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".circle", {
        x: -100,
        duration: 1,
        opacity: 0,
        stagger: 1,
        scrollTrigger: {
          trigger: ".circle",
          scrub: 2,
          start: "top 60%",
          end: "top 30%",
        },
      });

      gsap.from(".aboutdetails h1", {
        x: -100,
        duration: 1,
        opacity: 0,
        stagger: 1,
        scrollTrigger: {
          trigger: ".aboutdetails h1",
          scrub: 2,
          start: "top 60%",
          end: "top 30%",
        },
      });

      gsap.from(".aboutdetails ul", {
        y: 100,
        duration: 1,
        opacity: 0,
        stagger: 1,
        scrollTrigger: {
          trigger: ".aboutdetails ul",
          scrub: 2,
          start: "top 60%",
          end: "top 30%",
        },
      });

      gsap.from(".rightabout", {
        y: 100,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
          trigger: ".rightabout",
          scrub: 2,
          start: "top 60%",
          end: "top 30%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div id="AboutWrapper">
      <div id="About">
        {/* LEFT SECTION */}
        <div className="leftabout">
          <div className="circle-line">
            <div className="circle"></div>
            <div className="line"></div>
            <div className="circle"></div>
            <div className="line"></div>
            <div className="circle"></div>
          </div>

          <div className="aboutdetails">
            <div className="personalinfo">
              <h1>Personal Info</h1>
              <ul>
                <li><span>NAME</span>: PRIY DARSHAN</li>
                <li><span>AGE</span>: 22 YEARS</li>
                <li><span>GENDER</span>: MALE</li>
                <li><span>LANGUAGE KNOWN</span>: ENGLISH & HINDI</li>
              </ul>
            </div>

            <div className="EDUCATION">
              <h1>EDUCATION</h1>
              <ul>
                <li><span>DEGREE</span>: B.TECH</li>
                <li><span>BRANCH</span>: COMPUTER SCIENCE & ENGINEERING</li>
                <li><span>CGPA</span>: 7.57</li>
              </ul>
            </div>

            <div className="Skills">
              <h1>Skills</h1>
              <ul>
                <li><span>LANGUAGE</span> : JAVA</li>
                <li><span>WEB TECHNOLOGY</span> : HTML, CSS, BOOTSTRAP, JAVASCRIPT</li>
                <li><span>TOOLS</span> : Github, VsCode, Intellij, Eclipse IDE</li>
                <li><span>DATABASE</span> : MySQL</li>
                <li><span>CS FUNDAMENTAL</span> : OOPS, DBMS, O.S</li>
              </ul>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="rightabout">

          <div className="leetcode-card">
            <h2>LEETCODE GRAPH</h2>

            <div className="leetcode-inside-card">
              <img
                src="https://leetcard.jacoblin.cool/priydarshan197358?theme=dark&ext=heatmap"
                alt="LeetCode Stats"
              />
            </div>
          </div>

          {/* DSA + GitHub Contribution Card */}
          <div className="dsa-github-card">
            <h2>GITHUB GRAPH</h2>

            <div className="github-inside-card">
              <GitHubCalendar
                username="PRIYDARSHANGLBITM"
                colorScheme="dark"
                blockSize={9}
                blockMargin={3}
                fontSize={11}
              />
            </div>
          </div>
        </div>
      </div>

    </div>

  );
}

export default About;