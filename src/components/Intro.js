import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/intro.css";
import Typing from 'react-typing-animation';

const ifStatement = "if (work < leisure):"
const ifAnswer = "  Work(todo[next_task])"
const elseAnswer1 = "for hobby in enjoy:"
const elseAnswer2 = "YouDeserveIt(hobby)"
const elseAnswer3 = "break #ok enough"
function Intro (){
    return (
        <Container fluid={true}>

            <Row lg={2} sm={1} style={{paddingTop:"35vh", paddingBottom: "25vh"}}>
                <Col className="align-self-center" style={{paddingLeft:"10vh", paddingRight:"10vh"}}>
                    <h2>Hey there! I am</h2>
                    <h1 style={{fontSize:'70px'}}><b>Harsh Nagra.</b></h1>
                    <br/><br/>
                    <Typing speed={35}><h2>I am a <b>Software Engineer</b><Typing.Backspace count={19} delay={500}/>an<b> Undergraduate Student</b><Typing.Backspace count={24} delay={500}/>a <b>Creator.</b></h2> </Typing>
                </Col>
                <Col className="align-self-center" style={{paddingRight:"10vh", paddingLeft:"10vh"}}>
                    <code style = {{color: "black"}}>
                        <Typing speed={25}><b>
                            <Typing.Delay ms={7300} />
                        todo = [Assignments, Project, Applications, Reply to Emails, ....] <br/>
                        enjoy = [Sports, Gym, Music, Drive .....]<br/><br/>
                        def routine (work, leisure):<br/>
                        &nbsp; &nbsp;{ifStatement}<br/>
                        &nbsp; &nbsp; &nbsp; &nbsp;{ifAnswer}<br/>
                        &nbsp; &nbsp; else:<br/>
                        &nbsp; &nbsp; &nbsp; &nbsp;{elseAnswer1}<br/>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{elseAnswer2}<br/>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{elseAnswer3}
                        </b></Typing>
                    </code>
                </Col>
            </Row>
        </Container>
    )
}

export default Intro;

