export const reducer = (state, {type,payload}) => {
    switch(type){
        case "Increment" : {
            state.count++;
            return {...state};
        }
        case "Decrement" : {
            state.count--;
            return {...state};
        }
        case "Multiply" : {
            state.count*=payload;
            return {...state};
        }
        case "Divide" : {
            state.count/= payload;
            return {...state};
        }
        case "Add" : {
            state.count+=payload;
            return {...state}
        }
        case "Substract" : {
            state.count-=payload;
            return {...state}
        }   
        default : return {...state};
    }
}