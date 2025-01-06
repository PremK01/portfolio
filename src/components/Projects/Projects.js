import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Particle from "../Particle";

function Projects() {
  const projectData = [
    {
      imgPath: "",
      title: "Employee Attrition Prediction",
      description:
        "A machine learning model to predict employee attrition using various factors such as job satisfaction, work-life balance, and performance metrics.",
      ghLink: "https://github.com/PremK01/Employee_AttritionPrediction",
      skills: [
        "Logistic Regression",
        "Random Forest",
        "GridSearchCV",
        "PCA",
        "Scikit-learn",
      ],
    },
    {
      imgPath: "",
      title: "Forgimage",
      description:
        "A web app for image and PDF conversions: format conversion, resizing, image-to-PDF, and PDF-to-image. Built with Python, Flask, and JavaScript, it ensures secure, user-friendly operations.",
      ghLink: "https://github.com/PremK01/Forgimage",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Flask",
        "Pillow Library",
      ],
    },
    {
      imgPath: "",
      title: "Portfolio",
      description:
        "The personal portfolio website that you are looking at, showcasing my projects, skills, and contact information. Built with React.js and deployed online.",
      skills: [
        "React.js",
        "Node.js",
        "Express.js",
        "Vercel",
        "CSS3",
      ],
    },
    {
      imgPath: "",
      title: "Chatbot Mini Project",
      description:
        "A GUI-based chat application allowing real-time communication between users. Built using Python's Tkinter module, it provides a simple, intuitive interface and leverages socket programming for seamless client-server communication.",
      skills: [
        "Python",
        "Tkinter",
        "Socket Programming",
        "Threading",
        "TCP/IP Protocols",
      ],
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
                  <Card.Title style={{ color: "#00dfc2", fontWeight: "bold", fontSize: "1.5rem" }}>
                    {project.title}
                  </Card.Title>
                  <Card.Text style={{ textAlign: "justify" }}>
                    {project.description}
                  </Card.Text>
                  <Card.Text>
                    <strong>Technologies Used:</strong>
                    <ul>
                      {project.skills.map((skill, skillIndex) => (
                        <li key={skillIndex}>{skill}</li>
                      ))}
                    </ul>
                  </Card.Text>
                  {project.ghLink && (
                    <Button
                      variant="primary"
                      href={project.ghLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub
                    </Button>
                  )}
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
