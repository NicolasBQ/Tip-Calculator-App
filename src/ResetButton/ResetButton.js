import React from "react";
import { Context } from "../Context/Context";

const ResetButton = () => {
    const {
        setBill,
        setTip,
        setPeople
    } = React.useContext(Context);

    const resetBtn = () => {
        setBill(0);
        setTip(0);
        setPeople(1);
    }

    return (
        <button
            onClick={resetBtn}
        >RESET</button>
    )
}

export { ResetButton }