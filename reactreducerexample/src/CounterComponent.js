import { useContext } from "react";
import { CounterContext } from './CounterContext';
import { AddToCounter, SubtractToCounter } from './CounterReducer';

const CounterComponent = () => {
    const { state, dispatch } = useContext(CounterContext);

    const Increment = () => {
        dispatch(AddToCounter);
    }

    const Decrement = () => {
        dispatch(SubtractToCounter);
    }
    
    return (
        <div>
            <h1>El valor del contador es: {state.counter}</h1>
            <button onClick={Increment} >Sumar 1</button>
            <button onClick={Decrement}>Restar 1</button>
        </div>
    );
}

export default CounterComponent;