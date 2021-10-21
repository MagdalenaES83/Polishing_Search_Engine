import { Card, Col, Button, Container, Row } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import SingleSingle from "./SingleSingle.jsx";
import uniqid from "uniqid";

export default class SingleCompany extends React.Component {

    state= {
        work: []
    }

    componentDidMount() {
        this.displayCompany()
    }
url = 'https://strive-jobs-api.herokuapp.com/jobs?company='

displayCompany = async () => {
    const response = await fetch(this.url + this.props.match.params.company)
        const { data } = await response.json()

        this.setState({ work: data })
        console.log(data)
}

  render() {
    return (
      <>
        <Container id="singleCom">
          <Row>
            <Col>
              <Card className="card2">
                

                   {
                        this.state.work.map(jobData => <SingleSingle key={uniqid()} data={jobData} />)
                    } 
                    
                  
              </Card>
            </Col>
          </Row>
          
        </Container>
      </>
    );
  }
}
