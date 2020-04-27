import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import SanskritiLogo from '../assets/img/SanskritiLogo.png';
import HKULogo from '../assets/img/HKULogo.jpg';
import UofTLogo from '../assets/img/UofTLogo.png';
import Accordion from 'react-bootstrap/Accordion';
import Parser from 'html-react-parser';
import Button from 'react-bootstrap/Button'

const dev = "<education>"
const devclose = "</education>"

const courses = [
    {   level: 'Level 3 - Computer Science',
        courses: ['Design and Analysis of Algorithms', 
        'Introduction to Software Engineering',
        'Introduction to Database Management System',
        'Introduction to Artificial Intelligence',
        'Modern Technologies on World Wide Web',
        'Interactive Mobile Application Design and Programming'
        ]
    },
    {   level: 'Level 2 - Computer Science',
        courses: ['Discrete Mathematics',
        'Programming Technologies and Tools',
        'Introduction to Data Structures and Algorithms',
        'Computer Oragnization',
        'Object Oriented Programming and Java'
        ]
    },
    {   level: 'Level 1 - Common Engineering',
        courses: ['Computer Programming and Application',
        'Calculus and ordinary differential equations',
        'Physics for engineering students',
        'Introduction to Computer Science',
        'Introduction to Industrial Management and Logistics',
        'Linear Algebra, Probability and Statistics',

        ]
    },
    {   level: 'Others',
        courses: ['Chinese Level 1 - Language',
        'Coporate Finance - Finance',
        'Introduction to financial accounting - Accounting',
        'Elementary Logic - Philosophy',
        'Sexuality and Culture - Common Core',
        'Shaping our health accross cultures - Common Core',
        'Mans up - Masculinities in the Making - Common Core',
        'Blessings or Curse? World Heritage Site - Common Core',
        'Chasing Biomedical Miracles - Common Core',
        'Electronic Technologies in everyday life - Common Core'
        ]
    }
]

const education=[
    {
        image: SanskritiLogo,
        name: 'Sanskriti School, India',
        level: 'High School',
        subjects: '<b>Subjects:</b> Physics, Chemistry, Math and Computer Science <br/>',
        score: '<b>Score:</b> 95.5%',
        paddingL: '85px',
        paddingR: '85px'

    },
    {
        image: HKULogo,
        name: 'The University of Hong Kong, Hong Kong SAR',
        level: 'Undergraduate - BENG CS',
        subjects: '<b>Major</b>: Computer Science <br/>',
        score: '<b>CGPA</b>: 3.46/4.3',
        paddingL: '85px',
        paddingR: '85px'
    },
    {
        image: UofTLogo,
        name: 'The University of Toronto, Canada',
        level: 'Undergraduate - Exchange Semester',
        subjects: '<b>Major</b>: Computer Science',
        score: '',
        paddingL: '65px',
        paddingR: '65px'
    }

]


function Education (){
    return (
        <Container>
            <Row>
                <h1 style={{paddingTop:'10vh', color:'white'}}><b>{dev}</b></h1>
            </Row>
            <Row style={{display: 'flex', justifyContent: 'center'}}>
            <CardDeck style={{width:'80%',  paddingTop:'5vh', paddingBottom: '5vh'}}>
                {
                    education.map(school=>(
                        <Card>
                            <Card.Img variant="top" src={school.image} height={180} style={{paddingTop: '30px', paddingBottom: '30px', paddingLeft: school.paddingL, paddingRight:school.paddingR}}/>
                            <Card.Body>
                            <Card.Title style={{textAlign:'center'}}><b>{school.name}</b></Card.Title>
                            <Card.Text>
                                <b>Level:</b> {school.level} <br/>
                                {Parser(school.subjects)}
                                {Parser(school.score)}
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    ))
                }
            </CardDeck>
            </Row>
            <Row style={{display: 'flex', justifyContent: 'center'}}>
                <Accordion style={{width:'40%'}} >
                    <Card className='w-100' bg={'light'}>
                        <Accordion.Toggle   style={{textAlign:'center'}} as={Card.Header} eventKey="0">
                            <Button variant="outline-dark"><b><u>Courses</u></b></Button>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            {courses.map(current=>(
                                <Accordion  defaultActiveKey="1" style={{padding:'4px'}}>
                                    <Card className='w-100' bg={'light'} text={'dark'}>
                                        <Accordion.Toggle  style={{textAlign:'center'}} as={Card.Header} eventKey="0">
                                            <Button variant="outline-dark">
                                                <b>{current.level}</b>
                                            </Button>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <ul>
                                                {current.courses.map(course=>(
                                                    <li>{course}</li>
                                                ))}
                                            </ul>
                                        </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            ))}
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Row>
            <Row>
                <h1 style={{paddingTop:'5vh', paddingBottom:'12.5vh',  color: 'white'}}><b>{devclose}</b></h1>
            </Row>
        </Container>
    )
}

export default Education;