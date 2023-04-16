import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const FooterComp = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col>
            <h3 className="fw-bold text-white">RAI Dev.</h3>
          </Col>
          <Col className="text-end">
            <i className="fa-brands fa-facebook text-white fs-1 mx-lg-3 mx-2 my-1"></i>
            <i className="fa-brands fa-twitter text-white fs-1 mx-lg-3 mx-2"></i>
            <i className="fa-brands fa-linkedin text-white fs-1 mx-lg-3 mx-2"></i>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center text-white-50">
              &copy; Copyright by RAI Dev 2023, All Right Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComp;
