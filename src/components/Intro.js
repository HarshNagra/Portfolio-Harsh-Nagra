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
                <Col className="align-self-center" style={{paddingLeft:"10vh", paddingRight:"10vh", paddingTop:"35vh"}}>
                    <h2>Hey there! I am</h2>
                    <h1 style={{fontSize:'70px'}}><b>Harsh Nagra.</b></h1>
                    <br/><br/>
                    <Typist><h2>I am a <b>Software Engineer</b><Typist.Backspace count={19} delay={500}/>an<b> Undergraduate Student</b><Typist.Backspace count={24} delay={500}/>a <b>Creator.</b></h2> </Typist>
                </Col>
                <Col className="align-self-center" style={{paddingRight:"10vh", paddingLeft:"10vh", paddingTop:"35vh"}}>
                    <h3>"You don’t have to make yourself miserable to be successful." <br/>
                    <i style={{float: "right"}}> ~ Andrew Wilkinson </i> 
                    </h3>
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

