import React, { useState, useEffect } from 'react';
import { Container, Card, ListGroup, Spinner, Alert, Badge } from 'react-bootstrap';
import { getApiRoutes } from '../services/api';

export default function ApiInfo() {
  const [apiInfo, setApiInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApiInfo = async () => {
      try {
        setLoading(true);
        const data = await getApiRoutes();
        setApiInfo(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching API info:', err);
        setError('Failed to load API information. Please make sure the backend server is running.');
      } finally {
        setLoading(false);
      }
    };

    fetchApiInfo();
  }, []);

  if (loading) {
    return (
      <Container className="py-4 text-center">
        <Spinner animation="border" role="status" variant="success">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <p className="mt-2">Loading API information...</p>
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

  return (
    <Container className="py-4">
      <Card className="shadow-sm">
        <Card.Header className="bg-success text-white">
          <h4 className="mb-0">🌐 API Information</h4>
        </Card.Header>
        <Card.Body>
          <p><strong>{apiInfo?.message}</strong></p>
          <p>API Version: <Badge bg="info">{apiInfo?.api_version}</Badge></p>
          
          <h5 className="mt-4">Available Endpoints:</h5>
          <ListGroup>
            {apiInfo?.endpoints?.map((endpoint, index) => (
              <ListGroup.Item key={index} className="d-flex justify-content-between align-items-start">
                <div>
                  <Badge bg="primary" className="me-2">{endpoint.method}</Badge>
                  <code>{endpoint.endpoint}</code>
                </div>
                <span className="text-muted">{endpoint.description}</span>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
        <Card.Footer className="text-muted">
          <small>
            API Base URL: <code>{process.env.REACT_APP_API_URL || 'http://localhost:8000/api'}</code>
          </small>
        </Card.Footer>
      </Card>
    </Container>
  );
}
