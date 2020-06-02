
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card'
import Parser from 'html-react-parser';
import CardColumns from 'react-bootstrap/CardColumns';
import Row from 'react-bootstrap/Row';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

const dev = "<projects>"
const devclose = "</projects>"

const projs =[
    {
        category: [
            'all',
            'softdev',
            'favorite'
        ],
        name: '<b>Todo App - Full Stack</b>',
        subtitle: 'This application let\'s the user login using Jwt and spring security to create, save and update their todos',
        text: '<i>PWA-Spring Boot JWT-H2 JPA-ReactJS-Material UI</i> ',
        buttons: [
            {
                name: 'Video',
                href: 'https://drive.google.com/file/d/1aUtitzqu06ibs0KCbH_zC9fJhmOFHEN4/view?usp=sharing'
            },
            {
                name: 'Github',
                href: 'https://github.com/HarshNagra/todo-app-springboot-react'
            }
        ]
    },
    {
        category: [
            'all',
            'softdev',
            'favorite'
        ],
        name: '<b>Portfolio</b>',
        subtitle: 'I am in front of you! This whole application was built from scratch.',
        text: '<i>ReactJS-Bootstrap-Netlify</i> ',
        buttons: [
            {
                name: 'View Me',
                href: 'http://harshnagra.netlify.com',
            },
            {
                name: 'Github',
                href: 'https://github.com/HarshNagra/portfolio-harsh-nagra'
            }
        ]
    },
    {
        category: [
            'all',
            'softdev',
            'favorite'
        ],
        name: '<b>Visor App </b>',
        subtitle: 'To replace the visor card used by deaf people.',
        text: ' <i>PWA-ReactJS-Material UI-Netlify</i>',
        buttons: [
            {
                name: 'View Me',
                href: 'http://oad.netlify.com',
            },
            {
                name: 'Github',
                href: 'https://github.com/BriAccess/BriAccess'
            },
            {
                name: 'Org',
                href: 'https://www.deafontario.ca/'
            }
        ]
    },
    {
        category: [
            'all',
            'softdev',
            'favorite'
        ],
        name: '<b>iAlbums</b>',
        subtitle: 'Full stack application with login to view your and your friends images.',
        text: '<i>MongoDB-ExpressJS-ReactJS-NodeJS</i> ',
        buttons: [
            {
                name: 'Github',
                href: 'https://github.com/HarshNagra/iAlbums-MERN-Stack'
            }
        ]
    },
    {
        category: [
            'all',
            'softdev'
        ],
        name: '<b>Webmain-System</b>',
        subtitle: 'Full stack application to view, transfer and compose emails.',
        text: '<i>MongoDB-ExpressJS-JS-NodeJS</i> ',
        buttons: [
            {
                name: 'Github',
                href: 'https://github.com/HarshNagra/Webmail-System'
            }
        ]
    },
    {
        category: [
            'all',
            'AI',
            'favorite'
        ],
        name: '<b>Artificial Intelligence</b>',
        subtitle: '<ol><li>Sokoban Game Solver using <b>Search</b></li><li>Futoshiki Solver using <b>Constraint Satisfaction</b></li><li>Bayesian Network with Variable Elimination</li></ol>',
        text: '<i>Python3</i> ',
        buttons: [
            {
                name: 'Github',
                href: 'https://github.com/HarshNagra/Artificial-Intelligence'
            }
        ]
    },
    {
        category: [
            'all',
            'algos',
            'favorites'
        ],
        name: '<b>Huffman Encoder & tinyshell</b>',
        subtitle: '<i>Huffman Encoder</i> based on smallest ASCII code & <i>tinyshell</i> is a command line interpreter using gdb and fork',
        text: '<i>C++</i> ',
        buttons: [
            {
                name: 'Github',
                href: 'https://github.com/HarshNagra/Huffman-Encoding'
            }
        ]
    },
    {
        category: [
            'all',
            'favorite',
            'games'
        ],
        name: '<b>Big Two Card Game</b>',
        subtitle: 'Multiplayer (4 players) card game implemented using Java with a Graphic User Interface',
        text: '<i>Java</i> ',
        buttons: [
            {
                name: 'Github',
                href: 'https://github.com/HarshNagra/Big-Two-Card-Game'
            }
        ]
    },
    {
        category: [
            'all',
            'softdev',
            'games'
        ],
        name: '<b>Card24 Game App</b>',
        subtitle: 'Card24 game implemented using Java for Android Devices',
        text: '<i>Android Studio</i> ',
        buttons: [
            {
                name: 'Github',
                href: 'https://github.com/HarshNagra/Card24'
            }
        ]
    },
    {
        category: [
            'all',
            'softdev',
            'favorite'
        ],
        name: '<b>Theater Blocking</b>',
        subtitle:  'To help theater professionals plan the blocking of their play',
        text: '<i>JS-CSS-Python Flask-Heroku</i>  ',
        buttons: [
            {
                name: 'Github',
                href: 'https://github.com/HarshNagra/theater-blocking'
            }
        ]
    },
    {
        category: [
            'all',
            'softdev'
        ],
        name: '<b>Pizza Delivery API</b>',
        subtitle:  'To view the menu, place an order & schedule delivery of a Pizza shop',
        text: '<i>Python Flask-Heroku</i>  ',
        buttons: [
            {
                name: 'Github',
                href: 'https://github.com/HarshNagra/pizza-delivery-api'
            }
        ]
    },

]

function Projects (){
    const [cat, setCat] = useState('all');
    return (
        <Container >
            <Row>
                <h1 style={{ paddingTop:'10vh'}}><b>{dev}</b></h1>
            </Row>
            <Row style={{display: 'flex', justifyContent: 'center', padding:'20px'}}>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="dark" onClick={() => setCat('all')}>All</Button>
                    <Button variant="dark" onClick={() => setCat('favorite')}>&#9734; My Favourites</Button>
                    <Button variant="dark" onClick={() => setCat('softdev')}>Soft Dev</Button>
                    <Button variant="dark" onClick={() => setCat('AI')}>Artificial Intelligence</Button>
                    <Button variant="dark" onClick={() => setCat('games')}>Games</Button>
                </ButtonGroup>
            </Row>
            <Row>
                <CardColumns lg={4}>
                {projs.map(proj=>{
                    if(proj.category.includes(cat))
                    return <Card className="p-3" style={{ width: '22.5rem'}} bg={'dark'} text={'light'}>
                        <Card.Body style={{textAlign:'center'}}>
                            <Card.Title style={{textAlign:'center'}}>{Parser(proj.name)}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"><br/>{Parser(proj.subtitle)}</Card.Subtitle>
                            <Card.Text>
                                 {Parser(proj.text)}
                            </Card.Text>
                            {proj.buttons.map(button =>(
                                <Card.Link href={button.href}>{button.name}</Card.Link>
                            ))}
                        </Card.Body>
                    </Card>
                    else 
                    return null
                }) }
                </CardColumns>
            </Row>
            <Row>
                <h1 style={{ paddingBottom:'10vh'}}><b>{devclose}</b></h1>
            </Row>
            
        </Container>
    )
}

export default Projects;