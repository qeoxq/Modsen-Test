import React, { createContext, useContext, useEffect } from "react";

const Context = createContext(undefined, undefined);

export const useBookContext = () => {
    return useContext(Context);
}

export const BookContextProvider = ({children}) => {
    useEffect(() => {

    }, []);

    return (
        <Context.Provider value={{}}>
            {children}
        </Context.Provider>
    )
}


