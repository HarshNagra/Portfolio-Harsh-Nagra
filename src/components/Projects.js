
import React from "react";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card'
import Parser from 'html-react-parser';
import CardColumns from 'react-bootstrap/CardColumns'

const dev = "<projects>"
const devclose = "</projects>"

const projs =[
    {
        name: '<b>Portfolio</b>',
        subtitle: 'I am in front of you! Literally.',
        text: '<i>ReactJS - Bootstrap - Netlify</i> ',
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
        name: '<b>Visor App </b>',
        subtitle: 'To replace the visor card used by the deaf people.',
        text: ' <i>PWA - ReactJS - Material UI - Netlify</i>',
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
        name: '<b>Artificial Intelligence</b>',
        subtitle: 'Sokoban Game Solver using Search, Futoshiki Solver using Constraint Satisfaction and Bayesian Network with Variable Elimination',
        text: '<i>Python3</i> ',
        buttons: [
            {
                name: 'Github',
                href: 'https://github.com/HarshNagra/Artificial-Intelligence'
            }
        ]
    },
    {
        name: '<b>iAlbums</b>',
        subtitle: 'Full stack application with login to view your and your freinds images.',
        text: '<i>MongoDB-ExpressJS-ReactJS-NodeJS</i> ',
        buttons: [
            {
                name: 'Github',
                href: 'https://github.com/HarshNagra/iAlbums-MERN-Stack'
            }
        ]
    },
    {
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
        name: '<b>Huffman Encoder & tinyshell</b>',
        subtitle: '<i>Huffman Encoder</i> based on smallest ASCII code & <i>tinyshell</i> is a command line interpreter using gdb and fork',
        text: '<i>C++</i> ',
        buttons: [
            {
                name: 'Github',
                href: 'https://github.com/HarshNagra/Card24'
            }
        ]
    },
    {
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
        name: '<b>Theater Blocking</b>',
        subtitle:  'To help theater professionals plan the blocking of their play',
        text: '<i>JS - CSS - Python FLask - Heroku</i>  ',
        buttons: [
            {
                name: 'Github',
                href: 'https://github.com/HarshNagra/theater-blocking'
            }
        ]
    }
]

function Projects (){
    return (
        <Container >
            <h1 style={{fontSize:'65px', paddingTop:'5vh'}}><b>{dev}</b></h1>
                <CardColumns lg={4}>
                {projs.map(proj=>(
                    <Card className="p-3" style={{ width: '22.5rem'}} bg={'dark'} text={'light'}>
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
                ))}
                </CardColumns>
            <h1 style={{fontSize:'65px'}}><b>{devclose}</b></h1>
            
        </Container>
    )
}

export default Projects;