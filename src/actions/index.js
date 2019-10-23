export const increment = () => {
    return {
        type: 'INCREMENT'
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

export const incrementPayload = (number) => {
    return {
        type: 'INCREMENTPAYLOAD',
        payload : number
    }
}

export const decrementPayload = (number) => {
    return {
        type: 'DECREMENTPAYLOAD',
        payload: number
    }
}