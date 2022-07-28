import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  Button,
} from 'reactstrap';
import vektor from "../images/Vector.png"
export default class TopNav extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div className="container-fluid">
                <Navbar className="d-flex justify-content-around " light expand="md">
                    <NavbarBrand href="/" className={"px-5"}>
                        <img src={vektor} alt={"vektor"}/>
                        Wealthfront
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar>
                            <NavItem className="d-flex justify-content-between">
                                <NavLink href="/invest">Invest</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/cash">Cash</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/borrow">Borrow</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/blog">Blog</NavLink>
                            </NavItem>
                            <div className="buttons">
                                <Button className="btn1">Log In</Button>
                                <Button className="btn btn2" color="primary">Get Started</Button>
                            </div>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}