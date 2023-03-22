import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'


export default function AboutMe() {
  return (
    <Container><br></br><br></br>
        <Col className="align-middle">
     <Card style = {{ width: '18rem' }} className="text-center" text='dark'>
      <Card.Img variant="top" src='/images/dogone.jpg'/>
      <Card.Body>
        <Card.Title>About</Card.Title>
        <Card.Text>
          Lily lives in Minneapolis with her partner and two dogs. 
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
  </Container>
  );
}
