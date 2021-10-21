import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Jumbo from "./components/Jumbo.jsx";
import Body from "./components/Body.jsx";
import Left from "./components/Left.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SingleCompany from "./components/SingleCompany";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Container>
          <Row>
            <Route path="/" exact component={Jumbo} />
          </Row>

          <Row>
            <Col md={3}>
              <Route path="/" exact component={Left} />
            </Col>

            <Col md={9}>
              <Route path="/" exact component={Body} />
            </Col>
          </Row>

          <Row>
            <Route path="/:company" exact component={SingleCompany} />
          </Row>
        </Container>
      </Switch>
    </Router>
  );
}

export default App;
