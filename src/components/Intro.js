import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/intro.css";
import Typing from 'react-typing-animation';


function Intro (){
    return (
        <Container fluid={true}>

            <Row lg={2} sm={1} style={{paddingTop:"30vh", paddingBottom: "25vh"}}>
                <Col className="align-self-center" style={{paddingLeft:"10vh", paddingRight:"10vh", paddingTop:'5vh'}}>
                    <h2>Hey there! I am</h2>
                    <h1 style={{fontSize:'70px'}}><b>Harsh Nagra.</b></h1>
                    <br/><br/>
                    <Typing speed={25}><h2>I am a <b>Software Engineer</b><Typing.Backspace count={19} delay={500}/>an<b> Undergraduate Student</b><Typing.Backspace count={24} delay={500}/>a <b>Creator.</b></h2> </Typing>
                </Col>
                <Col className="align-self-center" style={{paddingRight:"10vh", paddingLeft:"10vh"}}>
                    <Typing speed={20}>
                        <b>
                        <Typing.Delay ms={5300} />
                        <code style={{color: 'black'}}>todo = [Assignments, Project, Applications, Reply to Emails, ....] <br/>
                        enjoy = [Sports, Gym, Music, Drive, ....] <br/><br/></code>
                        <code>def</code><code style={{color: 'black'}}> routine (work, leisure): <br/></code>
                        <code>&nbsp; &nbsp; if</code><code style={{color: 'black'}}> (work &lt; leisure): <br/>
                        &nbsp; &nbsp; &nbsp; &nbsp; Work(todo.next_task()) <br/></code>
                        <code> &nbsp; &nbsp; else</code><code style={{color: 'black'}}>: <br/></code>
                        <code> &nbsp; &nbsp; &nbsp; &nbsp; for</code><code style={{color: 'black'}}> hobby </code><code>in</code><code style={{color: 'black'}}>  enjoy:<br/>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; YouDeserveIt(hobby) <br/> </code>
                        <code> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; break </code><code style={{color: 'green'}}>#ok enough</code>
                        </b>
                    </Typing>
                </Col>
            </Row>
        </Container>
    )
}

export default Intro;

