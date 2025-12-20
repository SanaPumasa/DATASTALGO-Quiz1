import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Spinner, Alert } from 'react-bootstrap';
import { getDestinations } from '../services/api';

export default function SceneryGallery() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        setLoading(true);
        const data = await getDestinations();
        setDestinations(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching destinations:', err);
        setError('Failed to load destinations. Please make sure the backend server is running.');
        // Fallback to static data if API fails
        setDestinations([
          { id: 1, image_url: '/MtPinatubo.jpg', name: 'Mountain', location: 'Majestic Mountains' },
          { id: 2, image_url: '/LakeDanao.jpg', name: 'Lake', location: 'Calming Lakes' },
          { id: 3, image_url: '/SacobiaBridge.jpeg', name: 'SacobiaBridge', location: 'Roadtrips' },
          { id: 4, image_url: '/ElNido.jpg', name: 'Beach', location: 'Sunny Beach' },
          { id: 5, image_url: '/Arizona.jpg', name: 'Arizona', location: 'Golden dunes' },
          { id: 6, image_url: '/NorthernLights.jpg', name: 'Northern lights', location: 'Aurora nights' }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  if (loading) {
    return (
      <Container className="py-4 text-center">
        <Spinner animation="border" role="status" variant="success">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <p className="mt-2">Loading destinations...</p>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <h2 className="mb-3 text-center">Scenery Gallery</h2>
      {error && (
        <Alert variant="warning" className="text-center">
          {error}
        </Alert>
      )}
      <Row>
        {destinations.map((dest) => (
          <Col key={dest.id} xs={12} sm={6} md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <div style={{ height: 200, overflow: 'hidden' }}>
                <Card.Img
                  variant="top"
                  src={dest.image_url}
                  alt={dest.name}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
              <Card.Body>
                <Card.Title className="text-center">{dest.name}</Card.Title>
                <Card.Text className="text-center text-muted">{dest.location}</Card.Text>
                {dest.price && (
                  <Card.Text className="text-center">
                    <strong>Starting at ₱{Number(dest.price).toLocaleString()}</strong>
                  </Card.Text>
                )}
                {dest.duration && (
                  <Card.Text className="text-center text-secondary">
                    <small>{dest.duration}</small>
                  </Card.Text>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
