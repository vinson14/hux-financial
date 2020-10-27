import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

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
                    <Link
                        type="button"
                        className="btn btn-outline-dark sec-font"
                        to={`/about/${this.props.profile.link}`}
                    >
                        Learn more
                    </Link>
                </Card.Body>
            </Card>
        );
    }
}

export default ProfileCard;
