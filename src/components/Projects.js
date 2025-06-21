import { useState } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";


function ProjectModal({ show, onHide, project }) {
  return (
    <Modal show={show} onHide={onHide} centered size="lg" className="modal-box">
      <Modal.Header closeButton className="model-header">
        <Modal.Title>{project.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>{project.description}</h5>
        <p><strong>Technologies:</strong> {project.techStack}</p>
      </Modal.Body>
      <Modal.Footer className="modal-footer">
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" href={project.github} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio site built using React and Bootstrap.",
      techStack: "React, Bootstrap, HTML, CSS",
      github: "https://github.com/MSriHarshit10/portfolio"
    },
    {
      title: "Human Migration Predicition",
      description: "Estimating future human migration based on factors such as: GDP, Literacy Rate, Unemployment Rate",
      techStack: "Python, Pandas, Numpy, Matplotlib, Scikit-Learn",
      github: "https://github.com/MSriHarshit10/Migration_Prediction"
    },
    {
      title: "Weather App",
      description: "",
      techStack: "",
      github: "https://github.com/yourusername/weather-app"
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <Container>
        <h2 className="proj-heading">My Projects</h2>
        <Row>
          {projects.map((project, idx) => (
            <Col md={4} sm={6} xs={12} key={idx} className="proj-card-col">
              <Card className="proj-card">
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description.slice(0, 60)}...</Card.Text>
                  <Button variant="outline-light" onClick={() => setSelectedProject(project)}>
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {selectedProject && (
          <ProjectModal
            show={!!selectedProject}
            onHide={() => setSelectedProject(null)}
            project={selectedProject}
          />
        )}
      </Container>
    </section>
  );
};
