import React from 'react'
import { Navbar } from 'react-bootstrap';

function Footer() {
  return (
    <Navbar style={{backgroundColor:'#D1F3C5'}} expand="lg" bg="#D1F3C5" variant="light" className="d-flex justify-content-center">
    <footer style={{ textAlign: 'center' }}>
      <h2>Experience the world, worry-free</h2>
      <p>Copyright &copy; DRG Travel and Tours</p>
    </footer>
    </Navbar>
  )
}

export default Footer
