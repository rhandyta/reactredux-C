import { combineReducers, createStore } from "redux";
import glovesReducer from "./gloves/glovesReducer";
import shoesReducer from "./shoes/shoesReducer";

const rootReducer = combineReducers({
    shoes: shoesReducer,
    gloves: glovesReducer,
});

const store = createStore(rootReducer);

export default store;
