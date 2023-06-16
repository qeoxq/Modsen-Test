import axios from 'axios';
import React, {Fragment, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

export const About = () => {
  const params = useParams()

  const [book, setBooks] = useState(null);

  useEffect(() => {
    const src = `https://www.googleapis.com/books/v1/volumes/${params.bookId}?key=AIzaSyA7DhZUW1N6JZ82sdEBhE1nuWWgLkGlUJw`;
    axios
      .get(src)
      .then(data => {
        setBooks(data.data);
        console.log(data);
      })
    }, [params]);

  return (
    <>
      {book && 
      <div className='about-group'>
        {book.volumeInfo.imageLinks?.thumbnail ?
          <img className="about-image" src={book.volumeInfo.imageLinks.thumbnail} alt="Didn't load."/>
          : 
          <div className="about-image-error">Image didn't load</div>
        }
        <div className='about-info'>
            <div className="book-info-category">
              {book.volumeInfo.categories && book.volumeInfo.categories[0]}
            </div>
            <div className='about-info-title'>{book.volumeInfo.title}</div>
            <div className="about-info-author">
                    {book.volumeInfo.authors && book.volumeInfo.authors.join(", ")}
            </div>
          <div className='about-info-description' dangerouslySetInnerHTML={{ __html: book.volumeInfo.description}}></div>
        </div>
      </div> 
      }
    </>
  )
}