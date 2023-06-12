import React from "react";
import {Form} from './Form'
import { Outlet } from "react-router-dom";

export const Layout = () => {
    return (
        <>
        <header className="page">
          <div className="page-content">
              <h1>Book Search App</h1>
              <Form/>
          </div>
        </header>

        <Outlet/>

        <footer></footer>
        </>
    )
}