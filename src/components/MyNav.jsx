import { Navbar, Container, Nav } from "react-bootstrap";

const MyNav = props => (
    <Navbar expand="lg" className="navbar-dark" style={{ backgroundColor: "#221f1f" }}>
        <Container fluid>
            <Navbar.Brand href="#home">
                <img
                    src={props.Img}
                    alt="Logo"
                    width="100px"
                    height="55px"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#" className="active" >TV Shows</Nav.Link>
                    <Nav.Link href="#">Movies</Nav.Link>
                    <Nav.Link href="#">Recently Added</Nav.Link>
                    <Nav.Link href="#">My List</Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                    <Nav.Link href="#">Kids</Nav.Link>
                    <Nav.Link href="#">Profile</Nav.Link>
                    <Nav.Link href="#">Settings</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);


export default MyNav;