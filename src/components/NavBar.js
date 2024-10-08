import { useState, useEffect} from "react";
import {Navbar, Container, Nav} from "react-bootstrap";
import logo from "../assets/imgs/Logo.png";
import gitHubIcon from "../assets/imgs/github.svg";
import linkedinIcon from "../assets/imgs/LinkedIn_icon.svg";
import {
    BrowserRouter as Router
  } from "react-router-dom";


export const NavBar = () => 
{
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => 
        {
            if (window.scrollY > 50)
            {
                setScrolled(true);
            }
            else
            {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Router>
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
          <Container>
            <Navbar.Brand href="/">
              <img src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>Projects</Nav.Link>
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                  <a href="https://github.com/CRUVOD" target="_blank"><img src={gitHubIcon} alt="" /></a>
                  <a href="https://www.linkedin.com/in/roger-zhang-cruv/" target="_blank"><img src={linkedinIcon} alt="" /></a>
                </div>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Router>
    );
}