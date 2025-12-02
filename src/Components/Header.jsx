import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';  

function Header() {
  return (
    <Navbar expand="lg" bg="light" variant="light" className="d-flex justify-content-between">
        <Nav.Link href="/" className="text-decoration-none text-dark">
            <header>
                <h1>DRG Travel & Tours</h1>
                <p>Your remote travel and tour service partner</p>
            </header>
        </Nav.Link>
        <Nav.Link href="/user" className="ms-auto me-3"><i className='fas fa-user'></i> User</Nav.Link>
    </Navbar>
  )
}

export default Header
