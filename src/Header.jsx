import React, { useState } from 'react'

import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBBtn,
  MDBNavbarNav,
  MDBIcon,
  MDBInputGroup
} from 'mdb-react-ui-kit';

  





  
function Header() {


  const [openNavNoTogglerThird, setOpenNavNoTogglerThird] = useState(false);

  return (
    <>
         <MDBNavbar expand='lg' light bgColor='black'>
        <MDBContainer fluid>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarTogglerDemo03'
            aria-controls='navbarTogglerDemo03'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setOpenNavNoTogglerThird(!openNavNoTogglerThird)}
          >
            <MDBIcon icon='bars' />
          </MDBNavbarToggler>
          <MDBNavbarBrand href='/'><h3 style={{color:"white"}}><b style={{color:"red"}}>CINEMA</b>&nbsp;FACTORY</h3></MDBNavbarBrand>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <MDBCollapse navbar open={openNavNoTogglerThird}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
              <h5 style={{color:"white"}}>Home</h5>
              </MDBNavbarItem> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <MDBNavbarItem>
              <h5 style={{color:"white"}}>Movies</h5>
              </MDBNavbarItem>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <MDBNavbarItem>
              <h5 style={{color:"white"}}>Web Series</h5>
              </MDBNavbarItem>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <MDBNavbarItem>
              <h5 style={{color:"white"}}>News</h5>
              </MDBNavbarItem>
            </MDBNavbarNav>
            </MDBCollapse>
            </MDBContainer>
      </MDBNavbar>

              
  

    </>
  )
}

export default Header