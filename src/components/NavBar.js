import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import logo from "../static/logos/light-cropped.png";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const links = this.props.links.map((link) => {
            return (
                <NavLink
                    key={link.id}
                    to={link.path}
                    className="pri-font text-white mx-3 p-1"
                    exact
                >
                    {link.text}
                </NavLink>
            );
        });

        return (
            <Navbar className={`pri-bg justify-content-between ${this.props.pos}-top`}>
                <Navbar.Brand href="/">
                    <Image src={logo} width="195" height="60" />
                </Navbar.Brand>
                <Nav>{links}</Nav>
            </Navbar>
        );
    }
}

export default NavBar;
