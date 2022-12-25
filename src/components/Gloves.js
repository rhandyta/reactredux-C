import React from "react";
import { connect } from "react-redux";
import { BUY_GLOVES } from "../redux/gloves/glovesType";

export const Gloves = ({ gloves, buyGloves }) => {
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Stock gloves : {gloves}</h1>
            <button onClick={buyGloves}>ClickMe</button>
        </div>
    );
};

const mapStateToProps = (state) => ({
    gloves: state.gloves.stock,
});

const mapDispatchToProps = (dispatch) => {
    return {
        buyGloves: () => {
            dispatch({ type: BUY_GLOVES });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Gloves);
