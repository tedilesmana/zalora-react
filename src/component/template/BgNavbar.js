import React, { Component } from "react";
import { MDBNavbar } from "mdbreact";

class BgNavbar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <div className="container-fluid" id="bg-navbar">
        <MDBNavbar color="black" dark expand="md">
        </MDBNavbar>
    </div>
    );
  }
}

export default BgNavbar;