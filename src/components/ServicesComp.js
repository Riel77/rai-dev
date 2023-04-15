import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const servicesComp = () => {
  return (
    <div
      className="services min-vh-100 d-flex align-items-center"
      id="services"
    >
      <Container>
        <Row className="mb-5">
          <Col>
            <h1 className="text-center fw-bold" data-aos="fade-up">
              Services
            </h1>
            <p className="text-center" data-aos="fade-up" data-aos-delay="200">
              Kami berusaha menjadi penyedia layanan 'One Stop Solution' untuk
              kebutuhan website anda. Jasa web design kami sudah termasuk
              Pembuatan, Admin/Maintenance, Promo Website/SEO dan
              Domain/Hosting.
            </p>
          </Col>
        </Row>
        <Row className="row-cols-lg-3 row-cols-md-2 row-cols-1 justify-content-center">
          <Col
            className="text-center py-5 px-3"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <i class="fa-solid fa-coins fs-2 mb-4"></i>
            <h5 className="fw-bold">Harga Terjangkau</h5>
            <p>
              Harga terjangkau bagi startup-startup baru yang menginginkan
              sebuah website tanpa pengurangan kualitas
            </p>
          </Col>
          <Col
            className="text-center py-5 px-3"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <i class="fa-solid fa-thumbs-up fs-2 mb-4"></i>
            <h5 className="fw-bold">Fasilitas Terbaik</h5>
            <p>
              Menggunakan teknologi terkini dalam proses pembuatan sehingga
              hasil akhir website menjadi menarik, dinamis dan mudah
              dikembangkan kembali
            </p>
          </Col>
          <Col
            className="text-center py-5 px-3"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <i class="fa-sharp fa-solid fa-shield-halved fs-2 mb-4"></i>
            <h5 className="fw-bold">Tersertifikasi</h5>
            <p>
              Staff dan programmer kami sudah memiliki sertikasi keahlian dalam
              bidangnya masing-masing, sehingga tidak perlu khawattir mengenai
              kualitas produk kami.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default servicesComp;
