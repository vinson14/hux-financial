import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tabletop from "tabletop";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ProfileCard from "../components/ProfileCard";

class About extends React.Component {
    constructor() {
        super();
        this.state = {
            profiles: [],
        };
    }

    getProfiles = async () => {
        const doc = await Tabletop.init({
            key:
                "https://docs.google.com/spreadsheets/d/1pz8JCy_ZvHgik3fNElwTSFybFvX-Iw1iR2-2-Nz-uXE/edit?usp=sharing",
            simpleSheet: false,
        });

        this.setState({
            profiles: doc.Agents.elements,
        });
    };

    componentDidMount() {
        this.getProfiles();
    }

    render() {
        return (
            <div className="about">
                <Header pos="sticky" />
                <Container>
                    <Row className="my-5">
                        <Col>
                            <h1 className="pri-font text-center">Our Team</h1>
                        </Col>
                    </Row>
                    <Row>
                        {this.state.profiles.map((profile) => (
                            <Col xs={12} md={6} lg={4} key={profile.row}>
                                <ProfileCard profile={profile} />
                            </Col>
                        ))}
                    </Row>
                </Container>
                <Footer pos=""/>
            </div>
        );
    }
}

export default About;
