import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/homemain.png";
import Particle from "../Particle";
import myImg from "../../Assets/avatar1.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      {/* Home Section */}
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header" style={{ textAlign: "left" }}>
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> PREM PRASAD K</strong>
              </h1>
              <br />
              
              <h1 className="heading-name">
                I'M A
                <div className="keyboard">
                {Array.from(" COMPUTER  SCIENCE   GRADUATE").map((char, index) => (
                <span key={index} className={`key key-${index + 1}`}>
                {char === " " ? "\u00A0" : char} {/* Handles spaces properly */}
                </span>
                ))}
                </div>
              </h1>
            </Col>
            
            
            <Col md={5} style={{ paddingBottom: 20, textAlign: "center" }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
            <div className="animated-text">
              <div className="a01">HELLO WORLD</div>
              <div className="a02">HELLO WORLD</div>
              <div className="a03">HELLO WORLD</div>
              <div className="a04">HELLO WORLD</div>
              <br />
              <div className="a01 s1">LETS CONNECT!</div>
              <div className="a02 s1">LETS CONNECT!</div>
              <div className="a03 s1">LETS CONNECT!</div>
              <div className="a04 s1">LETS CONNECT!</div>
            </div>

          </Row>
        </Container>
      </Container>

      {/* Home2 Section (About Me) */}
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description" style={{ textAlign: "left" }}>
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                I’ve developed a strong passion for programming and have made significant progress 
                along the way.
                <br />
                <br />
                I am skilled in both
                <i>
                  <b className="purple"> front-end and back-end technologies. </b>
                </i>
                <br />
                <br />
                I’m particularly interested in building &nbsp;
                <i>
                  <b className="purple">innovative Web Technologies and Products </b> and
                  also in areas related to{" "}
                  <b className="purple">Machine Learning.</b>
                </i>
                <br />
                <br />
                I enjoy working on applications using <b className="purple">Node.js, Express,</b> and
                <i>
                  <b className="purple"> Modern Javascript Libraries and Frameworks</b>
                </i>
                &nbsp; like
                <i>
                  <b className="purple"> React.js .</b>
                </i>
              </p>
            </Col>
            <Col md={4} className="myAvtar" style={{ textAlign: "center" }}>
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social" style={{ textAlign: "center" }}>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links" style={{ textAlign: "center" }}>
                <li className="social-icons">
                  <a
                    href="https://github.com/PremK01"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/premk01/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
