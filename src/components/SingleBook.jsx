import { Col, Card } from "react-bootstrap";
import React, { Component } from "react";

class SingleBook extends Component {
    state = {
        selected: false
    }
    render() {
        return (
            <Col md={6} lg={3} key={this.props.asin}>
                <Card className="my-3 mt-5">
                    <Card.Img variant="top" src={this.props.img} onClick={() => this.setState({ selected: !this.state.selected })} />
                    <Card.Body>
                        <Card.Text>
                            <h3>{this.props.title}</h3>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default SingleBook