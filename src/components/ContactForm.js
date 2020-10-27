import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";

class ContactForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            contact: "",
            message: "",
            submitted: false,
            displayMsg: "Thank you for contacting us, we will be in touch soon",
            error: false,
        };
    }

    validateEmail = (email) => {
        const emailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!email.match(emailformat)) {
            return false;
        } else {
            return true;
        }
    };

    handleInputChange = (event) => {
        const target = event.target;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        if (name === "email") {
            if (value !== "" && !this.validateEmail(value)) {
                console.log("please enter a valid email");
            }
        }

        this.setState({
            [name]: value,
        });
    };

    handleOnSubmit = (event) => {
        event.preventDefault();
        const inputs = {
            name: this.state.name,
            email: this.state.email,
            contact: this.state.contact,
            message: this.state.message,
        };

        axios({
            method: "POST",
            url: "https://formspree.io/f/mpzodvbr",
            data: inputs,
        })
            .then((res) => {
                this.setState({
                    submitted: true,
                });
            })
            .catch((res) => {
                console.log(res.response);
                this.setState({
                    submitted: true,
                    error: true,
                    displayMsg:
                        "Something went wrong, please ensure your email is entered correctly",
                });
            });
    };

    render() {
        if (this.state.submitted) {
            return (
                <Row>
                    <Col>
                        <h1 className="pri-font text-center">
                            {this.state.displayMsg}
                        </h1>
                    </Col>
                </Row>
            );
        }
        return (
            <Form>
                <Row className="justify-content-center">
                    <Col xs={10} md={6} lg={4}>
                        <Form.Group>
                            <Form.Control
                                type="text"
                                name="name"
                                placeholder="Name"
                                onChange={this.handleInputChange}
                                value={this.state.name}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col xs={10} md={6} lg={4}>
                        <Form.Group>
                            <Form.Control
                                type="text"
                                name="email"
                                placeholder="Email"
                                onChange={this.handleInputChange}
                                value={this.state.email}
                            />
                        </Form.Group>
                    </Col>
                    <Col xs={10} md={6} lg={4}>
                        <Form.Group>
                            <Form.Control
                                type="text"
                                name="contact"
                                placeholder="Contact No."
                                onChange={this.handleInputChange}
                                value={this.state.contact}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={10} md={8} lg={8}>
                        <Form.Group>
                            <Form.Control
                                as="textarea"
                                rows="8"
                                name="message"
                                placeholder="Message"
                                onChange={this.handleInputChange}
                                value={this.state.message}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center my-3">
                        <Button
                            variant="outline-dark"
                            onClick={this.handleOnSubmit}
                        >
                            Send message
                        </Button>
                    </Col>
                </Row>
            </Form>
        );
    }
}

export default ContactForm;
