import React from "react";
import { Context } from "../Context/Context";

const Total = () => {
    const {
        total
    } = React.useContext(Context);

    return (
        <div className="result-container">
            <div>
                <p className="result-label">Total</p>
                <p className="result-person">/ person</p>
            </div>
            <div>
                <h2 className="outputText"><span>$</span>{total}</h2>
            </div>
        </div>
    )
}

export { Total }