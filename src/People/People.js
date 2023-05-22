import React from "react";
import { Context } from "../Context/Context";

const People = () => {
    const {
        people,
        setPeople
    } = React.useContext(Context);

    const peopleVal = (e) => {
        if(e.target.value !== 0) {
            setPeople(e.target.value);
        } else {
            setPeople(1);
        }
    }

    return (
        <div>
            <label>Number of People</label>
            <input type="text"
                onChange={peopleVal}
                value={people}
            />
        </div>
    )
}


export { People }