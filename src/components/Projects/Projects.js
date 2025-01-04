//projects.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="" // Add relevant image path or leave blank
              isBlog={false}
              title="Employee Attrition Prediction"
              description="A machine learning model to predict employee attrition using various factors such as job satisfaction, work-life balance, and performance metrics."
              ghLink="https://github.com/PremK01/Employee_AttritionPrediction"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="" // Add relevant image path or leave blank
              isBlog={false}
              title="Forgimage"
              description="A web app for image and PDF conversions: format conversion, resizing, image-to-PDF, and PDF-to-image. Built with Python, Flask, and JavaScript, it ensures secure, user-friendly operations."
              ghLink="https://github.com/PremK01/Forgimage"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="" // Add relevant image path or leave blank
              isBlog={false}
              title="Portfolio"
              description="A personal portfolio website showcasing my projects, skills, and contact information. Built with React.js and deployed online."
              ghLink="https://github.com/PremK01/portfolio"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
