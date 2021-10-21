import { Component } from "react";
import { Col, Form, Row, Container, Card, ListGroup } from "react-bootstrap";
import uniqid from "uniqid";
import Location from "./Location.jsx";

class Left extends Component {
  state = {
    left: [],
  };

  // //--------------------------set state - jobbs
  componentDidMount = async () => {
    try {
      let resp = await fetch(
        "https://strive-jobs-api.herokuapp.com/jobs?limit=50"
      );
      if (resp.ok) {
        let fetchjobb = await resp.json();
        this.setState({ left: fetchjobb.data });
      } else {
        console.log("error 1");
      }
    } catch (error) {
      console.log("error 2");
    }
  };

  render() {
    return (
      <>
        <Container>
          <Col>
            <ListGroup as="ul">
              <ListGroup.Item as="li" active>
                LOCATION
              </ListGroup.Item>
              <ListGroup.Item as="li">
                {this.state.left.map((data) => (


                    
                  <Location key={uniqid()} data={data}></Location>
                ))}
              </ListGroup.Item>
              
            </ListGroup>
          </Col>
        </Container>
      </>
    );
  }
}

export default Left;


// if(this.items.indexOf(item) === -1) {
//   this.items.push(item);
//   console.log(this.items);
// }