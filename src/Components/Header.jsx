import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';  

function Header() {
  return (
    <Navbar style={{backgroundColor:'#D1F3C5'}} expand="lg" bg="#D1F3C5" variant="light" className="d-flex justify-content-between">
        <Nav.Link href="/" className="text-decoration-none text-dark" style={{ paddingLeft: '40px' }}>
            <header>
                <h1>DRG Travel & Tours</h1>
                <p><strong>Your remote travel and tour service partner</strong></p>
            </header>
        </Nav.Link>
        <Nav className="ms-auto me-4">
          <Nav.Link href="/about" className="text-dark"><strong>About</strong></Nav.Link>
          <Nav.Link href="/services" className="text-dark"><strong>Services</strong></Nav.Link>
          <Nav.Link href="/gallery" className="text-dark"><strong>Gallery</strong></Nav.Link>
        </Nav>
    </Navbar>
  )
}

export default Header
