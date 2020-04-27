
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/workexperience.css";
import Bosch from "../assets/img/Bosch.png";
import JPM from "../assets/img/JPMorgan.png";
import Proed from "../assets/img/Proed.png";
import LDP from "../assets/img/LDP.png";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';


const dev = "<experience>"
const devclose = "</experience>"


const internships = [
    {
        company: JPM,
        position: 'Incoming Software Engineering Intern',
        duration: 'June 2020 - August 2020',
        location: 'Central, Hong Kong',
        roles: [
            'TBA'
        ],
        width: '350px'
    },
    {
        company: Proed,
        position: 'Part Time - Web Developer',
        duration: 'September 2019 - November 2019',
        location: 'Central, Hong Kong',
        roles: ['Worked closely with the owners of the startup.',
        'Developed various components for the Business Side Web Application of the firm.'
        ],
        width: '225px',
    },
    {
        company: Bosch,
        position: 'Summer Intern - Developer',
        duration: 'June 2019 - August 2019',
        location: 'Bangalore, India',
        roles: ['Worked on a client (CASE India) software to provide connected mobility solutions.', 
        'Developed a component to adjust the widgets on the landing page of the software to make the web application more user friendly.',
        'Responsible for JSON file creation using data from an excel sheet to make the website multilingual.'
        ],
        width: '370px',
    },
    {
        company: LDP,
        position: 'Volunteer',
        duration: 'June 2018 - June 2018',
        location: 'Manila, Philippines',
        roles: ['It was hosted by HKU Horizons - Common Purpose.',
        'The main tasks included organizing, campaigning and promoting the \'National Clean Up Day\' by attending various forums and events for a NGO called Seed4Com.',
        'I also closely worked with the local community in order to mobilize 5 million individuals for this event.'
        ],
        width: '300px',
    }
]

function WorkExperience (){
    return (
        <Container>
            <Row>
                <h1 style={{ paddingTop:'10vh',color:'white'}}><b>{dev}</b></h1>
            </Row>
            <Row lg={1} >
                {internships.map(current=>(
                    <Row  style={{display: 'flex', justifyContent: 'center', padding:'2vh'}}>
                        <Card style={{width:'45%'}}>
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                <div style={{width:current.width}}>
                                    <Card.Img style={{padding: '10px'}}  height={100} variant="bottom" src={current.company} />
                                </div>
                            </div>
                            <Card.Body>
                            <Card.Text style={{textAlign:'center'}}>
                                <b>{current.position}</b><br/>
                                <i>{current.duration}</i><br/>
                                {current.location}<br/>
                                <Accordion  defaultActiveKey="1" style={{padding:'4px'}}>
                                    <Card className='w-100' bg={'light'} text={'dark'}>
                                        <Accordion.Toggle  style={{textAlign:'center'}} as={Card.Header} eventKey="0">
                                            <Button variant="outline-dark">
                                                <b>Project Details</b>
                                            </Button>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                        <Card.Body style={{textAlign:'left'}}>
                                            {current.roles.map(data=>(
                                                <li>{data}</li>
                                            ))}
                                        </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Row>
                ))}
            </Row>
            <Row>
                <h1 style={{paddingBottom:'17.5vh',color:'white'}}><b>{devclose}</b></h1>
            </Row>
            
        </Container>
    )
}

export default WorkExperience;