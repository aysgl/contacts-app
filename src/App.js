import { Container, Row, Col } from "reactstrap";
import Contact from "./components/Contact";

function App() {
  return (
    <Container>
      <Row>
        <Col lg="5" md="6" className="mx-auto">
          <Contact />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
