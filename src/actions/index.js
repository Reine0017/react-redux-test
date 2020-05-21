export const increment = (myNum) => {
    return {
        type: 'INCREMENT',
        payload: myNum
    };
};

export const decrement = (myNum)=>{
    return {
        type: 'DECREMENT',
        payload: myNum
    }
}

export const logIN_OUT = () => {
    return {
        type: 'LOGIN_OUT'
    }
}