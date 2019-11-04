import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarNav,
  MDBIcon
} from "mdbreact";

import { withRouter, BrowserRouter as Router } from "react-router-dom";
class PageHeader extends Component {
  constructor() {
    super();
    this.state = {
      collapseID: "",
      collapse: false
    };
  }

  onClick = () => {
    this.setState({
      collapse: !this.state.collapse
    });
  };

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
  };

  render() {
    return (
      <>
        <div className="mb-5">
          <header>
            <MDBNavbar
              dark
              expand="lg"
              scrolling
              fixed="top"
              className="bg-main"
            >
              <MDBNavbarToggler onClick={this.onClick} />
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left className="container-fluid">
                  <MDBNavItem active>
                    <MDBNavLink to="/">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/news">News</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/features">Features</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/order">Pre-Order</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </header>
        </div>
      </>
    );
  }
}

export default withRouter(PageHeader);
