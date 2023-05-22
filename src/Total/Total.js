import React from "react";
import { Context } from "../Context/Context";

const Total = () => {
    const {
        total
    } = React.useContext(Context);

    return (
        <div>
            <div>
                <p>Total</p>
                <p>/ person</p>
            </div>
            <div>
                <h2>{total}</h2>
            </div>
        </div>
    )
}

export { Total }