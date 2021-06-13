import React from 'react'
import { Col, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

export default function Navigation() {
    return (
        <Navbar collapseOnSelect sticky="top" expand="lg" bg="light" >
            <Container>
                <Col xl={5} sm={5} lg={5}>
                    <Navbar.Brand href="/">IEMIS</Navbar.Brand>
                </Col>
                <Col xl={7} sm={7} lg={7}>
                    <Navbar.Toggle  aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='/about'>About</Nav.Link>
                            <Nav.Link href='/feature'>Feature</Nav.Link>
                            <Nav.Link href='/auth/student/signin'>Students Portal</Nav.Link>
                            <NavDropdown title="Administrator" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/auth/admin/signin">Admin</NavDropdown.Item>
                                <NavDropdown.Item href="/auth/district/signin">District</NavDropdown.Item>
                                <NavDropdown.Item href="/auth/school/signin">School</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/auth/teacher/signin">Teacher</NavDropdown.Item>
                                <NavDropdown.Item href="/auth/staff/signin">Staff</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href='/auth/parent/signin'>Parent Portal</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Col>
            </Container>
        </Navbar>
    )
}
