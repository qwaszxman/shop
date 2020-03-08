import React, { } from "react";

export const store = React.createContext();
store.displayName = "context_STORE"

export const storeProvider = store.Provider;
export const storeConsumer = store.Consumer;

const initialState = {}

function reducer() { }

export function StoreProvider(props) { }

export const useStore = () => useContext(store)