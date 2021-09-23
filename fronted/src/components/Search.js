import React from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
const Search = ({ word, setWord, handleSubmit }) => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={9} lg={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Row>
                <Col md={9} xs={12}>
                  <Form.Control 
                  type="text"
                  vale={word}
                  onChange={(e)=>setWord(e.target.value)}
                  placeholder="Search for new image" />
                </Col>
                <Col>
                  <Button variant="primary" type="submit">
                    Search
                  </Button>
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
export default Search
