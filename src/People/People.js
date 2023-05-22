import React from "react";
import { Context } from "../Context/Context";

const People = () => {
    const {
        people,
        setPeople,
    } = React.useContext(Context);

    const peopleVal = (e) => {
        let value = e.target.value 
        setPeople(value);
    }

    return (
        <div className="input-component people">
            <label className="label">Number of People</label>
            <input type="text"
                onChange={peopleVal}
                value={people}
                className="input people_input"
                placeholder="0"
            />
        </div>
    )
}


export { People }