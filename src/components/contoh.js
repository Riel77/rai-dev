import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const contoh = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className="text-center">Test</h1>
          </Col>
          <Col>
            <h2 className="text-center fw-bold">test 2</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default contoh;
