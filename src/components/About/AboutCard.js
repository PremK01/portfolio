import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Prem Prasad K </span>
            from <span className="purple"> Chennai, India.</span>
            <br />
            I am an engineering graduate eager to leverage my skills to solve real world problems.
            <br />
            I have completed Bachelor of Engineering (BE) in Computer Science Engineering at SRM
            Valliammai Engineering College.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Fitness and Combat Training 🥊
            </li>
            <li className="about-activity">
              <ImPointRight /> Gaming 🎮 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling 🏍️🛣️
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading 📖
            </li>
          </ul>
          </blockquote>

          
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
