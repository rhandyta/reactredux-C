import React from "react";
import { connect } from "react-redux";
import { BUY_SHOES } from "../redux/shoes/shoesType";
function Shoes({ shoes, buyShoes }) {
    console.log("stock shoes => ", shoes);
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Stock shoes : {shoes}</h1>
            <button onClick={buyShoes}>ClickMe</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        shoes: state.stock,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        buyShoes: () => dispatch({ type: BUY_SHOES }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shoes);
