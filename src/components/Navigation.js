import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../styles/navigation.css";

const name = "Harsh Nagra";

const pages = [
    {
        name: "Intro", page: "#intro"
    },
    {
        name: "About", page: "#about"
    },
    {
        name: "Projects", page: "#projects"
    },
    {
        name: "Contacts", page: "#contacts"
    },
]

function Navigation() {
    return (
        <div id="header" style={{ marginBottom: "50px" }}>
            <Navbar variant="dark" expand="lg" fixed="top">
            <Navbar.Brand href="/">{name}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    { pages.map(item=>(
                        <Nav.Link href={item.page}>
                            {item.name}
                        </Nav.Link>
                    ))}
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
  
export default Navigation;

