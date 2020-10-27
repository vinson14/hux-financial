import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Tabletop from "tabletop";

import Header from "../components/Header";
import Footer from "../components/Footer";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {},
            isLoaded: false,
        };
    }

    getProfile = async () => {
        const doc = await Tabletop.init({
            key:
                "https://docs.google.com/spreadsheets/d/1pz8JCy_ZvHgik3fNElwTSFybFvX-Iw1iR2-2-Nz-uXE/edit?usp=sharing",
            simpleSheet: false,
        });

        this.setState({
            profile: doc.Agents.elements.find(
                (p) => p.link === this.props.match.params.name
            ),
            isLoaded: true,
        });
    };

    componentDidMount() {
        this.getProfile();
    }

    render() {
        if (!this.state.isLoaded) {
            return <div></div>;
        }
        return (
            <div className="Profile">
                <Header />
                <Container className="my-5">
                    <Row>
                        <Col md={6}>
                            <Image
                                src={`${process.env.PUBLIC_URL}/img/profiles/${this.state.profile.img}`}
                                fluid
                            />
                        </Col>
                        <Col
                            md={6}
                            className="d-flex flex-column justify-content-center align-items-center"
                        >
                            <h2 className="pri-font">
                                {this.state.profile.name}
                            </h2>
                            <h5 className="sec-font mb-5">
                                <em>{this.state.profile.title}</em>
                            </h5>
                            <p className="pri-font">
                                {this.state.profile.profile}
                            </p>
                            <p className="mt-5 w-100 pri-font">
                                Mobile no. : {this.state.profile.mobile}
                            </p>
                            <p className="w-100 pri-font">
                                Email : {this.state.profile.email}
                            </p>
                        </Col>
                    </Row>
                </Container>
                <Footer pos="fixed" />
            </div>
        );
    }
}

export default Profile;
