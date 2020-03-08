import React, { } from "react";

export const styleConext = React.createContext({});
styleConext.displayName = "CONTEXT_STYLE"

export const styleConextProvider = styleConext.Provider;
export const styleConextConsumer = styleConext.Consumer

export const useStyleContext = () => useContext(styleConext)