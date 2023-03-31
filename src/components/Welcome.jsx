import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Welcome() {
    return (
        <>
            <Card className="bg-dark text-white">
                    <Card.Title>Hello, world!</Card.Title>
                    <Card.Text>
                    This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
                    </Card.Text>
                    <Card.Text>It uses utility classes for typography and spacing to space content out within the larger container.</Card.Text>
            </Card>
        </>
    )
}

export default Welcome