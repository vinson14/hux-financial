import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Tabletop from "tabletop";

import Header from "../components/Header";

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
                    <Row>
                        {this.state.profiles.map((profile) => (
                            <Col xs={12} md={6} lg={4} key={profile.row}>
                                <Card>
                                    <Card.Img src={require(`../static/img/${profile.img}`)} />
                                    <Card.Body>
                                        <Card.Title className="pri-font font-weight-bold">
                                            {profile.name}
                                        </Card.Title>
                                        <Card.Text className="sec-font">
                                            {profile.title}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default About;
