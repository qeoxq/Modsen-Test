import React from "react";

export const Books = ({books}) => {
    return (
        <ul className="books-group">
            {books.map(book => (
                <li className="books-group-item" key={book.id}>
                    <img src="" alt="Image"/>
                    <div className="book-info">
                        <div className="book-info-category">Category</div>
                        <div className="book-info-title">Title</div>
                        <div className="book-info-author">Author</div>
                    </div>
                </li>
            ))}
        </ul>
    )
}