import React, { } from "react";

export const formConext = React.createContext({});
formConext.displayName = "CONTEXT_FORM"

export const formConextProvider = formConext.Provider;
export const formConextConsumer = formConext.Consumer

export const useFormContext = () => useContext(formConext)