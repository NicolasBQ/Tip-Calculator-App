import React from "react";
import { Context } from "../Context/Context";

const People = () => {
    const {
        people,
        setPeople,
        inputError
    } = React.useContext(Context);

    const peopleVal = (e) => {
        const value = e.target.value;
        setPeople(value);
    }

    return (
        <div className="input-component people">
            <label className="label">Number of People</label>
            <input type="number"
                onChange={peopleVal}
                value={people}
                className={!inputError ? 'input people_input' : 'input people_input error'}
                placeholder="0"
            />
        </div>
    )
}


export { People }