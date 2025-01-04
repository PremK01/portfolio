import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiWindows,
  SiFigma,
  SiCanva,
  SiGithub, // GitHub added
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <SiWindows size={50} />
        <div style={{ fontSize: "12px", marginTop: "5px" }}>Windows</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <SiVisualstudiocode size={50} />
        <div style={{ fontSize: "12px", marginTop: "5px" }}>Visual Studio Code</div>
      </Col>
  
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <SiGithub size={50} />
        <div style={{ fontSize: "12px", marginTop: "5px" }}>GitHub</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <SiPostman size={50} />
        <div style={{ fontSize: "12px", marginTop: "5px" }}>Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <SiFigma size={50} />
        <div style={{ fontSize: "12px", marginTop: "5px" }}>Figma</div>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <SiCanva size={50} />
        <div style={{ fontSize: "12px", marginTop: "5px" }}>Canva</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
