import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const images = [
  { src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80', alt: 'Mountain landscape', caption: 'Majestic mountains' },
  { src: 'https://images.unsplash.com/photo-1501785888041-3b5c0b5b2e8f?auto=format&fit=crop&w=1200&q=80', alt: 'Lake sunset', caption: 'Sunset at the lake' },
  { src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80', alt: 'Forest path', caption: 'Walk in the forest' },
  { src: 'https://images.unsplash.com/photo-1501785888041-37b8a8a8df8a?auto=format&fit=crop&w=1200&q=80', alt: 'Beach', caption: 'Sunny beach' },
  { src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80', alt: 'Desert dunes', caption: 'Golden dunes' },
  { src: 'https://images.unsplash.com/photo-1441829266145-b7d63e3e9a9b?auto=format&fit=crop&w=1200&q=80', alt: 'Northern lights', caption: 'Aurora nights' }
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
