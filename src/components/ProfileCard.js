import React from "react";
import { Card, Button } from "react-bootstrap";

class ProfileCard extends React.Component {
    render() {
        return (
            <Card className="border-0 my-3">
                <Card.Img
                    src={`${process.env.PUBLIC_URL}/img/profiles/${this.props.profile.img}`}
                />
                <Card.Body>
                    <Card.Title className="pri-font font-weight-bold">
                        {this.props.profile.name}
                    </Card.Title>
                    <Card.Text className="sec-font">
                        {this.props.profile.title}
                    </Card.Text>
                    <Button variant="outline-dark" className="sec-front">
                        Learn more
                    </Button>
                </Card.Body>
            </Card>
        );
    }
}

export default ProfileCard;
