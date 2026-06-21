import React from 'react';
import "./Card.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Card({ title, image, github, demo }) {
  return (
    <div className="card">

      <img
        src={image}
        alt={title}
        className="card-image"
      />

      <div className="card-content">

        <h2>{title}</h2>

        <p>
          Click below to view source code or live project.
        </p>

        <div className="card-buttons">

          <a href={github} target="_blank" rel="noreferrer">
            <button>
              <FaGithub />
              Code
            </button>
          </a>

          <a href={demo} target="_blank" rel="noreferrer">
            <button>
              <FaExternalLinkAlt />
              Demo
            </button>
          </a>

        </div>

      </div>

    </div>
  );
}

export default Card;