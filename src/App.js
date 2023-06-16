import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Home} from './pages/Home/Home';
import {About} from './pages/About/About';
import {Layout} from './components/Layout/Layout'


function App() {
  return (
    <div className="container pt-4">
      <Routes>
        <Route path={'/'} element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path={'/about/:bookId'} element={<About/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;