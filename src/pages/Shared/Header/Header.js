
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';


const Header = () => {
    const { user,logOut } = useAuth();
    return (
        <>
            <Navbar sticky="top" bg="dark" variant="dark" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home"> 🏥 Thakurgaon-hospital </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Nav.Link className="text-light fw-bold" as ={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link className="text-light fw-bold" as ={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link className="text-light fw-bold" as={Link} to="/appointments">Appointments</Nav.Link>
                        <Nav.Link className="text-light fw-bold" as ={HashLink} to="/home#experts">Experts</Nav.Link>
                        {user?.email?
                        <Button variant="warning" onClick={logOut} >Logout</Button>:
                            <Nav.Link className="text-warning fw-bold" as ={Link} to="/login">Login </Nav.Link>}
                        <Navbar.Text className="m-3">
                           Login as  <a  href="#login">  {user?.displayName }</a>
                        </Navbar.Text>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;