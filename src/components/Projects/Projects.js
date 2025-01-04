import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Particle from "../Particle";

function Projects() {
  const projectData = [
    {
      imgPath: "src/Assets/Project IMG/Attrition.png",
      title: "Employee Attrition Prediction",
      description:
        "A machine learning model to predict employee attrition using various factors such as job satisfaction, work-life balance, and performance metrics.",
      ghLink: "https://github.com/PremK01/Employee_AttritionPrediction",
    },
    {
      imgPath: "src/Assets/Project IMG/Forgimage.png",
      title: "Forgimage",
      description:
        "A web app for image and PDF conversions: format conversion, resizing, image-to-PDF, and PDF-to-image. Built with Python, Flask, and JavaScript, it ensures secure, user-friendly operations.",
      ghLink: "https://github.com/PremK01/Forgimage",
    },
    {
      imgPath: "src/Assets/Project IMG/portfolio.png",
      title: "Portfolio",
      description:
        "A personal portfolio website showcasing my projects, skills, and contact information. Built with React.js and deployed online.",
      ghLink: "https://github.com/PremK01/portfolio",
    },
  ];

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
          {projectData.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <Card className="project-card-view">
                {project.imgPath && (
                  <Card.Img variant="top" src={project.imgPath} alt={project.title} />
                )}
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button
                    variant="primary"
                    href={project.ghLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
