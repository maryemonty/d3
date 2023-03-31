import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import books from '../books/romance.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class AllTheBooks extends Component {
    render() {
        return (
            <>
                <Container>
                    <Row>
                        {books.map((book, index) => (
                            <Col key={index}>
                                <Card className="d-flex">
                                    <Card.Body>
                                        <Card.Text>
                                            <Card.Img src={book.img} />

                                            <h3>{book.title}</h3>
                                            <p>
                                                <Badge bg="dark">{book.price}€</Badge>
                                            </p>

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))};
                    </Row>
                </Container>
            </>
        )
    }
}
export default AllTheBooks 