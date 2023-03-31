import { Container, Row } from 'react-bootstrap';
import books from '../books/horror.json';
import SingleBook from './SingleBook';

function BookList() {
    return (
        <>
            <Container>
                <Row>
                    {
                        books.map(book => (
                            <SingleBook asin={book.asin} img={book.img} title={book.title} />
                        ))
                    }
                </Row>
            </Container>
        </>
    )
}

export default BookList