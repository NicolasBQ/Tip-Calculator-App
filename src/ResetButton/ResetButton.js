import React from "react";
import { Context } from "../Context/Context";

const ResetButton = () => {
    const {
        setBill,
        setTip,
        setPeople
    } = React.useContext(Context);

    const resetBtn = () => {
        setBill('');
        setTip('');
        setPeople('');
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