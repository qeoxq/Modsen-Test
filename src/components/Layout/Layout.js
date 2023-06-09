import React from "react";
import { Outlet } from "react-router-dom";
import {Form} from '../Form/Form';
import './layout.css';

export const Layout = () => {
    return (
        <>
        <header className="header">
          <div className="header-content">
              <h1>Search for books</h1>
              <Form/>
          </div>
        </header>

        <Outlet/>

        <footer></footer>
        </>
    )
}