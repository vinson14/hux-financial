import React from "react";
import { Row, Col } from "react-bootstrap";

class Footer extends React.Component {
    render() {
        return (
            <footer className={`w-100 pri-bg ${this.props.pos}-bottom`}>
                <Row className="justify-content-center">
                    <Col xs={12}>
                        <p className="pri-font text-light text-center mt-3">
                            Copyright © 2020 Hux Financial - All Rights
                            Reserved.
                        </p>
                    </Col>
                    <Col xs={10}><p className="t-and-c mb-0">Information is correct as at 30/10/2020</p></Col>
                    <Col xs={10}>
                        <p className="t-and-c mb-0 mt-1">
                            This is not the official website of AIA Singapore
                            Private Limited (Company Registration No.
                            201106386R) (AIA). AIA disclaims all warranties of
                            merchantability and fitness for purpose of the
                            materials on this website. AIA makes no warranties
                            or representations as to the results of the use of
                            the materials on this website in terms of their
                            correctness, accuracy and reliability. Nothing on
                            this website should be regarded as an offer or
                            solicitation to sell insurance products in any
                            country to any person to whom it is unlawful to make
                            such an invitation or solicitation in such a
                            country.”
                        </p>
                    </Col>
                    <Col xs={10}>
                        <p className="t-and-c">
                            Terms of Use. (1) All trademarks, service marks,
                            trade names, product names, icons and logos of AIA
                            are owned by AIA and may not be used without prior
                            written permission from AIA. (2) All AIA products
                            and services referred to in this website (or linked
                            thereto to the website) known as www.huxfinancial.sg
                            (the “Agency Website”) are offered only in countries
                            where such products and services may lawfully be
                            offered by AIA Singapore and the materials on the
                            said Agency Website are not intended for use by
                            persons located in or resident in, countries that
                            restrict the distribution of such materials. (3)
                            Neither the Agency Website nor the link to the
                            products or services on AIA’s corporate website
                            should be regarded as an offer to sell or a
                            solicitation to buy any insurance product or other
                            products or services of AIA in any country to any
                            person to whom it is unlawful to make such
                            invitation or solicitation in such country. (4) No
                            warranties regarding non-infringement of third party
                            rights, security, accuracy, fitness for purpose,
                            merchantability or freedom from computer viruses in
                            the Agency Website or the AIA corporate website
                            (linked thereto) are given by AIA.”
                        </p>
                    </Col>
                </Row>
            </footer>
        );
    }
}

export default Footer;
