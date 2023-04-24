import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/robot.jpg";
import projImg2 from "../assets/img/webtechhw6.png";
import projImg3 from "../assets/img/cloudComputing.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React from "react";

export const Projects = () => {

  const projects = [
    {
      title: "Tetrix Prizm Robot",
      description: "Various programs compiled from my Embedded Systems class. Used Python and a C-like language in Arduino to communicate with the Robot via Raspberry Pi.",
      imgUrl: projImg1,
    },
    {
      title: "Bootstrap Portfolio",
      description: "Languages: CSS, HTML, JavaScript. Used a bootstrap template to create a mini portfolio",
      imgUrl: projImg2,
    },
    {
      title: "Populations API",
      description: "Using Google App Engine and an API, deployed a mini webpage showcasing country population data",
      imgUrl: projImg3,
    }
  ];

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab One</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab Two</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="first">
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <p>More projects to come!</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}