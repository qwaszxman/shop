import React, { } from "react";

export const store = React.createContext();
store.displayName = "context_STORE"

export const storeProvider = store.Provider;
export const storeConsumer = store.Consumer;

const initialState = {}

function reducer() { }

export function StoreProvider(props) {
    const { childer, ...rest } = props;

    return <Store.Provider value='data from store'>
        {props.children}
    </Store.Provider>
}

export const useStore = () => useContext(store)