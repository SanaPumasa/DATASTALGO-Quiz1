import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Spinner, Alert, Badge } from 'react-bootstrap';
import { getPackages } from '../services/api';

export default function TravelPackages() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        setLoading(true);
        const data = await getPackages();
        setPackages(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching packages:', err);
        setError('Failed to load travel packages. Please make sure the backend server is running.');
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  const getPackageTypeBadge = (type) => {
    const colors = {
      domestic: 'primary',
      international: 'danger',
      adventure: 'warning',
      beach: 'info',
      cultural: 'secondary',
      custom: 'dark'
    };
    return colors[type] || 'secondary';
  };

  if (loading) {
    return (
      <Container className="py-4 text-center">
        <Spinner animation="border" role="status" variant="success">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <p className="mt-2">Loading travel packages...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="py-4">
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      </Container>
    );
  }

  if (packages.length === 0) {
    return (
      <Container className="py-4">
        <h2 className="mb-3 text-center">Travel Packages</h2>
        <Alert variant="info" className="text-center">
          No travel packages available at the moment. Check back soon!
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <h2 className="mb-3 text-center">Travel Packages</h2>
      <Row>
        {packages.map((pkg) => (
          <Col key={pkg.id} xs={12} md={6} lg={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <Card.Title>{pkg.title}</Card.Title>
                  <Badge bg={getPackageTypeBadge(pkg.package_type)}>
                    {pkg.package_type_display}
                  </Badge>
                </div>
                <Card.Subtitle className="mb-2 text-muted">
                  {pkg.destination_name}
                </Card.Subtitle>
                <Card.Text>{pkg.description}</Card.Text>
                <hr />
                <Card.Text>
                  <strong>Inclusions:</strong><br />
                  <small>{pkg.inclusions}</small>
                </Card.Text>
                {pkg.exclusions && (
                  <Card.Text>
                    <strong>Exclusions:</strong><br />
                    <small className="text-muted">{pkg.exclusions}</small>
                  </Card.Text>
                )}
              </Card.Body>
              <Card.Footer className="bg-white">
                <div className="d-flex justify-content-between align-items-center">
                  <span className="h5 mb-0 text-success">
                    ₱{Number(pkg.price).toLocaleString()}
                  </span>
                  <small className="text-muted">
                    Max {pkg.max_guests} guests
                  </small>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
