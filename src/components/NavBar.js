import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import logo from '../assets/img/logo.svg';
import github from '../assets/img/github.svg';
import insta from '../assets/img/insta.svg';
import linkedin from '../assets/img/linkedin.svg';
import twitter from '../assets/img/twitter.svg';

export const MyNavbar = () => {

    const [activeLink,setActiveLink]=useState('home');
    const [scrolled,setScrolled]=useState(false);

    useEffect( () =>{
        const onScroll = () =>{
            if(window.scrollY>50)
            {
                setScrolled(true);
            }
            else
            {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll",onScroll);
        return () => window.removeEventListener("scroll",onScroll);
    },[])

    const onUpdateActiveLink = (value) =>{
        setActiveLink(value);
    }


  return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""} bg="black">
      <Container>

        <Navbar.Brand href="#home">
            <img src={logo} alt="Logo"/>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About Me</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#certificates" className={activeLink === 'certificates' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('certificates')}>Certificates</Nav.Link>
          </Nav>

            <span className="navbar-text">
                <div className="socials">
                    <a href="https://www.linkedin.com/in/sri-harshit-mandalika-8b8019301/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt=""/></a>
                    <a href="https://github.com/MSriHarshit10" target="_blank" rel="noopener noreferrer"><img src={github} alt=""/></a>
                    <a href="https://www.instagram.com/harshit_mandalika18/" target="_blank" rel="noopener noreferrer"><img src={insta} alt=""/></a>
                    <a href="https://x.com/harshit0418" target="_blank" rel="noopener noreferrer"><img src={twitter} alt=""/></a>
                </div>
                <button className="vvd" onClick={() => window.location.hash = '#contact'}><span>Contact Me</span></button>
            </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
