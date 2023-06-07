import React from "react";
import { Context } from "../Context/Context";

const ResetButton = () => {
    const {
        setBill,
        setTip,
        setPeople,
        resetBtns,
        setTipAmount,
        setTotal
    } = React.useContext(Context);

    const resetBtn = () => {
        setBill('');
        setTip('');
        setPeople('');
        resetBtns();
        setTipAmount(0);
        setTotal(0);
    }


    return (
        <button
            onClick={resetBtn}
            className="resetBtn"
        >
            RESET
        </button>
    )
}

export { ResetButton }