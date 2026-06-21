import React from 'react';
import Card from '../Card/Card';
import pc from "../../assets/img3.jpg";
import pd from "../../assets/img2.jpg";
import pe from "../../assets/img1.jpg";
import pf from "../../assets/img2.jpg";
import pg from "../../assets/portfolio1.png";
import ph from "../../assets/ai.jpg";
import "./Projects.css";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function Projects() {

  useGSAP(() => {

    gsap.from("#para", {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#para",
        start: "top 80%",
        end: "top 30%",
        scrub: 1
      }
    });

    gsap.from(".card", {
      y: 60,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".slider",
        start: "top 85%",
        end: "top 50%",
        scrub: 1
      }
    });

  }, []);

  return (
    <div id="Projects">

      <h1 id="para">PROJECTS</h1>

      <div className="slider">
        <Card
          title="MY_PORTFOLIO"
          image={pg}
          github="https://github.com/PRIYDARSHANGLBITM/priydarshan-portfolio"
          demo="https://portfolio1-mu-puce.vercel.app/"
        />

        <Card
          title="GAVAI-SWAD"
          image={pd}
          github="#"
          demo="#"
        />

        <Card
          title="CAR RENTAL SYSTEM"
          image={pc}
          github="#"
          demo="#"
        />


        <Card
          title="LIBRARY MANAGEMENT SYSTEM"
          image={pe}
          github="#"
          demo="#"
        />

        <Card
          title="BOX OFFICE"
          image={pf}
          github="#"
          demo="#"
        />

        <Card
          title="AI_RECIPES"
          image={ph}
          github="https://github.com/PRIYDARSHANGLBITM/PDN-AI-RECIPES"
          demo="https://pdn-ai-recipes.vercel.app/"
        />

        

      </div>

    </div>
  );
}

export default Projects;