import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import Header from "../components/Header";

class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <Header pos="fixed" />
                <Container className="h-100 d-flex align-items-center">
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
                            <Button
                                variant="outline-light"
                                className="pri-font text-white my-3"
                            >
                                Find out more
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;
