
import React, { useState } from 'react'


export const StoreContext = React.createContext(null);

export default ({ children }) => {
    // các em đã vào nhà kho
    const [expList, setExpList] = useState(null)






    const store = {
        expList: [expList, setExpList]

    };

    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
};