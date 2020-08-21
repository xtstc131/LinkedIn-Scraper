import React from "react";
import "./App.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "bootstrap/dist/css/bootstrap.css";
import github_logo from "./imgs/GitHub-Mark-64px.png";

import Table from "./components/table";
import {
  Container,
  Navbar,
  Nav,
  Jumbotron,
  Button,
  Row,
  Col,
  Tabs,
  Tab
} from "react-bootstrap";

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">
          <span role="img" aria-label="logo">
            🐈
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="https://github.com/xtstc131/LinkedIn-Scraper">
              About
            </Nav.Link>
            <Nav.Link href="#home">Contact</Nav.Link>
            <Nav.Link href="https://github.com/xtstc131/LinkedIn-Scraper">
              Contribute
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Jumbotron className="text-center jumbotron">
        <Container>
          <Row>
            <Col></Col>
            <Col xs={6}>
              <h1 className="jumbotron-heading">
                Ha
                <span
                  className="typer"
                  id="main"
                  data-words="great,fun,lightweight,easy"
                  data-delay="100"
                  data-deleteDelay="1000"
                ></span>
                <span className="cursor" data-owner="main"></span>
              </h1>
              <p className="lead ">
                MalloCat is a platform for displaying the latest Software
                Engineer job information to the new graduates. Supported by
                automatic running crawlers targeting on LinkedIn.
              </p>
              <p>
                <Button
                  className="rounded-pill"
                  variant="outline-dark"
                  href="https://github.com/xtstc131/LinkedIn-Scraper"
                >
                  Github
                  <img className="btn_logo" src={github_logo} alt="" />
                </Button>
              </p>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </Jumbotron>
      <hr className="my-4"></hr>
      <div className="content">
        <Container>
          <Tabs>
            <Tab eventKey="linkedin_fulltime" title="Full-time">
              <Table source="linkedin_fulltime"></Table>
            </Tab>
            <Tab eventKey="linkedin_intern" title="Intern">
              <Table source="linkedin_intern"></Table>
            </Tab>
          </Tabs>
          <p>© 2020. All rights reserved.</p>
          <img
            src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Flinkedin-spider.netlify.app"
            alt=""
          />
        </Container>
      </div>
    </div>
  );
}

export default App;
