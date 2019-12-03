import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBIcon
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

class Navbar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <div className="container fixed-top">
        <div className="row" id="navbar">
          <div className="col-md-12"> 

            <MDBNavbar color="black" dark expand="md" className=" ml-5 mr-5">
              <MDBNavbarBrand>
                <span className="white-text brand-name">ZALORA</span>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.toggleCollapse} />
              <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to="#!">WANITA</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!">PRIA</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!">ANAK-ANAK</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBFormInline waves>
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                    </MDBFormInline>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!"><MDBIcon icon="user-alt" /></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!"><MDBIcon icon="heart" /></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!"><MDBIcon icon="shopping-bag" /></MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </div>
        </div>
      </div>
    </Router>
    );
  }
}

export default Navbar;