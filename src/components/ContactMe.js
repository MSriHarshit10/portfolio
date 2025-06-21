import { Container, Row, Col, Card, Button } from "react-bootstrap";

export const ContactMe = () => {
  return (
    <section className="contact-section" id="contact">
      <Container>
        <h2 className="contact-heading">Contact Me</h2>
        <Row className="contact-row">
          <Col md={6}>
            <Card className="contact-card">
              <Card.Body>
                <Card.Title className="contact-title">Details</Card.Title>
                <Card.Text className="contact-text">
                    <strong>Name:</strong> Sri Harshit Mandalika<br /><br/>
                    <strong>Email:</strong> mandalika599@gmail.com<br /><br/>
                    <strong>Phone:</strong> +91 863 999 5491<br/>
                </Card.Text>
                <div className="contact-button">
                  <Button variant="primary" href="https://mail.google.com/mail/?view=cm&fs=1&to=mandalika599@gmail.com&su=Contact%20from%20Portfolio&body=Hi" target="_blank"rel="noopener noreferrer">
                    Send Email
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
