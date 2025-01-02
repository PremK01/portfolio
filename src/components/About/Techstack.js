import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import { SiDjango, SiPostgresql, SiMysql, SiMicrosoftexcel } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <DiPython size={50} />
        <div style={{ fontSize: "12px", marginTop: "5px" }}>Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <DiJavascript1 size={50} />
        <div style={{ fontSize: "12px", marginTop: "5px" }}>JavaScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <SiDjango size={50} />
        <div style={{ fontSize: "12px", marginTop: "5px" }}>Django</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <DiHtml5 size={50} />
        <div style={{ fontSize: "12px", marginTop: "5px" }}>HTML5</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <DiCss3 size={50} />
        <div style={{ fontSize: "12px", marginTop: "5px" }}>CSS3</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <DiGit size={50} />
        <div style={{ fontSize: "12px", marginTop: "5px" }}>Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <SiPostgresql size={50} />
        <div style={{ fontSize: "12px", marginTop: "5px" }}>PostgreSQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <SiMysql size={50} />
        <div style={{ fontSize: "12px", marginTop: "5px" }}>MySQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <SiMicrosoftexcel size={50} />
        <div style={{ fontSize: "12px", marginTop: "5px" }}>Excel</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <DiNodejs size={50} />
        <div style={{ fontSize: "12px", marginTop: "5px" }}>Node.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <DiReact size={50} />
        <div style={{ fontSize: "12px", marginTop: "5px" }}>React.js</div>
      </Col>
    </Row>
  );
}

export default Techstack;
