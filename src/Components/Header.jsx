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
        <Nav.Link href="/user" className="ms-auto me-5"><i className='fas fa-user'></i> User</Nav.Link>
    </Navbar>
  )
}

export default Header
