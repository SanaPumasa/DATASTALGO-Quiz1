import Header from './Components/Header';
import Footer from './Components/Footer';
import React from 'react';
import { Navbar, Col, Container } from 'react-bootstrap';
import SceneryGallery from './Components/SceneryGallery';
import './bootstrap.min (2).css';

function App() {
  return (
      <div>
        <Header />
        <main className="py-3 d-flex justify-content-center">
          <Col className='text-center'><h1>Welcome to our travel agency</h1></Col>
        

        <Container className="py-4">
          <section className="mb-4">
            <h2>Who We Are</h2>
            <p>
              We are a remote travel and tour service partner dedicated to delivering seamless travel support for individuals, travel businesses, and tour operators. Operating entirely online through modern virtual communication tools, we provide flexible, efficient, and reliable travel assistance from anywhere in the world.
            </p>
          </section>

          <section className="mb-4">
            <h2>What We Do</h2>
            <p>We offer a comprehensive range of travel services, including:</p>
            <ul>
              <li><strong>Trip Planning &amp; Itinerary Design:</strong> Tailor-made itineraries crafted to match your preferences, budget, and travel style.</li>
              <li><strong>Reservations &amp; Bookings:</strong> Local and international flights; hotel accommodations across all categories; tours and travel experiences; transportation services, including transfers and rentals.</li>
              <li><strong>Support for Travel Businesses &amp; Tour Operators:</strong> We assist with client management, coordination with suppliers, and administrative tasks to help your travel operations run smoothly.</li>
            </ul>
          </section>

          <section className="mb-4">
            <h2>How We Work</h2>
            <p>
              All our services are provided remotely, ensuring fast response times, convenience, and cost-effective support. Whether you're a traveler planning your next adventure or a travel company looking for a trusted backend partner, we’re here to make travel simple and stress-free.
            </p>
          </section>
        </Container>
        </main>

        <SceneryGallery />
        <Footer />
      </div>
  );
}

export default App;
