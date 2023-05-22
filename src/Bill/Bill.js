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
        <div>
            <label>Bill</label>
            <input type="text" 
                onChange={billVal}
                value={bill}
            />
        </div>
    )
}


export { Bill };