
import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card'
import iAlbums from '../assets/img/ProjectiAlbums.jpg';
import WebSystem from '../assets/img/ProjectWebSystem.png';

import BigTwo from '../assets/img/ProjectBigTwo.png';

const dev = "<projects>"
const devclose = "</projects>"


function About (){
    return (
        <Container style={{paddingBottom:'20vh'}}>
            <Row >
                <h1 style={{fontSize:'65px', paddingBottom:'10vh'}}><b>{dev}</b></h1>
            </Row>
            <Row lg={4}>
                <Col >
                    <Card style={{ width: '16rem' }} bg={'dark'} text={'light'}>
                        <Card.Body style={{textAlign:'center'}}>
                            <Card.Title style={{textAlign:'center'}}><b>Portfolio</b></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"><br/>I'm in front of you! Literally.</Card.Subtitle>
                            <Card.Text>
                                 <i>ReactJS - Bootstrap</i> 
                            </Card.Text>
                            <Card.Link href="http://harshnagra.netlify.com">View Me</Card.Link>
                            <Card.Link href="">Github</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '16rem' }} bg={'light'} text={'dark'}>
                        <Card.Body style={{textAlign:'center'}}>
                            <Card.Title style={{textAlign:'center'}}><b>Visor App <i>for</i><br/> The Ontario Association of Deaf</b></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                            <Card.Text>
                                <i>PWA - ReactJS - Material UI</i>
                            </Card.Text>
                            <Card.Link href="https://www.deafontario.ca/">Org</Card.Link>
                            <Card.Link href="http://oad.netlify.com">View Me</Card.Link>
                            <Card.Link href="https://github.com/BriAccess/BriAccess">Github</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '16rem' }} bg={'dark'} text={'light'}>
                        <Card.Body style={{textAlign:'center'}}>
                            <Card.Title style={{textAlign:'center'}}><b>Theater Blocking</b></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"><br/></Card.Subtitle>
                            <Card.Text>
                                <i>Html - JS - Python FLask</i> <br/> <br/>
                            </Card.Text>
                            <Card.Link href="https://github.com/HarshNagra/theater-blocking">Github</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '16rem' }} bg={'light'} text={'dark'}>
                        <Card.Body style={{textAlign:'center'}}>
                            <Card.Title style={{textAlign:'center'}}><b>Pizza Delivery <br/>API</b></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                            <Card.Text>
                                <i>Python Flask</i> <br/> <br/>
                            </Card.Text>
                            <Card.Link href="https://github.com/HarshNagra/pizza-delivery-api">Github</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
            <h1 style={{fontSize:'65px', paddingTop:'10vh'}}><b>{devclose}</b></h1>
            </Row>
            
            
        </Container>
    )
}

export default About;