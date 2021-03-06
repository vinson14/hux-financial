import React from "react";
import { Container, Row, Col, Fade } from "react-bootstrap";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

class Contact extends React.Component {
    render() {
        return (
            <Fade in={true} appear={true}>
                <div>
                    <div className="Contact">
                        <Header pos="sticky" />
                        <Container className="my-5">
                            <Row className="my-5">
                                <Col xs={12}>
                                    <h1 className="text-center pri-font">
                                        Send us a message
                                    </h1>
                                </Col>
                            </Row>
                            <Row className="justify-content-center">
                                <Col>
                                    <ContactForm />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <Footer />
                </div>
            </Fade>
        );
    }
}

export default Contact;
