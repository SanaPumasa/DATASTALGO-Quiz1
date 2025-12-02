import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const images = [
  { src: '/MtPinatubo.jpg', alt: 'Mountain', caption: 'Majestic Mountains' },
  { src: '/LakeDanao.jpg', alt: 'Lake', caption: 'Calming Lakes' },
  { src: '/SacobiaBridge.jpeg', alt: 'SacobiaBridge', caption: 'Roadtrips' },
  { src: '/ElNido.jpg', alt: 'Beach', caption: 'Sunny Beach' },
  { src: '/Arizona.jpg', alt: 'Arizona', caption: 'Golden dunes' },
  { src: '/NorthernLights.jpg', alt: 'Northern lights', caption: 'Aurora nights' }
]

export default function SceneryGallery() {
  return (
    <Container className="py-4">
      <h2 className="mb-3 text-center">Scenery Gallery</h2>
      <Row>
        {images.map((img, idx) => (
          <Col key={idx} xs={12} sm={6} md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <div style={{height: 200, overflow: 'hidden'}}>
                <Card.Img variant="top" src={img.src} alt={img.alt} style={{objectFit: 'cover', width: '100%', height: '100%'}} />
              </div>
              <Card.Body>
                <Card.Text className="text-center">{img.caption}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}
