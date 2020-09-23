import React, { useContext } from 'react';
import {BookContext} from '../context/BookContext';
import BookDetail from '../components/BookDetail';

const BookList = () => {
    const {books} = useContext(BookContext)
    return books.length ? ( 
        <div className="book-list">
            <ul>
                {books.map(book=> {
                    return (<BookDetail book={book} key={book.id} />);
                })}
            </ul>
        </div>
     ): (
         <div className="empty">No Book Found</div>
     )
}
 
export default BookList;