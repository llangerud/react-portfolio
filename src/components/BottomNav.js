import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



function BottomNav () {
    return <Navbar fixed="bottom" bg='primary'>
    <Container>
        <Navbar.Brand href="#">BottomNav</Navbar.Brand>
      </Container>
      </Navbar>
}


export default BottomNav; 