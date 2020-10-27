import React from "react";

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className={`d-flex justify-content-center w-100 pri-bg align-items-center p-3 ${this.props.pos}-bottom`}>
                <p className="pri-font text-light text-center m-0">
                    Copyright © 2020 Hux Financial - All Rights Reserved.
                </p>
            </footer>
        );
    }
}

export default Footer;
