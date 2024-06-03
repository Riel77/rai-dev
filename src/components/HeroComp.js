import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
const HeroComp = () => {
  return (
    <div className="hero min-vh-100 w-100" id="home">
      <Container>
        <Row>
          <Col>
            <h1 className="text-gray text-center animate__animated animate__fadeInUp">
              RAI Dev.
            </h1>
            <Button variant="outline-primary">Primary</Button>{' '}
            <p className="text-black-50 text-center animate__animated animate__fadeInUp animate__delay-1s">
              Wujudkan website impianmu bersama kami
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroComp;
