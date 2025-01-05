import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about2.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 className="neon-text">
              <span className="neon-letter">K</span>
              <span className="neon-letter">N</span>
              <span className="neon-letter">O</span>
              <span className="neon-letter">W</span>
              <span className="neon-space" style={{ margin: "0 20px" }}> </span> {/* Adjust space */}
              <span className="neon-letter purple">M</span>
              <span className="neon-letter purple">E</span>
            </h1>

            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <h1 className="project-heading">
          <strong className="purple">Contact</strong>
        </h1>
        <Row className="justify-content-center">
          <Col md={6} style={{ textAlign: "left" }}>
            <p>
              <strong>Phone:</strong> +91 73587 58056 <br /> <br /> 
              <strong>E-mail:</strong> premprasadk01@gmail.com <br /> <br /> 
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/premk01/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.linkedin.com/in/premk01/
              </a>
              <br /> <br /> 
              <strong>Address:</strong><br />  40/6, Welcome Colony, <br />
              Anna Nagar West, <br />
              Chennai-600101.
            </p>
          </Col>
        </Row>

        <Github />
      </Container>
    </Container>
  );
}

export default About;
