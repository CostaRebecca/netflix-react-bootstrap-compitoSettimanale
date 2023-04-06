import { Component } from "react";
import { Container, Button, DropdownButton, Dropdown } from "react-bootstrap";

import MyGallery from "./MyGallery";


class MyMain extends Component {
    state = {
        movies: []
    };



    render() {

        return (
            <Container fluid style={{ backgroundColor: "#221f1f" }} className="text-light">
                <div className="d-flex">
                    <div className="d-flex">
                        <h2 className="mb-4">TV Shows</h2>
                        <DropdownButton
                            variant="secondary"
                            size="sm"
                            className="rounded-0 mx-4 my-2"
                            title="Titles">
                            <Dropdown.Item href="#">Harry Potter</Dropdown.Item>
                            <Dropdown.Item href="#">The Office</Dropdown.Item>
                            <Dropdown.Item href="#">The Lord of the Rings</Dropdown.Item>
                        </DropdownButton>
                    </div>
                    <div>
                        <Button variant="link">
                            <i className="fa fa-th-large icons"></i>
                        </Button>
                        <Button variant="link">
                            <i className="fa fa-th icons"></i>
                        </Button>
                    </div>
                </div>
                <MyGallery title="Trending Now" name={
                    "Harry Potter"
                } />
                <MyGallery title="Watch it Again" name={
                    "The Office"
                } />
                <MyGallery title="New Releases" name={
                    "The Lord of the Rings"
                } />


            </Container>
        );
    }
}

export default MyMain;