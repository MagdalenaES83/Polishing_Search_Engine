import { Card , Button } from "react-bootstrap";
import React from "react";

import { Route, Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import SingleCompany from "./SingleCompany.jsx"


export default function SingleCard ({ data})  {
  return(  
<>
<Card className="card2" >
<Card.Body>
<Link to={`/${data.company_name}`}><Card.Title>
      
      
      Company: {data.company_name} </Card.Title></Link>
    <Card.Subtitle className="mb-2 text-muted">Position: {data.title}</Card.Subtitle>
    <Card.Text>
    Location: {data.candidate_required_location}
    </Card.Text>
    <Link><Button variant="success">Add to Fav</Button> </Link> 


     <Link to={`/${data.company_name}`}>
    
    <Button variant="primary">Details</Button></Link>  
    
    
   
  </Card.Body>
</Card>
</>
)
}


