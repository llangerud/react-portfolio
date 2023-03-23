import React from 'react';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Portfolio() {
  return (
    <Container>
      <br></br><br></br>
  <Row>
  <Col sm>
   <Card style = {{ width: '18rem' }} className="text-center m-3" text='dark'>
      <Card.Img variant="top" src='/images/dogone.jpg'/>
      <Card.Body>
        <Card.Title>About</Card.Title>
        <Card.Text>
          Lily lives in Minneapolis with her partner and two dogs. 
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col sm>
    <Card style = {{ width: '18rem' }} className="text-center m-3" text='dark'>
      <Card.Img variant="top" src='/images/dogone.jpg'/>
      <Card.Body>
        <Card.Title>About</Card.Title>
        <Card.Text>
          Lily lives in Minneapolis with her partner and two dogs. 
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col sm>
    <Card style = {{ width: '18rem' }} className="text-center m-3" text='dark'>
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
    <Row>
      <Col sm>
    <Card style = {{ width: '18rem' }} className="text-center m-3" text='dark'>
      <Card.Img variant="top" src='/images/dogone.jpg'/>
      <Card.Body>
        <Card.Title>About</Card.Title>
        <Card.Text>
          Lily lives in Minneapolis with her partner and two dogs. 
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col sm>
    <Card style = {{ width: '18rem' }} className="text-center m-3" text='dark'>
      <Card.Img variant="top" src='/images/dogone.jpg'/>
      <Card.Body>
        <Card.Title>About</Card.Title>
        <Card.Text>
          Lily lives in Minneapolis with her partner and two dogs. 
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col sm>
    <Card style = {{ width: '18rem' }} className="text-center m-3" text='dark'>
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