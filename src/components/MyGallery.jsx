import { Component } from "react";
import { Row, Col, Image, Container } from "react-bootstrap";


const API_KEY = "36551cd5";

class MyGallery extends Component {
    state = {
        movies:[]
    };
    fetchMovies= async () =>{
        try {
            const response = await fetch(`http://www.omdbapi.com/?apikey=36551cd5&s=${this.props.name}`);
      
            if (response.ok) {
              const data = await response.json();
              console.log("FETCH RESULT: ", data);
              this.setState({movies:data.Search});
              console.log("SET STATE");
            } 
          } catch (error) {
            console.log(error);
          }
    }

    componentDidMount = () => {
        console.log("COMPONENT DID MOUNT");
        this.fetchMovies();
      };

    render() {
       return (
           <Container fluid>
                <h4 className="d-flex justify-content-start">{this.props.title}</h4>
                <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
                    {this.state.movies.slice(0, 6).map((movie, index) => {
                        console.log(movie);
                        return (
                            <Col xs={12} md={4} className="mb-2 p-1"
                                key={`movie-${index}`}>
                                <Image fluid src={movie.Poster} alt="" style={{height:"350px",width:"300px"}}/>
                            </Col>
                        );
                    })}
                </Row>
            </Container> 
        ); 
    } 
}

export default MyGallery;