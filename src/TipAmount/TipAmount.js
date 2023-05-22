import React from "react";
import { Context } from "../Context/Context";

const TipAmount = () => {
    const {
        tipAmount
    } = React.useContext(Context);

    return(
        <div>
            <div>
                <p>Tip Amount</p>
                <p>/ person</p>
            </div>
            <div>
                <h2>{tipAmount}</h2>
            </div>
        </div>
    )
}

export { TipAmount }