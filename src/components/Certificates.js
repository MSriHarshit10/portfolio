import { Container, Row, Col, Card, Button } from "react-bootstrap";

export const Certificates = () => {
  const certificates = [
    {
      title: "Introduction to SQL",
      provider: "edX",
      file: "./certificates/EDX_SQL.pdf",
    },
    {
      title: "Introduction to Web Development",
      provider: "EDX",
      file: "./certificates/EDX_WEBDEV.pdf",
    },
    {
      title: "Cloud Computing",
      provider: "NPTEL",
      file: "./certificates/Cloud_Computing.pdf",
    },
    {
      title: "Python Development Internship",
      provider: "Next24Tech",
      file: "./certificates/Next24Tech.pdf",
    },
    {
      title: "Java Development Internship",
      provider: "Intrainz",
      file: "./certificates/Intrainz.pdf",
    },
    {
      title: "Data Science For Engineers",
      provider: "NPTEL",
      file: "./certificates/Data_Science_for_Engineers.pdf",
    },
  ];

  return (
    <section className="certificates-section" id="certificates">
      <Container>
        <h2 className="certificate-heading">Certifications</h2>
        <Row>
          {certificates.map((cert, idx) => (
            <Col md={4} sm={6} xs={12} key={idx} className="mb-4">
              <Card className="cert-card">
                <iframe className="i-frame" src={cert.file} title={cert.title}></iframe>
                <Card.Body>
                  <Card.Title>{cert.title}</Card.Title>
                  <Card.Text>
                    <strong>Provider:</strong> {cert.provider}
                  </Card.Text>
                  <Button variant="primary" href={cert.file} target="_blank" rel="noopener noreferrer">View Full Certificate</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
