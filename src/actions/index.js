export const increment = () => {
    return{
        type : 'INCREMENT'
    };
}

export const addTask = (executionAddress, functionName, resolverAddress, resolverFunction) => {
    return{
        type : 'ADD-TASK',
        payload : {executionAddress, functionName, resolverAddress, resolverFunction}
    };
}

export const decrement = () => {
    return{
        type : 'DECREMENT'
    };
}

