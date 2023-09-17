import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';

function Header() {
  return (
    <div className='Header'>
        <div className="Head">
            <h1>Ai Doctor</h1>
        </div>
        <Navbar bg="light" expand="lg" className="Navi">
            <Navbar.Brand href="/">HOME</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/Guide">사용 가이드</Nav.Link>
                    <Nav.Link href="/Notice">주의 사항</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
  );
}

export default Header;