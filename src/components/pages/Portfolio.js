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
   <Card.Header>Did I Need That</Card.Header>
   <Card.Link href="https://did-i-need-that.herokuapp.com/">Application</Card.Link>
        <Card.Link href="https://github.com/llangerud/did-i-need-that">GitHub </Card.Link>
      <Card.Img variant="top" src='/images/dint.jpg'/>
      <Card.Body>
      <Card.Text>
          Full-stack application for tracking purchases using SQL, express and nodemailer. 
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col sm>
    <Card style = {{ width: '18rem' }} className="text-center m-3" text='dark'>
    <Card.Header>Cryptoscope</Card.Header>
    <Card.Link href="https://llangerud.github.io/cryptoscope/">Application</Card.Link>
        <Card.Link href="https://github.com/llangerud/cryptoscope">GitHub</Card.Link>
      <Card.Img variant="top" src='/images/cryptoscopeimage.jpg'/>
      <Card.Body>
        <Card.Text>
          Front-end application offering realtime crypto data.
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col sm>
    <Card style = {{ width: '18rem' }} className="text-center m-3" text='dark'>
    <Card.Header>Just Another Text Editor</Card.Header>
    <Card.Link href="https://text-editor87756.herokuapp.com/">Application</Card.Link>
        <Card.Link href="https://github.com/llangerud/text-editor">GitHub </Card.Link>
      <Card.Img variant="top" src='/images/jate.jpg'/>
      <Card.Body>
        <Card.Text>
        A Progressive Web Application (PWA) built with Node, Express, CodeMirror, IndexedDB and webpack.        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    </Row>
    <Row>
      <Col sm>
      <Card style = {{ width: '18rem' }} className="text-center m-3" text='dark'>
    <Card.Header>Employee Tracker</Card.Header>
    <Card.Link href="#">Application</Card.Link>
        <Card.Link href="#">GitHub </Card.Link>
      <Card.Img variant="top" src='/images/employeetracker.jpg'/>
      <Card.Body>
        <Card.Text>
        Command-line application using Node, inquirer and mysql to create a searchable employee database.
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col sm>
    <Card style = {{ width: '18rem' }} className="text-center m-3" text='dark'>
    <Card.Header>Employee Tracker</Card.Header>
    <Card.Link href="#">Application</Card.Link>
        <Card.Link href="#">GitHub </Card.Link>
      <Card.Img variant="top" src='/images/employeetracker.jpg'/>
      <Card.Body>
        <Card.Text>
        Command-line application using Node, inquirer and mysql to create a searchable employee database.
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col sm>
    <Card style = {{ width: '18rem' }} className="text-center m-3" text='dark'>
    <Card.Header>Employee Tracker</Card.Header>
    <Card.Link href="#">Application</Card.Link>
        <Card.Link href="#">GitHub </Card.Link>
      <Card.Img variant="top" src='/images/employeetracker.jpg'/>
      <Card.Body>
        <Card.Text>
        Command-line application using Node, inquirer and mysql to create a searchable employee database.
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
      </Row>
    </Container>
  );
}