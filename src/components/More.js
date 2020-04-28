
import React from "react";
import Container from "react-bootstrap/Container";
import Carousel from 'react-bootstrap/Carousel';
import Parser from 'html-react-parser';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/Row";
import Form from 'react-bootstrap/Form';
import NetlifyForm from 'react-netlify-form';

import img1 from '../assets/more/1.jpg';
import img2 from '../assets/more/2.jpg';
import img3 from '../assets/more/3.jpg';
import img4 from '../assets/more/4.jpg';
import img5 from '../assets/more/5.jpg';
import img6 from '../assets/more/6.jpg';
import img7 from '../assets/more/7.jpg';
import img8 from '../assets/more/8.jpg';

const images = [
    {
        src: img1,
        firstlabel: 'Coorg, India',
        secondlabel: 'My family and I attending a wedding in Southern India with a North Indian theme!'
    },
    {
        src: img2,
        firstlabel: 'Ocean Park, Hong Kong',
        secondlabel: 'Just another weekend in Hong Kong!'
    },
    {
        src: img3,
        firstlabel: 'Dharamshala, India',
        secondlabel: 'Drinking tea right before a 7km trek in the roots of the Himalayas. A road trip to remember!'
    },
    {
        src: img4,
        firstlabel: 'Toronto, Canada',
        secondlabel: 'The last night before we all left for our home countries due to the global pandemic! An abrupt end to our exchange semester.'
    },
    {
        src: img5,
        firstlabel: 'Halong Bay, Vietnam',
        secondlabel: 'A bunch of freshmans trying to make the most out the \'reading week\' by going on a budgeted trip.'
    },
    {
        src: img6,
        firstlabel: 'Ocho Rios, Jamaica',
        secondlabel: 'The country of water falls! Bathing in fresh water looking at the ocean was one of my favourite things.'
    },
    {
        src: img7,
        firstlabel: 'Jaipur, India',
        secondlabel: 'Exploring the beautiful palaces in Rajasthan!'
    },
    {
        src: img8,
        firstlabel: 'Angkor Wat , Combodia',
        secondlabel: 'One of the most beautiful historical sites I have even seen.'
    }

]


const dev = '<developer/>'
function More (){
    return (
        <Container>
            <h1 style={{ paddingTop:'10vh'}}>More than a <b>{dev}</b></h1>
            <div style={{padding:'5vh', textAlign:'center'}}>
            <b> &nbsp; &nbsp; &nbsp; When I am not programming, you can find me in the gym, getting a drink or two with my friends, 
                or travelling. <br/><br/>
                I am a Formula 1 enthusiast as I love driving myself, the precision and the talent required for the sport amazes me. 
                I am always up for trying new sports whenever I get a chance, surfing and horse riding are the ones I particularly enjoyed. And finally, 
                I am sure I could give you a good competition at fussball. </b>
            </div>

            <div style={{textAlign:'center'}}>
                You can see some of my favourite memories and people below! <br/> I really cherish the time that I have spent with 
                my family and friends as I believe that they have helped me become who I am today.
            </div>
            <div style={{display: 'flex', justifyContent: 'center', padding:'5vh'}}>
            <div style={{width: '80vh',}}>
            <Carousel bg={'dark'} style={{width:'100%', height: '500px' }}>
                {
                    images.map(image=>(
                        
                        <Carousel.Item>
                            <img
                            className="d-block w-100 h-50"
                            src={image.src}
                            alt="First slide"
                            style={{height:'100px'}}
                            />
                            <Carousel.Caption>
                            <i><b><h3>{image.firstlabel}</h3></b></i>
                            <div style={{backgroundColor:'white', opacity: '0.7'}}><p style={{color:'black'}}>{Parser(image.secondlabel)}</p></div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))
                }
                
            </Carousel>
            </div>
            </div>
            <Row style={{display: 'flex', justifyContent: 'center', padding:'15px'}}>
                <Accordion  defaultActiveKey="1" style={{width:'40%'}}>
                    <Card className='w-100' bg={'light'} text={'dark'}>
                        <Accordion.Toggle  style={{textAlign:'center'}} as={Card.Header} eventKey="0">
                            <Button variant="outline-dark">
                                <b>Contact Me!</b>
                            </Button>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body style={{textAlign:'left'}}>
                        <NetlifyForm name='Contact Form'>
                            {({ loading, error, success }) => (
                                <div>
                                {loading &&
                                    <div>Loading...</div>
                                }
                                {error &&
                                    <div>Your information was not sent. Please try again later.</div>
                                }
                                {success &&
                                    <div>Thank you for contacting us!</div>
                                }
                                {!loading && !success &&
                                    <Form>
                                        <Form.Group controlId="formGroupEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                        </Form.Group>
                                        <Form.Group controlId="formGroupPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="name" placeholder="Name" />
                                        </Form.Group>
                                        <Form.Group controlId="formGroupMessage">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control type="message" placeholder="Message" />
                                        </Form.Group>
                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </Form>
                                    // <div>
                                    // <input type='text' name='Name' label="name"required />
                                    // <textarea name='Message' required />
                                    // <button>Submit</button>
                                    // </div>
                                }
                                </div>
                            )}
                        </NetlifyForm>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Row>
        </Container>
    )
}

export default More;

