import React from "react";
import { Context } from "../Context/Context";


const Tip = () => {
    const {
        setTip,
    } = React.useContext(Context);

    const tipValBtn = (val) => {   
        setTip(val);
    }

    const tipValInput = (e) => {
        setTip(e.target.value / 100);
    }

    return (
        <div>
            <label>Select Tip %</label>
            <div>
                <button 
                    onClick={() => tipValBtn(0.05)}
                >
                    5%
                </button>
                <button 
                    onClick={() => tipValBtn(0.10)}
                >
                    10%
                </button>
                <button 
                    onClick={() => tipValBtn(0.15)}
                >
                    15%
                </button>
                <button 
                    onClick={() => tipValBtn(0.25)}
                >
                    25%
                </button>
                <button 
                    onClick={() => tipValBtn(0.50)}
                >
                    50%
                </button>
                <input 
                    onChange={tipValInput}
                    type="number"
                />
            </div>
        </div>
    )
}

export { Tip }