import Nav from 'react-bootstrap/Nav';

function MyNav() {
    return (
        <Nav>
            <Nav.Item>
                <Nav.Link href="#">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#">Browse</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default MyNav