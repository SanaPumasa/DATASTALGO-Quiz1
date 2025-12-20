import Header from './Components/Header';
import Footer from './Components/Footer';
import React from 'react';
import { Col, Container, Card } from 'react-bootstrap';
import SceneryGallery from './Components/SceneryGallery';
import TravelPackages from './Components/TravelPackages';
import './bootstrap.min (2).css';

function App() {
  return (
    <div>
      <Header />
      <main className="py-3 d-flex justify-content-center">
        <Col className='text-center'>
          <h1>WELCOME TO OUR TRAVEL AGENCY!</h1>
          <img src="/Airplane.jpg" alt="airplane" style={{ width: '500px', height: '500px', marginTop: '20px', objectFit: 'cover', borderRadius: '15px' }} />
        </Col>


        <Container className="py-4">
          <Card className="p-4" style={{ backgroundColor: '#D1F3C5' }}>
            <Card.Body>
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
                  All our services are provided remotely, ensuring fast response times, convenience, and cost-effective support. Whether you're a traveler planning your next adventure or a travel company looking for a trusted backend partner, we're here to make travel simple and stress-free.
                </p>
              </section>
            </Card.Body>
          </Card>
        </Container>
      </main>
      <Container className="py-1">
        <Card className="p-4" style={{ backgroundColor: '#D1F3C5' }}>
          <Card.Body>
            <section className="mb-4">
              <h2>Where to Inquire?</h2>
              <p>Ready to start your travel journey with us? Get in touch with <strong>DRG Travel & Tours</strong> through any of the following channels:</p>
              <ul>
                <li><strong>Email:</strong> drg.traveltourservice@gmail.com</li>
                <li><strong>Phone:</strong> +63 968 526 8328</li>
                <li><strong>WhatsApp:</strong> +63 968 526 8328</li>
                <li><strong>Facebook Page:</strong><a href="https://www.facebook.com/share/1BWFMHXwJJ/"> https://www.facebook.com/share/1BWFMHXwJJ/</a></li>
                <li><strong>Office Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM (PST)</li>
              </ul>
            </section>
          </Card.Body>
        </Card>
      </Container>
      <hr className="my-4" style={{ borderWidth: '3px' }} />

      {/* Scenery Gallery - Now fetches from API */}
      <SceneryGallery />

      <hr className="my-4" style={{ borderWidth: '3px' }} />

      {/* Travel Packages - Fetches from API */}
      <TravelPackages />

      <Footer />
    </div>
  );
}

export default App;
