import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Component } from 'react';
import { render } from '@testing-library/react';

class SingleBook extends Component {
    state = {
        selected: false
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col md='3' key={this.props.asin}>
                        <Card className="d-flex">
                            <Card.Body>
                                <Card.Text>
                                    <Card.Img src={this.props.img} />
                                    <h3>{this.props.title}</h3>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default SingleBook