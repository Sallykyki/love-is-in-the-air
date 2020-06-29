import React from "react";
import "./App.scss";
import Hero from "./components/Hero";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MemoriesCard from "./components/MemoriesCard";

function App() {
  return (
    <div className="App">
      <Hero />
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }}>
            <MemoriesCard />
          </Col>
        </Row>
        <Row>
          <Col lg={{ span: 8, offset: 2 }}>
            <MemoriesCard />
          </Col>
        </Row>
        <Row>
          <Col lg={{ span: 8, offset: 2 }}>
            <MemoriesCard />
          </Col>
        </Row>
        <Row>
          <Col lg={{ span: 8, offset: 2 }}>
            <MemoriesCard />
          </Col>
        </Row>
        <Row>
          <Col lg={{ span: 8, offset: 2 }}>
            <MemoriesCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
