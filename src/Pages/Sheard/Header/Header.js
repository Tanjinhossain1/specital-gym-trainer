import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.int';



const Header = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    return (
        <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
          
            <Container>
                <Navbar.Brand as={Link} to="/home">Gym-Trainer</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
                        {user ? <button onClick={() => logout()} className='border-0 text-white bg-warning rounded-pill mx-4'>Log Out</button> : <Nav.Link as={Link} to='/login'>Login</Nav.Link>}


                        {!user && <Nav.Link as={Link} to='/signup'>Sign Up</Nav.Link>}
                        <Nav.Link as={Link} to='/about'>About</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;