import React, { createContext,useState,useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const BookContext = createContext();
const BookContextProvider = (props) => {
    const [books, setBooks] =useState([
        {title: 'name of the wind', author: 'patrick rothfuss', id: 1},
        {title: 'the final empire', author: 'brandon sanderson', id: 2},
        {title: 'monk who sold his ferrari', author: 'robin sharma', id: 3}
    ]);

    const adBook = (title,author) => {
            setBooks([...books, {title,author,id:uuidv4()}]);
    };

    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id));
    };

    return (
        <BookContext.Provider value = {books,adBook,removeBook}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;