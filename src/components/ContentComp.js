import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const ContentComp = () => {
  return (
    <div className="konten min-vh-100 d-flex align-items-center justify-content-center">
      <Container>
        <Row>
          <Col>
            <h2>Jasa Web Design RAI Dev.</h2>
            <p>
              RAI Dev adalah startup bisnis dalam bidang pembuatan UI/UX design,
              Berawal dari Riel Design studio yang didirakan pada bulan November
              2021 oleh Muhamad Ridwan dan berganti nama menjadi RAI Dev pada
              bulan April 2023 dengan menambah 2 orang anggota yaitu Ade Imam,
              dan Ilham. Kami merupakan mahasiswa dari Universitas Pelita Bangsa
              yang dimana saat ini menjadi Universitas paling dilirik di
              Kabupaten Bekasi.
            </p>
            <p>
              Dalam pembuatan UI/UX kami menggunakan figma dalam tahap mockup
              dan prototyping website, kemudian kami menggunakan teknologi
              terbaru dalam pemrograman nya yaitu menggunakan ReactJS,
              Bootstrap, dan CSS untuk Front-End nya dan NodeJS untuk Back-End
              nya.
            </p>
            <p>
              Untuk informasi lebih lengkap mengenai RAI Dev dan jasa lainnya,
              silakan hubungi kami disini.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContentComp;
