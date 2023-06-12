import React from "react";

export const Form = () => {

    return (
        <form>
            <div className="form-group">
                <div className="search-container">
                    <input type="text" id="search-input" placeholder="Enter a book title"/>
                    <button id="search-button">Search</button>
                </div>
                <div className="filters-container">
                    <label for="category-select">Category:</label>
                    <select id="category-select">
                        <option value="all">All</option>
                        <option value="art">Art</option>
                        <option value="biography">Biography</option>
                        <option value="computers">Computers</option>
                        <option value="history">History</option>
                        <option value="medical">Medical</option>
                        <option value="poetry">Poetry</option>
                    </select>
                    <label for="sort-select">Sort by:</label>
                    <select id="sort-select">
                        <option value="relevance">Relevance</option>
                        <option value="newest">Newest</option>
                    </select>
                </div>
            </div>
        </form>
    )
}