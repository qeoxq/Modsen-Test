import React, { useEffect, useState } from 'react';
import {Books} from '../components/Books'
import axios from 'axios';

export const Home = () => {

  let src = `https://www.googleapis.com/books/v1/volumes?q=react&startIndex=0&maxResults=30&key=AIzaSyA7DhZUW1N6JZ82sdEBhE1nuWWgLkGlUJw`;

  const [books, setBooks] = useState([]);

  useEffect(() => {
      axios
        .get(src)
        .then(data => {
          setBooks(data.data.items);
        })
  }, []);

    return (
      <>
        <Books books={books}/>
      </>
    )
}