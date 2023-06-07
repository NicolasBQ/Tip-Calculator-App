import React  from "react";
import { Context } from "../Context/Context";

const Bill = () => {
    const {
        bill,
        setBill
    } = React.useContext(Context);

    const billVal = (e) => {
        setBill(e.target.value);
    }

    return (
        <div className="input-component bill">
            <label className="label">Bill</label>
            <input type="number" 
                onChange={billVal}
                value={bill}
                className="input bill_input"
                placeholder="0"
            />
        </div>
    )
}


export { Bill };