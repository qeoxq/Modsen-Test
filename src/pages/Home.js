import React, {Fragment} from 'react';
import {Books} from '../components/Books'


export const Home = () => {

  const books = new Array(5).fill('').map((_, i) => ({id: i, title: `Book ${i + 1}`}));
    return (
      <>
        <Books books={books}/>
      </>
    )
}