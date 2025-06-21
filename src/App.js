import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import line from './assets/img/line.svg';
import { MyNavbar } from './components/NavBar'; 
import {Banner} from './components/Banner';
import {AboutMe} from './components/AboutMe';
import { SkillsFun } from './components/Skills';
import { Projects } from './components/Projects';
import { Certificates } from "./components/Certificates";
import { ContactMe } from './components/ContactMe';


function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Banner />  
      <img src={line} alt="Section Divider" className="divider" />
      <AboutMe />
      <img src={line} alt="Section Divider" className="divider" />
      <SkillsFun/>
      <img src={line} alt="Section Divider" className="divider" />
      <Projects/>
      <img src={line} alt="Section Divider" className="divider" />
      <Certificates />
      <img src={line} alt="Section Divider" className="divider" />
      <ContactMe/>
      <img src={line} alt="Section Divider" className="divider" />
    </div>
  );
}

export default App;
