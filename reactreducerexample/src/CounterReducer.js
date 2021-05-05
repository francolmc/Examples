
//Se definen las posibles acciones que tendra el Counter
const CounterActionTypes = {
    ADD_TO_COUNTER: "ADD_TO_COUNTER",
    SUBTRACT_TO_COUNTER: "SUBTRACT_TO_COUNTER"
}

//Objetos que representan a las acciones
const AddToCounter = {
    type: CounterActionTypes.ADD_TO_COUNTER,
    payload: {
        counter: 1
    }
}

const SubtractToCounter = {
    type: CounterActionTypes.SUBTRACT_TO_COUNTER,
    payload: {
        counter: 1
    }
}

//Definir reducer
const CounterReducer = (state, action) => {
    switch (action.type) {
        case CounterActionTypes.ADD_TO_COUNTER:
            return {
                ...state,
                counter: state.counter + action.payload.counter
            };
        case CounterActionTypes.SUBTRACT_TO_COUNTER:
            return {
                ...state,
                counter: state.counter - action.payload.counter
            }
        default:
            return state;
    }
}

export {
    CounterActionTypes,
    AddToCounter,
    SubtractToCounter,
    CounterReducer
}