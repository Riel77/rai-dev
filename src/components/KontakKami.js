import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const KontakKami = () => {
  return (
    <div className="kontak pb-5 pt-5 d-flex align-items-center justify-content-center">
      <Container>
        <Row className="text-white">
          <Col>
            <h4 className="fw-bold">Kontak Kami</h4>
            <p className="fw-bold">Office & Workshop</p>
            <p>Universitas Pelita Bangsa</p>
            <p>
              Jl. Inspeksi Kalimalang, Tegal Danas Arah Deltanas, Cibatu,
              Cikarang, Kabupaten Bekasi
            </p>
            <p>+62xxx-xxxx-xxxx</p>
          </Col>
          <Col>
            <h4 className="fw-bold">Wilayah Jasa Kami</h4>
            <p>
              Penyedia jasa UI/UX design RAI Dev. Berlokasi di wilayah dengan
              banyak kawasan industri terbesar di Indonesia yaitu Kabupaten
              Bekasi. layanan jasa kami mencakup wilayah Jabodetabek, Karawang,
              dan seluruh Indonesia.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default KontakKami;
