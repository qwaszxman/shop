import React, { useContext, useReducer } from "react";
import reducer from './reducer';

export const Store = React.createContext();
Store.displayName = "context_Store"

export const StoreConsumer = Store.Consumer;

const initialState = {
    shelf: { products: [], },
    cart: {
        products: [],
        productToAdd: {},
        productToChange: {},
        productToRemove: {}
    },
    cartTotal: {
        productQuantity: 0,
        installments: 0,
        totalPrice: 0,
        currencyId: 'USD',
        currencyFormat: '$'
    },
    items: [],
    type: '',
    filters: [],
    sort: {}
}

// function reducer() { }

export const StoreProvider = (props) => {
    console.log("StoreProvide props ", props);
    const { children, ...rest } = props;

    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch } // TODO: remove variable

    return <Store.Provider value={value}>
        {children}
    </Store.Provider>
}

export const useStore = () => useContext(Store)