import { Container, Row, Col, Button } from "react-bootstrap";

const MyFooter = props => (

    <Container fluid className="mt-5" style={{ backgroundColor: "#221f1f" }}>
        <Row className="text-center">
            <Col md={{ span: 6, offset: 3 }}>

               

                <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4">
                    <Col>
                        <Row>
                            <Col xs={12} className="text-start my-4 mb-0">

                                <p className="m-1" style={{ fontSize: "0.7em" }}>
                                    <a href="#" alt="footer link" className="text-decoration-none text-light fw-light opacity-75">Audio and Subtitles</a>
                                </p>
                                <p className="m-1" style={{ fontSize: "0.7em" }}>
                                    <a href="#" alt="footer link" className="text-decoration-none text-light fw-light opacity-75">Media center</a>
                                </p>
                                <p className="m-1" style={{ fontSize: "0.7em" }}>
                                    <a href="#" alt="footer link" className="text-decoration-none text-light fw-light opacity-75">Privacy</a>
                                </p>
                                <p className="m-1" style={{ fontSize: "0.7em" }}>
                                    <a href="#" alt="footer link" className="text-decoration-none text-light fw-light opacity-75">Contact us</a>
                                </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col xs={12} className="text-start my-4">

                                <p className="m-1" style={{ fontSize: "0.7em" }}>
                                    <a href="#" alt="footer link" className="text-decoration-none text-light fw-light opacity-75">Audio Description</a>
                                </p>
                                <p className="m-1" style={{ fontSize: "0.7em" }}>
                                    <a href="#" alt="footer link" className="text-decoration-none text-light fw-light opacity-75">Investor Relations</a>
                                </p>
                                <p className="m-1" style={{ fontSize: "0.7em" }}>
                                    <a href="#" alt="footer link" className="text-decoration-none text-light fw-light opacity-75">Legal Notices</a>
                                </p>

                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col xs={12} className="text-start my-4">

                                <p className="m-1" style={{ fontSize: "0.7em" }}>
                                    <a href="#" alt="footer link" className="text-decoration-none text-light fw-light opacity-75">Help Center</a>
                                </p>
                                <p className="m-1" style={{ fontSize: "0.7em" }}>
                                    <a href="#" alt="footer link" className="text-decoration-none text-light fw-light opacity-75">Jobs</a>
                                </p>
                                <p className="m-1" style={{ fontSize: "0.7em" }}>
                                    <a href="#" alt="footer link" className="text-decoration-none text-light fw-light opacity-75">Cookie Preferences </a>
                                </p>

                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col xs={12} className="text-start my-4">

                                <p className="m-1" style={{ fontSize: "0.7em" }}>
                                    <a href="#" alt="footer link" className="text-decoration-none text-light fw-light opacity-75">Gift Card</a>
                                </p>
                                <p className="m-1" style={{ fontSize: "0.7em" }}>
                                    <a href="#" alt="footer link" className="text-decoration-none text-light fw-light opacity-75">Terms of Use</a>
                                </p>
                                <p className="m-1" style={{ fontSize: "0.7em" }}>
                                    <a href="#" alt="footer link" className="text-decoration-none text-light fw-light opacity-75">Corporate Information</a>
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className="text-start" >
                        <Button variant="outline-light" className="btn-sm footer-button rounded-0 m-2 ms-0  opacity-75">
                            Service Code
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className="text-decoration-none text-start text-light fw-light opacity-75" >
                        <p className="m-1 ms-0 mb-2" style={{ fontSize: "0.7em" }}>
                            © 1997-2022 Netflix, Inc.
                        </p>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>

);

export default MyFooter;