import React from "react";
import { Context } from "../Context/Context";

const TipAmount = () => {
    const {
        tipAmount
    } = React.useContext(Context);

    return(
        <div className="tipAmount">
            <div>
                <p className="result-label">Tip Amount</p>
                <p className="result-person">/ person</p>
            </div>
            <div>
                <h2 className="outputText"><span>$</span>{tipAmount}</h2>
            </div>
        </div>
    )
}

export { TipAmount }