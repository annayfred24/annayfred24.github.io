import {useState, useEffect} from "react";
import {Navbar, Container, Nav} from "react-bootstrap"; 
import navIcon1 from '../assets/img/nav-icon1.svg';
import github from '../assets/img/githubIcon.svg';
import React from "react";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false); 

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true); 
            }
            else{
                setScrolled(false); 
            }
        }

        window.addEventListener("scroll", onScroll);

        return() => window.removeEventListener('scroll', onScroll); 
     } , [])

     const onUpdateActiveLink = (value) => {
        setActiveLink(value); 
     }

    return (
    <Navbar expand="lg" className={scrolled ? 'scrolled': ''}>
      <Container>
        <Navbar.Brand href="#home" id="brand">React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"> 
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
          </Nav>
            <span className='navbar-text'> 
                <div className='social-icon'> 
                    <a href='https://www.linkedin.com/in/anna-fredrickson/'><img src={navIcon1} alt=""></img></a>
                    <a href='https://github.com/annayfred24'><img src={github} alt=""></img></a>
                </div>
            </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}