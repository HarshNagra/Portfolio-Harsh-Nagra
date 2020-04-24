import React from "react";
import Container from "react-bootstrap/Container";



function Footer (){
    return (
        <Container style={{fixed:'bottom', backgroundColor:'black'}}>
            <p className="align-self-center" style={{float: 'center', color:'white', fixed:'bottom'}}> &copy; HARSH NAGRA 2020</p>
        </Container>
    )
}

export default Footer;