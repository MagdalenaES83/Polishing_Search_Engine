import { Col, Form, Row, Container, Card, Button } from "react-bootstrap";
import { Component } from "react";
import SingleCompany from "./SingleCompany.jsx"
import { Link } from "react-router-dom"




export default function SingleSingle ({ data})  {
return( 
<Container id="singleCom">
          <Row>
            <Col>
              <Card className="cardtitle">
                <Card.Body>
                  <Card.Title>

                 <h3> Company:
                     {data.company_name} </h3>
                   
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                   <h4>Position: {data.title}  </h4>  
                  </Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">
                   <h4>Location: {data.candidate_required_location}  </h4>  
                  </Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">
                   <h4>Category: {data.category}  </h4>  
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Card className="card2">
            <Card.Body>
              <Card.Title>
                Details:{data.description} 
               
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">text</Card.Subtitle>
              <Card.Text>Location: </Card.Text>

               <Link to={`/${data.url}`}>
                <Button variant="success">Company page </Button>
              </Link>
              
            </Card.Body>
          </Card>
        </Container>)}