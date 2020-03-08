import React, { useContext } from "react";
import { value } from './reducer'

export const Store = React.createContext();
Store.displayName = "context_Store"

export const StoreConsumer = Store.Consumer;

const initialState = {}

function reducer() { }

export const StoreProvider = (props) => {
    const { children, ...rest } = props;

    return <Store.Provider value={value}>
        {children}
    </Store.Provider>
}

export const useStore = () => useContext(Store)