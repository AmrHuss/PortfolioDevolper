import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, We are <span className="purple">Nexsus Solutions </span>
            from <span className="purple"> Sunderland, England.</span>
            <br />
           We are currently students at Sunderland university.
            <br />
            We are currently in second year our team is a mix up of computer science, Game devolper and Cyber secuirty students.
            <br />
            <br />
            Apart from coding, some other activities that We love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Nexsus</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
