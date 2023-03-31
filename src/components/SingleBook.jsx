import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SingleBook(props) {
    return (
        <Container>
            <Row>
                <Col md='3' key={props.asin}>
                    <Card className="d-flex">
                        <Card.Body>
                            <Card.Text>
                                <Card.Img src={props.img} />
                                <h3>{props.title}</h3>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default SingleBook