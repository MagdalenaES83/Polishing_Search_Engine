import { Card, Button } from "react-bootstrap";
import React from "react";

import { Link } from "react-router-dom";

export default function SingleCard({ data }) {
  return (
    <>
      <Card className="card2">
        <Card.Body>
          <Link to={`/${data.company_name}`}>
            <Card.Title>Company: {data.company_name} </Card.Title>
          </Link>
          <Card.Subtitle className="mb-2 text-muted">
            Position: {data.title}
          </Card.Subtitle>
          <Card.Text>Location: {data.candidate_required_location}</Card.Text>

          <Link to={`/${data.company_name}`}>
            <Button variant="primary">Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}
