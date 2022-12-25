import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BUY_SHOES } from "../redux/shoes/shoesType";
function ShoesHook() {
    const stockShoes = useSelector((state) => {
        return {
            stock: state.stock,
        };
    });

    const dispatch = useDispatch();

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Stock shoes HOOK : {stockShoes?.stock}</h1>
            <button onClick={() => dispatch({ type: BUY_SHOES })}>
                ClickMe
            </button>
        </div>
    );
}

export default ShoesHook;
