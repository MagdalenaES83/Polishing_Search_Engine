import { Card , Col,Button } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom"



export default function SingleCardQ ({ data})  {
  return(  
<>
<Card className="card" >
<Card.Body>
    <Card.Title>Company: {data.company_name}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Position: {data.title}</Card.Subtitle>
    <Card.Text>
    Location: {data.candidate_required_location}
    </Card.Text>
    
    <Link to={{ pathname: data.url}} target ='_blank'>
    
    <Button variant="primary">Details</Button></Link>  
   
  </Card.Body>
</Card>
</>
)
}


