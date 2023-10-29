import { createStore,combineReducers } from "redux";
import { categoryReducer } from "./reducer/categoryReducer";
import { greetReducer } from "./reducer/greetReducer";

export const configStore =()=>{
    const store = createStore(
        combineReducers({categoryReducer,greetReducer}),
        window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store ;
}