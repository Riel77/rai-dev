import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const FaqComp = () => {
  return (
    <div className="faq" id="faq">
      <Container>
        <Row className="mb-5">
          <Col>
            <h2 className="text-center fw-bold" data-aos="fade-up">
              FAQ
            </h2>
            <p className="text-center" data-aos="fade-up" data-aos-delay="200">
              Pertanyaan-pertanyaan yang biasa ditanyakan
            </p>
          </Col>
        </Row>
        <Row className="row-cols-lg-2 row row-cols-1 g-4">
          <Col data-aos="fade-up" data-aos-delay="400">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Bagaimana Cara Ordernya?</Accordion.Header>
                <Accordion.Body>
                  Membuka menu Order dan memilih paket yang tersedia sesuai
                  kebutuhan, dan jelaskan secara singkat tema website yang ingin
                  dibuat. Tim kami akan memeriksa dan menghubungi Anda untuk
                  proses lebih lanjut.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col data-aos="fade-up" data-aos-delay="500">
            <Accordion>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Jasa apa saja yang tersedia?
                </Accordion.Header>
                <Accordion.Body>
                  Mulai dari UI/UX Design baik itu mockup saja, Front-End dengan
                  ReactJS dan Bootstrap, dan Back-End dengan NodeJS.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col data-aos="fade-up" data-aos-delay="600">
            <Accordion>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Berapa Lama Deadline Pengiriman Project?
                </Accordion.Header>
                <Accordion.Body>
                  Deadline pengerjaan tergantung dari paket yang dipilih dalam
                  menu Order, tiap Paket mempunyai deadline nya masing-masing.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col data-aos="fade-up" data-aos-delay="700">
            <Accordion>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  Berapa Banyak Revisi Yang Bisa Dilakukan?
                </Accordion.Header>
                <Accordion.Body>
                  Revisi tergantung dari paket yang dipilih, mulai dari 1-9x
                  revisi.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col data-aos="fade-up" data-aos-delay="800">
            <Accordion>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  Sudah Beroperasi Berapa Lama?
                </Accordion.Header>
                <Accordion.Body>
                  RAI Dev sudah beroperasi selama 1 Tahun 5 Bulan, mulai dari
                  November 2021
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col data-aos="fade-up" data-aos-delay="900">
            <Accordion>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  Apakah Sudah Terverifikasi Dengan Baik?
                </Accordion.Header>
                <Accordion.Body>
                  Staff dan programmer kami sudah memiliki sertikasi keahlian
                  dalam bidangnya masing-masing, sehingga tidak perlu khawatir
                  mengenai kualitas produk kami.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col data-aos="fade-up" data-aos-delay="1000">
            <Accordion>
              <Accordion.Item eventKey="6">
                <Accordion.Header>Berapa Harganya?</Accordion.Header>
                <Accordion.Body>
                  Harga tergantung dari paket yang dipilih, mulai dari
                  Rp.500.000 sampai dengan harga tertentu tergantung dari paket
                  atau project yang dibuat.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col data-aos="fade-up" data-aos-delay="1100">
            <Accordion>
              <Accordion.Item eventKey="7">
                <Accordion.Header>
                  Bagaimana Jika Pengiriman Project Telat?
                </Accordion.Header>
                <Accordion.Body>
                  Pengiriman telat bisa dikarenakan banyak nya revisi, banyak
                  nya pesanan, namun tim akan memprioritaskan dalam pengerjaan
                  dan mengirimkan project sebelum deadline.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FaqComp;
