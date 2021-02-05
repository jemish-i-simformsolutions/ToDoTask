import { createStore } from "redux"
import { initialState, Reducer } from "./Reducer"

export const configureStore=()=>{

    const store=createStore(Reducer,initialState);

    return store;

}