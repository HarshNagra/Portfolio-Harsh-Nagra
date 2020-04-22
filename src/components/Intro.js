import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/intro.css";
import Typist from 'react-typist';



function Intro (){
    return (
        <Container fluid={true}>
            <Row lg={2} sm={1} >
                <Col className="align-self-center" style={{paddingLeft:"20vh", paddingTop:"35vh"}}>
                    <div>
                        <h3>Hey there! I am</h3>
                        <h1><b>Harsh Nagra.</b></h1>
                        <br/><br/>
                        <Typist><h4>I am a <b>Software Engineer</b><Typist.Backspace count={17} delay={500}/><b>Undergraduate</b><Typist.Backspace count={13} delay={500}/><b>Creator.</b></h4> </Typist>
                    </div>
                </Col>
                <Col className="align-self-center" style={{paddingRight:"20vh", paddingTop:"35vh"}}>
                    <h5>"You don’t have to make yourself miserable to be successful." <br/>
                    <i style={{float: "right"}}> ~ Andrew Wilkinson </i> 
                    </h5>
                </Col>
            </Row>
            <Row >
                <Col style={{textAlign:'center', paddingTop: '30vh'}}>
                    <h6 ><b>Scroll to find out more!</b></h6>
                </Col>
            </Row>
        </Container>
    )
}

export default Intro;

