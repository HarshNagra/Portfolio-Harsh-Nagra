import React from "react";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import SanskritiLogo from '../assets/img/SanskritiLogo.png';
import HKULogo from '../assets/img/HKULogo.jpg';
import UofTLogo from '../assets/img/UofTLogo.png';




function Education (){
    return (
        <Container>

            <h1 style={{fontSize:'65px', paddingTop:'10vh'}}><b>Education</b></h1> <i class="fa fa-graduation-cap"></i>
            
            <CardDeck  style = {{paddingTop:'5vh', paddingBottom:'10vh'}}>
                <Card>
                    <Card.Img variant="top" src={SanskritiLogo} height={250} style={{paddingTop: '30px', paddingBottom: '30px', paddingLeft: '85px', paddingRight:'85px'}}/>
                    <Card.Body>
                    <Card.Title style={{textAlign:'center'}}><b>Sanskriti School, India</b></Card.Title>
                    <Card.Text>
                        <b>Level:</b> High School <br/>
                        <b>Subjects</b>: Physics, Chemistry, Math and Computer Science <br/>
                        <b>Score</b>: 95.5%
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={HKULogo} height={250} style={{paddingTop: '30px', paddingBottom: '30px', paddingLeft: '85px', paddingRight:'85px'}}/>
                    <Card.Body>
                    <Card.Title style={{textAlign:'center'}}><b>The University of Hong Kong, Hong Kong SAR</b></Card.Title>
                    <Card.Text>
                        <b>Level:</b> Undergraduate <br/>
                        <b>Major</b>: Computer Science <br/>
                        <b>CGPA</b>: 3.46/4.3
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={UofTLogo} height={250} style={{paddingTop: '30px', paddingBottom: '30px', paddingLeft: '65px', paddingRight:'65px'}}/>
                    <Card.Body>
                    <Card.Title style={{textAlign:'center'}}><b>The University of Toronto, Canada</b></Card.Title>
                    <Card.Text>
                        <b>Level:</b> Undergraduate - Exchange Semester<br/>
                        <b>Major</b>: Computer Science <br/>
                        <b>CGPA</b>: Not Applicable
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