import React from 'react'
import {Nav,Form,Button,FormControl,NavDropdown, Container, Row, Col, NavLink} from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
const NavbarJS = () => {

    
    return (
        <>
       <Navbar  expand="lg" variant="light" >
         <div className="container">             
    <Navbar.Brand href="#"><img src="/images/image.png"  style={{marginTop:"25px"}}  alt="none"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="navbarRight"
      // navbarScroll
    >
       <ul className="navbarItem" type="none">
          <li className="listItem">
            <Link className="navLinkItem" to="/vikings">Vikings</Link>
          </li>
          <li className="listItem">
            <Link className="navLinkItem" to="/egypt">Ancient Egypt</Link>
          </li>
          <li className="listItem">
            <Link className="navLinkItem " to="/celtics">Celtics</Link>
          </li>
          <li className="listItem">
            <Link className="navLinkItem active" style={{textTransform:"uppercase"}} to="/sale">Sale</Link>
          </li>
          <li className="listItem">
            <Link className="navLinkItem " to="/celtics">
              <SearchOutlinedIcon  style={{height:"24px"}} fontSize={'default'}/>
            </Link>
            <Link className="navLinkItem" to="/celtics">
              <ShoppingCartOutlinedIcon fontSize={'default'} style={{marginLeft:"20px",height:"24px"}}/>
            </Link>
          </li>
        </ul>
    </Nav>
  </Navbar.Collapse>
         </div>
      </Navbar>
  
</>
    )
}

export default NavbarJS

