import { Col, Container, Row } from "react-bootstrap";

export default function PageTemplate({children}){
  return <>
    <Container>
      <Row>
        <Col>
          {children}
        </Col>
      </Row>
    </Container>
  </>
}