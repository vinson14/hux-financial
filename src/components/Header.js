import React from "react";

import NavBar from "./NavBar";
import NavBarMobile from './NavBarMobile';

const MOBILEWIDTH = 992;

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile: false,
            links: [
                { id: 1, text: "Home", path: "/" },
                { id: 2, text: "Our Team", path: "/about" },
                { id: 3, text: "Contact Us", path: "/contact" },
            ],
        };
    }

    handleWindowResize = () => {
        this.setState({
            isMobile: window.innerWidth < MOBILEWIDTH,
        });
    };

    componentDidMount() {
        this.setState({
            isMobile: window.innerWidth < MOBILEWIDTH,
        });
        window.addEventListener("resize", this.handleWindowResize);
    }

    render() {
        
        if (this.state.isMobile) {
            return (
                <NavBarMobile links={this.state.links} pos={this.props.pos}/>
            )
        }
        return <NavBar links={this.state.links} pos={this.props.pos}/>;
    }
}

export default Header;
