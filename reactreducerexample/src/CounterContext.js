import { createContext, useReducer } from "react";
import { CounterReducer } from "./CounterReducer";

//Creacion del contexto
const CounterContext = createContext();

//Creacion del Provider
const CounterProvider = ({ children }) => {
    //Se ha referencia al CounterReducer
    const [state, dispatch] = useReducer(CounterReducer, {
        counter: 0
    });
    return (
        <CounterContext.Provider value={{ state, dispatch }}>
            {children}
        </CounterContext.Provider>
    );
}

export { 
    CounterContext, 
    CounterProvider
}