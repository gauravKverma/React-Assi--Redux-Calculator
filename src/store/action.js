import {Decrement,Increment,Add,Substract,Multiply,Divide} from "./action.types"

export const add = (value) => ({type: Add,payload: value});
export const substract = (value) => ({type: Substract,payload: value});
export const divide = (value) => ({type: Divide,payload: value});
export const multiply = (value) => ({type: Multiply,payload: value});
export const increment = () => ({type: Increment});
export const decrement = () => ({type: Decrement});