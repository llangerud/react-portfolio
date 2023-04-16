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
    
   <Card style = {{ width: '18rem' }} classNameName="text-center m-3" text='dark'>
   <a href="https://did-i-need-that.herokuapp.com/"><Card.Header>Did I Need That</Card.Header></a>
    
     <Card.Img variant="top" src='./images/dint.jpg'/>
      <Card.Body>
       <Card.Text>
          Full-stack application for tracking purchases using SQL, express and nodemailer. 
        </Card.Text>
        <Card.Link href="https://github.com/llangerud/did-i-need-that"><i className="fa-brands fa-github"></i> </Card.Link>
        </Card.Body>
    </Card>
    
    </Col>
    <Col sm>
    <Card style = {{ width: '18rem' }} classNameName="text-center m-3" text='dark'>
   <a href="https://llangerud.github.io/cryptoscope/"> <Card.Header>Cryptoscope</Card.Header></a>
       
      <Card.Img variant="top" src='./images/cryptoscopeimage.jpg'/>
      <Card.Body>
        <Card.Text>
          Front-end application offering realtime crypto data.
        </Card.Text> 
        <Card.Link href="https://github.com/llangerud/cryptoscope"><i className="fa-brands fa-github"></i></Card.Link>
        </Card.Body>
    </Card>
    </Col>
    <Col sm>
    <Card style = {{ width: '18rem' }} classNameName="text-center m-3" text='dark'>
    <a href="https://Houndr.herokuapp.com/"><Card.Header>Houndr</Card.Header></a>
      <Card.Img variant="top" src='./images/mainpage.jpg'/>
      <Card.Body>
        <Card.Text>
        A single-page app utilizing the MERN stack.
        </Card.Text>
        <Card.Link href="https://github.com/llangerud/Houndr"><i className="fa-brands fa-github"></i></Card.Link>
        </Card.Body>
    </Card>
    </Col>
    </Row>
    <Row>
      <Col sm>
      <Card style = {{ width: '18rem' }} classNameName="text-center m-3" text='dark'>
    <a href="https://text-editor87756.herokuapp.com/"><Card.Header>Just Another Text Editor</Card.Header></a>
      <Card.Img variant="top" src='./images/jate.jpg'/>
      <Card.Body>
        <Card.Text>
        A Progressive Web Application (PWA) built with Node, Express, CodeMirror, IndexedDB and webpack.
        </Card.Text>
        <Card.Link href="https://github.com/llangerud/text-editor"><i className="fa-brands fa-github"></i></Card.Link>
        </Card.Body>
    </Card>
    </Col>
    <Col sm>
    <Card style = {{ width: '18rem' }} classNameName="text-center m-3" text='dark'>
    <Card.Header>Employee Tracker</Card.Header>
    <Card.Link href="#">Application</Card.Link>
        <Card.Link href="#"><i className="fa-brands fa-github"></i> </Card.Link>
      <Card.Img variant="top" src='./images/employeetracker.jpg'/>
      <Card.Body>
        <Card.Text>
        Command-line application using Node, inquirer and mysql to create a searchable employee database.
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col sm>
    <Card style = {{ width: '18rem' }} classNameName="text-center m-3" text='dark'>
    <Card.Header>Employee Tracker</Card.Header>
    <Card.Link href="#">Application</Card.Link>
        <Card.Link href="#"><i className="fa-brands fa-github"></i> </Card.Link>
      <Card.Img variant="top" src='./images/employeetracker.jpg'/>
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