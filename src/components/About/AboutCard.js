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
            <br />
            I am an engineering graduate open for work, eager to leverage my skills to solve real world problems.
            <br />
            <br />
            I am equipped with front-end skills such as React.js, HTML, CSS, Javascript and back-end skills like
            Python, Django, Flask, SQL, Node.js, Express.Additionally, I am familiar with  UI/UX Design tools
            like Figma and Canva.
            <br />
            <br />
            I completed Bachelor of Engineering (B.E) in Computer Science Engineering at SRM
            Valliammai Engineering College in 2023.
            <br />
            <br />
            I have organised and participated in various technical and non-technical events during my time in 
            college.
            <br />
            <br />
            You can learn more about my educational qualification from the education page and my resume.
            <br />
            <br />
            Apart from coding, there are other activities that I love to do!
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
          <p style={{ textAlign: "justify" }}>
            Feel free to contact me anytime, you can find my details at the bottom.
          </p>
        
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
