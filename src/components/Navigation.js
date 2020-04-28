import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../styles/navigation.css";
import { configureAnchors } from 'react-scrollable-anchor'

configureAnchors({offset: -60, scrollDuration: 200})

const name = "Harsh Nagra";

const pages = [
    {
        name: "Education", page: "#education"
    },
    {
        name: "Projects", page: "#projects"
    },
    {
        name: "Work Experience", page: "#workexperience"
    },
    {
        name: "More", page: "#more"
    },
    {
        name: "Contact Me", page: "#footer"
    }
]

function Navigation() {
    return (
        <div id="header" style={{ marginBottom: "50px" }}>
            <Navbar variant="dark" expand="lg" fixed="top">
            <Navbar.Brand href="/">{name}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" style={{float:'right'}}>
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

