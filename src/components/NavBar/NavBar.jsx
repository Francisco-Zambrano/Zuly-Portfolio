import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {

    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const onScroll = () => {

        if (window.scrollY > 50) {
            setScrolled(true);
        }else {
            setScrolled(false)
        }
      }
    
      window.addEventListener("scroll", onScroll)

      return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>

        <Navbar.Brand href="#home"> 
        <img src={""} alt='logo'/> 
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === "home" ? "active NavBar-link" : "navBar-link"} onClick={() => onUpdateActiveLink("home")}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === "home" ? "active NavBar-link" : "navBar-link"} onClick={() => onUpdateActiveLink("skills")}>Skills</Nav.Link>
            <Nav.Link href="#proyects" className={activeLink === "home" ? "active NavBar-link" : "navBar-link"} onClick={() => onUpdateActiveLink("proyects")}>Proyects</Nav.Link>
          </Nav>

          <span className='navbar-text'>
            <div className='social-icon'>
                <a href=""><img src={""} alt=''></img>instagram</a>
                <a href=""><img src={""} alt=''></img>facebook</a>
                <a href=""><img src={""} alt=''></img>linkedin</a>
                <a href=""><img src={""} alt=''></img>tiktok</a>
            </div>
            <button>Hablemos</button>
          </span>



        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}

export default NavBar