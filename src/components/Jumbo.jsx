import { Row, Col, Image } from "react-bootstrap";

const Jumbo = () => {
  return (
    <>
      <Row>
        <Col className="m-5" xs={6} md={6}>
          <h1 className="mb-3">FIND A NEW JOB </h1>
        </Col>

        <Col>
          <Image
            id="glob"
            src="https://top1000worldbanks.com/assets/2yFx6FwFoa/gettyimages-167406365-2560x2051.jpeg"
            roundedCircle
            className= "my-5"
          />{" "}
        </Col>
      </Row>
    </>
  );
};

export default Jumbo;
