import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "devicon/devicon.min.css";

export const SkillsFun = () => {
  const skillCategories = {
    "Programming Languages": [
      { name: "Java", icon: "devicon-java-plain colored" },
      { name: "Python", icon: "devicon-python-plain colored" },
      { name: "C", icon: "devicon-c-plain colored" },
      { name: "C++", icon: "devicon-cplusplus-plain colored" },
    ],
    "Web Development": [
      { name: "HTML5", icon: "devicon-html5-plain colored" },
      { name: "CSS3", icon: "devicon-css3-plain colored" },
      { name: "React", icon: "devicon-react-original colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    ],
    "Databases": [
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "SQL", icon: "devicon-azuresqldatabase-plain colored" },
      { name: "ORACLE", icon: "devicon-oracle-plain colored" },
    ],
    "Data Science Tools": [
      { name: "Matplotlib", icon: "devicon-matplotlib-plain colored" },
      { name: "Numpy", icon: "devicon-numpy-plain colored" },
      { name: "Pandas", icon: "devicon-pandas-plain colored" },
    ],
  };

  const responsive = {
    allScreens: {
      breakpoint: { max: 4000, min: 0 },
      items: 3,
    },
  };

  return (
    <section className="skills-section" id="skills">
      <Container>
        <h2 className="skills-title">Skills</h2>
        {Object.entries(skillCategories).map(([category, skills], idx) => (
          <div key={idx} className="skill-category">
            <h3 className="category-title">{category}</h3>
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={2000}
              className="skills-carousel"
            >
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <i className={`${skill.icon} skill-icon`}></i>
                  <p className="skill-label">{skill.name}</p>
                </div>
              ))}
            </Carousel>
          </div>
        ))}
      </Container>
    </section>
  );
};
