import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";

import Owner from "../assets/img/team/Owner.jpg";
import Anon from "../assets/img/team/Anon.jpg";

const OurTeam = () => {
  return (
    <div
      className="OurTeam align-items-center mx-auto justify-content-center"
      id="ourteam"
    >
      <Container>
        <Row className="mb-5">
          <Col>
            <h2 className="text-center fw-bold">Our Team</h2>
          </Col>
        </Row>
        <Row className="row-cols-1 d-flex justify-content-center">
          <Col className="text-center d-flex justify-content-center mb-2">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Owner} />
              <Card.Body>
                <Card.Title>Muhamad Ridwan</Card.Title>
                <Card.Header>Owner, Full-Stack Developer</Card.Header>
                <Card.Text>
                  312010026
                  <br />
                  Universitas Pelita Bangsa
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="row-cols-md-2 row-cols-1 d-flex justify-content-center">
          <Col className="text-center d-flex justify-content-center mb-2">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Anon} />
              <Card.Body>
                <Card.Title>Ade Muslim</Card.Title>
                <Card.Header>
                  Content Creator
                  <br /> &nbsp;
                </Card.Header>
                <Card.Text>
                  312010147
                  <br />
                  Universitas Pelita Bangsa
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="text-center d-flex justify-content-center mb-2">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Anon} />
              <Card.Body>
                <Card.Title>Muhammad Ilham Dwi</Card.Title>
                <Card.Header>
                  Content Creator
                  <br /> &nbsp;
                </Card.Header>
                <Card.Text>
                  312010167
                  <br />
                  Universitas Pelita Bangsa
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurTeam;
