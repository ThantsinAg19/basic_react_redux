const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'INCREMENTPAYLOAD':
            return state + action.payload; // the state will be added the parese parameter .Forexample 2
        case 'DECREMENTPAYLOAD':
            return state - action.payload;
        default:
            return state;
    }
}

export default counterReducer