import { Container, Row, Col } from "react-bootstrap";
import mp from "../assets/img/myphoto.jpg";

export const AboutMe = () => {
    return (
        <section className="about-section" id="about">
            <Container>
                <h2 className="about-heading">ABOUT ME</h2>
                <Row className="about-row">
                    <Col xs={12} md={6} xl={5}>
                        <img src={mp} alt="Harshit" className="profile-pic" />
                    </Col>
                    <Col xs={12} md={6} xl={7}>
                        <p>
                            I'm Sri Harshit Mandalika, a passionate and curious developer with a strong foundation in programming and web development. I enjoy building responsive, user-friendly applications using technologies like HTML, CSS, JavaScript, React, and Bootstrap. I'm also keen on exploring the fields of machine learning and backend development, having applied data-driven solutions in projects and academic work. I have a problem-solving mindset which has aided me in sharpening my skills through hands-on learning. I'm always excited to embrace new technologies, collaborate on impactful projects, and grow as a developer in dynamic and innovative environments.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

