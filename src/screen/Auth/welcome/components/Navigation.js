import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

export default function Navigation() {
    return (
        <Navbar collapseOnSelect sticky="top" expand="lg">
            <Container>
                <Navbar.Brand href="/">IEMIS</Navbar.Brand>
                <Navbar.Toggle  aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='/about'>About</Nav.Link>
                        <Nav.Link href='/feature'>Feature</Nav.Link>
                        <Nav.Link href='/auth/student/signin'>Portal</Nav.Link>
                        <NavDropdown title="Administrator" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/auth/admin/signin">Admin</NavDropdown.Item>
                            <NavDropdown.Item href="/auth/district/signin">District</NavDropdown.Item>
                            <NavDropdown.Item href="/auth/school/signin">School</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/auth/teacher/signin">Teacher</NavDropdown.Item>
                            <NavDropdown.Item href="/auth/staff/signin">Staff</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href='/auth/parent/signin'>Parent</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
