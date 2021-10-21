import { Col,  Row, Container, Card, Button } from "react-bootstrap";
import { Component } from "react";
import { Link } from "react-router-dom"
import { addToCartAction, removeItemFromFavList } from '../actions/index.js'
import { connect } from 'react-redux'
import React from 'react'



 const mapStateToProps = state => (state)
 const mapDispatchToProps = (dispatch) => ({
    addToFav: (company) => dispatch(addToCartAction(company)),
     removeItem: (company) => dispatch(removeItemFromFavList(company))
 })


class SingleSingle extends Component   {

  state = {
    company: null,
  };


componentDidUpdate(prevProps) {
  if (prevProps.companySelected !== this.props.companySelected) {
    this.setState({
      company: this.props.companySelected,
    });
  }
}

render(){ 
return( 
<Container id="singleCom">
          <Row>
            <Col>
              <Card className="cardtitle">
                <Card.Body>
                  <Card.Title>

                 <h3> Company:
                     {this.props.data.company_name} </h3>
                   
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                   <h4>Position: {this.props.data.title}  </h4>  
                  </Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">
                   <h4>Location: {this.props.data.candidate_required_location}  </h4>  
                  </Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">
                   <h4>Category: {this.props.data.category}  </h4>  
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Card className="card2">
            <Card.Body>
              <Card.Title>
                Details:{this.props.data.description} 
               
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">text</Card.Subtitle>
              <Card.Text>Location: </Card.Text>

               <Link to={{ pathname: this.props.data.url}} target ='_blank'>
                <Button variant="success">Company page </Button>
              </Link>
              <Button className= "m-5" variant="warning"
              
               onClick= {() => this.props.addToFav(this.state.company)}
              >Click to add fav list </Button>
            </Card.Body>
          </Card>
        </Container>)}
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleSingle)