import React from "react";
import Container from "react-bootstrap/Container";

import { SocialIcon } from 'react-social-icons';
import "../styles/links.css";


const urls = [
    'https://www.linkedin.com/in/harsh-nagra-331395180/',
    'https://github.com/HarshNagra',
    'https://www.instagram.com/harshnagra/',
    'mailto:harsh.nagra99@gmail.com'
]



function Footer (){
    return (
        <Container >
            <div style={{padding:'20px'}}>
            {
            urls.map(current=>(
                <SocialIcon  url={current} bgColor="white"/>
            ))
            }
            </div>
            
            
            <b><p className="align-self-center" style={{float: 'center', color:'white', fixed:'bottom'}}> Copyright 2020 &copy; HARSH NAGRA</p></b>
        </Container>
    )
}

export default Footer;