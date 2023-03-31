import books from '../books/horror.json';
import SingleBook from './SingleBook';

function BookList() {
    return (
        <>
            {
                books.map(book => (
                    <SingleBook asin={book.asin} img={book.img} title={book.title} />
                ))
            }
        </>
    )
}

export default BookList