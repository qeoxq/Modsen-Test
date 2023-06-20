import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Books} from '../../components/Books/Books'

export const Home = () => {

  const [books, setBooks] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [fetching, setFetching] = useState(true);
  const [needMore, setNeedMore] = useState(true);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    loadMoreBooks();
  }, []);

  const loadMoreBooks = () => {
    setFetching(true);
    setStartIndex(prev => prev + 30);
    const src = `https://www.googleapis.com/books/v1/volumes?q=react&startIndex=${startIndex}&maxResults=30&key=AIzaSyA7DhZUW1N6JZ82sdEBhE1nuWWgLkGlUJw`;
    axios
    .get(src)
    .then(data => {
      setBooks(prev => [...prev, ...data.data.items]);
      setTotalItems(data.data.totalItems);
    })
    .finally(() => {
      setFetching(false);
    })
  }

  return (
    <> 
      {fetching ? null :
      <div className='home-total-results'>Found {totalItems} results</div>
      } 
      <Books books={books}/>
      <div className='home-load-more-container'>
        {fetching ? <div>Loading...</div> : <button className='home-load-more-button' onClick={loadMoreBooks}>LOAD MORE</button>}
      </div>
    </>
  )
}