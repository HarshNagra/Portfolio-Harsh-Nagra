import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import SanskritiLogo from '../assets/img/SanskritiLogo.png';
import HKULogo from '../assets/img/HKULogo.jpg';
import UofTLogo from '../assets/img/UofTLogo.png';


function Education (){
    return (
        <Container>
            <div style={{paddingTop:'10vh'}}>
            <h1 style={{fontSize:'80px'}}><b>Education</b></h1>
            </div>
            
            <CardDeck style = {{paddingTop:'5vh', paddingBottom:'30vh'}}>
                <Card>
                    <Card.Img variant="top" src={SanskritiLogo} height={400}/>
                    <Card.Body>
                    <Card.Title style={{textAlign:'center'}}><b>Sanskriti School</b></Card.Title>
                    <Card.Text>
                        <b>Level:</b> High School <br/>
                        <b>Subjects</b>: Physics, Chemistry, Math and Computer Science
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={HKULogo} height={400}/>
                    <Card.Body>
                    <Card.Title style={{textAlign:'center'}}><b>The University of Hong Kong</b></Card.Title>
                    <Card.Text>
                        <b>Level:</b> Undergraduate <br/>
                        <b>Major</b>: Computer Science
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={UofTLogo} height={400}/>
                    <Card.Body>
                    <Card.Title style={{textAlign:'center'}}><b>The University of Toronto</b></Card.Title>
                    <Card.Text>
                        <b>Level:</b> Undergraduate - Exchange Semester<br/>
                        <b>Major</b>: Computer Science
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardDeck>
        </Container>
    )
}

export default Education;