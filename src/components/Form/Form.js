import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export const Form = () => {
    const {query} = useParams();
    useEffect(() => {
    }, [query]);
    
    return (
        <form>
            <div className="form-group">
                <div className="search-container">
                    <input type="text" id="search-input" placeholder="Enter a book title"/>
                    <button className="search-button">Search</button>
                </div>
                <div className="filters-container">
                    <label htmlFor="category-select">Category:</label>
                    <select className="category-select">
                        <option value="all">All</option>
                        <option value="art">Art</option>
                        <option value="biography">Biography</option>
                        <option value="computers">Computers</option>
                        <option value="history">History</option>
                        <option value="medical">Medical</option>
                        <option value="poetry">Poetry</option>
                    </select>
                    <label htmlFor="sort-select">Sort by:</label>
                    <select className="sort-select">
                        <option value="relevance">Relevance</option>
                        <option value="newest">Newest</option>
                    </select>
                </div>
            </div>
        </form>
    )
}