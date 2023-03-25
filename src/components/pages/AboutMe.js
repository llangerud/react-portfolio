import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'


export default function AboutMe() {
  return (
    <Container>
      <Row>
        <Col sm style={{display: 'flex', justifyContent: 'center'}}>
     <Card text="dark"bg="light"border="dark" style = {{ width: '18rem' }} className="text-center m-5">
      <Card.Img variant="top" src='/images/dogone.jpg'/>
      <Card.Body>
        <Card.Title>About</Card.Title>
        <Card.Text>
          Lily lives in Minneapolis with her partner and two dogs. 
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    </Row>
  </Container>
  );
}




