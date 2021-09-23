import React from 'react';
import {Navbar, Container} from 'react-bootstrap';
const navbarStle = {
    backgroundColor:'lightblue'
}
const Header = ({title})=>{
    return ( 
     <Navbar style = {navbarStle} variant="light">
         <Container> 
        <Navbar.Brand href="/">{title}</Navbar.Brand>
         </Container>
    </Navbar>)
}
export default Header;