import { combineReducers, createStore } from "redux";
import glovesReducer from "./gloves/glovesReducer";
import shoesReducer from "./shoes/shoesReducer";
import { applyMiddleware } from "redux";
import logger from "redux-logger";

const rootReducer = combineReducers({
    shoes: shoesReducer,
    gloves: glovesReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
