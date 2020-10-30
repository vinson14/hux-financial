import React from "react";
import { Container, Row, Col, Fade } from "react-bootstrap";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

class Home extends React.Component {
    render() {
        return (
            <Fade in={true} appear={true}>
            <div className="Home">
                <Header pos="fixed" />
                <Container className="h-100 d-flex flex-column align-items-center justify-content-center">
                    <Row className="justify-content-center w-100">
                        <Col
                            xs={12}
                            md={6}
                            className="p-5 translucent-black d-flex flex-column justify-content-center align-items-center"
                        >
                            <h1 className="text-center text-white pri-font font-weight-bold">
                                Life is an uphill battle
                            </h1>
                            <h3 className="text-center text-white sec-font my-3">
                                Start your climb with us today{" "}
                            </h3>
                            <Link
                                type="button"
                                className="btn btn-outline-light sec-font my-3"
                                to="/contact"
                            >
                                Find out more
                            </Link>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
            </Fade>
        );
    }
}

export default Home;
