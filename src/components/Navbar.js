import React from "react";

import { Navbar, Nav } from "react-bootstrap";

export default function NavBar() {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand className="pl-5 h2">Coditor</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/login" className="mr-4">
                        Login
					</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}