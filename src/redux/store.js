import { createStore } from "redux";
import shoesReducer from "./shoes/shoesReducer";

const store = createStore(shoesReducer);

export default store;
