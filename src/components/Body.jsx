import { Component } from "react";
import { Col, Form, Row, Container, Card } from "react-bootstrap";
import uniqid from "uniqid";
import SingleCard from "./SingleCard.jsx";
import SingleCardQ from "./SingleCardQ.jsx";
class Body extends Component {
  state = {
    query: "",
    jobs: [],
    cards: [],
  };

  // //--------------------------set state - jobbs
  componentDidMount = async () => {
    try {
      let resp = await fetch(
        "https://strive-jobs-api.herokuapp.com/jobs?limit=20"
      );
      if (resp.ok) {
        let fetchjobb = await resp.json();
        this.setState({ cards: fetchjobb.data });
      } else {
        console.log("error 1");
      }
    } catch (error) {
      console.log("error 2");
    }
  };

  fetchQuery = "https://strive-jobs-api.herokuapp.com/jobs?search=";

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      this.fetchQuery + this.state.query + "&limit=10"
    );
    if (!response.ok) {
      alert("Error fetching results");
      return;
    }
    const { data } = await response.json();
    this.setState({ jobs: data });
    console.log(data)

  };

  render() {
    return (
      <>
        <Container>
          <Form onSubmit={this.handleSubmit}>
            <Form.Control
              id="search"
              type="search"
              placeholder="Search new job"
              className="mr-2"
              aria-label="Search"
              value={this.state.query}
              onChange={this.handleChange}
            />
          </Form>
        </Container>


{/* ///display cards from query */}
<Container><h3 className="py-3">RESULT OF SEARCHING</h3>
<Row className="mt-5"> 
            {this.state.jobs.map((work) => (
              <Col xs={6} md={3}>
                <SingleCardQ key={uniqid()} data={work}></SingleCardQ>{" "}
              </Col>
            ))}
          </Row>
  
   </Container> 

        <Container>
          
          <h3>20 OFFERS</h3>
          <Row className="mt-5"> 
            {this.state.cards.map((work) => (
              <Col xs={6} md={3}>
                <SingleCard key={uniqid()} data={work}></SingleCard>{" "}
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default Body;
