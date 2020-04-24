import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/intro.css";
import Typing from 'react-typing-animation';
import Parser from 'html-react-parser';

const opentag = "<code> "
const todo = "todo = [Assignments, Project, Applications, Reply to Emails, ....] <br/>"
const enjoy = "enjoy = [Sports, Gym, Music, Drive, ....]<br/><br/>"
const funcDef = "def "
const func = "routine (work, leisure):<br/>"
const ifPurp = "&nbsp; if "
const ifStatement = "(work < leisure): <br/>"
const ifAnswer = "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Work(todo.next_task()) <br/>"
const elsePurp = "&nbsp; else"
const elseStatement = ": <br/>"
const forLoop = "&nbsp; &nbsp; for"
const elseAnswer1part1 = " hobby"
const inStatement = " in"
const elseAnswer1part2 = " enjoy:<br/>"
const elseAnswer2 = "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;YouDeserveIt(hobby)<br/>"
const elseAnswer3 = "&nbsp; &nbsp; &nbsp; &nbsp;break  "
const okenough = " #ok enough </code>"


function Intro (){
    return (
        <Container fluid={true}>

            <Row lg={2} sm={1} style={{paddingTop:"30vh", paddingBottom: "25vh"}}>
                <Col className="align-self-center" style={{paddingLeft:"10vh", paddingRight:"10vh"}}>
                    <h2>Hey there! I am</h2>
                    <h1 style={{fontSize:'70px'}}><b>Harsh Nagra.</b></h1>
                    <br/><br/>
                    <Typing speed={30}><h2>I am a <b>Software Engineer</b><Typing.Backspace count={19} delay={500}/>an<b> Undergraduate Student</b><Typing.Backspace count={24} delay={500}/>a <b>Creator.</b></h2> </Typing>
                </Col>
                <Col className="align-self-center" style={{paddingRight:"10vh", paddingLeft:"10vh"}}>
                    
                        <Typing speed={25}>
                            <b>
                            <Typing.Delay ms={7000} />
                                {Parser(opentag)}
                                {Parser(todo)}
                                {Parser(enjoy)}
                                <code style={{color: 'purple'}}>{Parser(funcDef)}</code> 
                                {Parser(func)}
                                <code style={{color: 'purple'}}>{Parser(ifPurp)}</code>
                                {Parser(ifStatement)}
                                {Parser(ifAnswer)}
                                <code style={{color: 'purple'}}>{Parser(elsePurp)}</code>
                                {Parser(elseStatement)}
                                <code style={{color: 'purple'}}>{Parser(forLoop)}</code>
                                {Parser(elseAnswer1part1)}
                                <code style={{color: 'purple'}}>{Parser(inStatement)}</code>
                                {Parser(elseAnswer1part2)}
                                {Parser(elseAnswer2)}
                                <code style={{color: 'purple'}}>{Parser(elseAnswer3)}</code>
                                <code style={{color: 'darkgreen'}}>{Parser(okenough)}</code>
                            </b>
                        </Typing>
       
                </Col>
            </Row>
        </Container>
    )
}

export default Intro;

