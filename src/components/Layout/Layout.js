import React from "react";
import { Outlet } from "react-router-dom";
import {Form} from '../Form/Form';

export const Layout = () => {
    return (
        <>
        <header className="page">
          <div className="page-content">
              <h1>Search for books</h1>
              <Form/>
          </div>
        </header>

        <Outlet/>

        <footer></footer>
        </>
    )
}