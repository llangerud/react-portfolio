import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'



function BottomNav () {
    return <Navbar fixed="bottom" bg='primary'>
    <Container>
        <Navbar.Brand href="https://linkedin.com/in/lily-langerud"><i class="fa-brands fa-linkedin"></i></Navbar.Brand>
        <Navbar.Brand href="https://github.com/llangerud"><i class="fa-brands fa-github"></i></Navbar.Brand>
        <Navbar.Brand href="https://www.hackerrank.com/lily_langerud"><i class="fa-brands fa-hackerrank"></i></Navbar.Brand>
      </Container>
      </Navbar>
}


export default BottomNav; 