import { BUY_GLOVES } from "./glovesType";

export const initialGloves = {
    stock: 50,
};

const glovesReducer = (state = initialGloves, action) => {
    switch (action.type) {
        case BUY_GLOVES:
            return {
                stock: state.stock - 1,
            };
        default:
            return state;
    }
};
export default glovesReducer;
