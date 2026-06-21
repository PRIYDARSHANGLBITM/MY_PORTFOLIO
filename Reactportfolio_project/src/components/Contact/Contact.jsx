import React from 'react';
import con from "../../assets/contact.jpg";
import "./Contact.css";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

function Contact() {

  useGSAP(() => {

    gsap.from(".leftcontact img", {
      x: -100,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".leftcontact",
        scrub: 2,
        start: "top 80%",
        end: "top 30%",
      }
    });

    gsap.from(".contactDetails", {
      y: 100,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".contactDetails",
        scrub: 2,
        start: "top 90%",
        end: "top 40%",
      }
    });

    gsap.from("form", {
      x: 100,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "form",
        scrub: 2,
        start: "top 80%",
        end: "top 30%",
      }
    });

  });

  return (
    <div id="Contact">

      <div className="leftcontact">

        <img src={con} alt="Contact" />

        <div className="contactDetails">

  <h2>Let's Connect</h2>

  <p>
    <FaPhoneAlt className="contactIcon" />
    +91 7268099166
  </p>

  <p>
    <FaEnvelope className="contactIcon" />
    priydarshan12345@gmail.com
  </p>

  <p>
    <FaEnvelope className="contactIcon" />
    cselt2403@glbitm.ac.in
  </p>

  <p>
    <FaMapMarkerAlt className="contactIcon" />
    Gorakhpur, Uttar Pradesh, India
  </p>

  <div className="socials">

    <a
      href="https://github.com/PRIYDARSHANGLBITM"
      target="_blank"
      rel="noreferrer"
    >
      <FaGithub />
      GitHub
    </a>

    <a
      href="https://linkedin.com/in/priy-darshan-10434b329"
      target="_blank"
      rel="noreferrer"
    >
      <FaLinkedin />
      LinkedIn
    </a>

  </div>

</div>

      </div>

      <div className="rightcontact">

        <form
          action="https://formspree.io/f/movljgde"
          method="POST"
        >

          <h2 className="formHeading">Get In Touch</h2>

          

          <input
            name="Username"
            type="text"
            placeholder="Name"
            required
          />

          <input
            name="Email"
            type="email"
            placeholder="Email"
            required
          />

          <textarea
            name="message"
            id="textarea"
            placeholder="Message me"
            required
          ></textarea>

          <button type="submit" id="btn">
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
}

export default Contact;