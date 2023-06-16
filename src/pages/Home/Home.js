import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Books} from '../../components/Books/Books'

export const Home = () => {

  

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const src = `https://www.googleapis.com/books/v1/volumes?q=react&startIndex=0&maxResults=30&key=AIzaSyA7DhZUW1N6JZ82sdEBhE1nuWWgLkGlUJw`;
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