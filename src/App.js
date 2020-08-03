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
  Col
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
      <Jumbotron className="text-center">
        <Container>
          <Row>
            <Col></Col>
            <Col xs={6}>
              <h1 className="jumbotron-heading">MalloCat</h1>
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
      <Container>
        <Table source="linkedin"></Table>
        <p>© 2020. All rights reserved.</p>
        <img
          src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Flinkedin-spider.netlify.app"
          alt=""
        />
      </Container>
    </div>
  );
}

export default App;
