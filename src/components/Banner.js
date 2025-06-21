import { Container, Row, Col } from "react-bootstrap";
import { useTypewriter } from 'react-simple-typewriter';
import { FileEarmarkPersonFill } from 'react-bootstrap-icons';

export const Banner = () => {
  const [text] = useTypewriter({
    words: ['A Web Developer', 'A Programmer', 'A Football Enthusiast'],
    loop: true,
  });

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="banner-row">
          <Col xs={12}>
            <h1 className="gradient-text">I'm Harshit</h1>
            <h1 className="typewriter-line">
              <span className="gradient-text typewriter-wrapper">{text}</span>
            </h1>

            <a href="./resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-button">
              Resume<FileEarmarkPersonFill className="resume-icon" />
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
