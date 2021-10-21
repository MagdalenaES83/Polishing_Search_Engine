import { ListGroup } from "react-bootstrap";
import React from "react";
import {Link} from "react-router-dom"



export default function Location ({ data})  {
  return(  
<>

<Link><ListGroup.Item as="li" disabled>
{data.candidate_required_location}
  </ListGroup.Item></Link>


</>
)
}