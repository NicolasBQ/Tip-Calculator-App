import React from "react";
import { Context } from "../Context/Context";


const BUTTONS = [
    { id: 0, title: "5%", val: 0.05, selected: false },
    { id: 1, title: "10%", val: 0.10, selected: false },
    { id: 2, title: "15%", val: 0.15, selected: false },
    { id: 3, title: "25%", val: 0.25, selected: false },
    { id: 4, title: "50%", val: 0.50, selected: false }
]

const Tip = () => {
    const [buttons, setButtons] = React.useState(BUTTONS);

    const {
        setTip,
    } = React.useContext(Context);

    const tipValBtn = (id, val) => {  
        const newBtns = buttons.map((btn) => {
            if(btn.id !== id) {
                btn.selected = false;
                return btn;
            } else {   
                btn.selected = true;
                return btn
            }
        }) 
        setButtons(newBtns);
        setTip(val);
    }

    const tipValInput = (e) => {
        if(e.target.value < 0) return;
        setTip(e.target.value / 100);
    }

    return(
        <div className="tip input-component">
            <label className="label">Select Tip %</label>
            <div className="tip_grid">
                {buttons.map((bt) => (
                    <button
                        key={bt.id}
                        className={bt.selected ? 'tip_btn tip_btn-active' : 'tip_btn'}
                        onClick={() => tipValBtn(bt.id, bt.val)}
                    >   
                        {bt.title}
                    </button>
                ))}
                <input 
                    onChange={tipValInput}
                    type="number"
                    className="tip_input"
                    placeholder="Custom"
                />
            </div>
        </div>
    )
}

export { Tip }

// return (
//     <div className="tip input-component">
//         <label className="label">Select Tip %</label>
//         <div className="tip_grid">
//             <button 
//                 onClick={() => tipValBtn(0.05)}
//                 className="tip_btn"
//             >
//                 5%
//             </button>
//             <button 
//                 onClick={() => tipValBtn(0.10)}
//                 className="tip_btn"
//             >
//                 10%
//             </button>
//             <button 
//                 onClick={() => tipValBtn(0.15)}
//                 className="tip_btn"
//             >
//                 15%
//             </button>
//             <button 
//                 onClick={() => tipValBtn(0.25)}
//                 className="tip_btn"
//             >
//                 25%
//             </button>
//             <button 
//                 onClick={() => tipValBtn(0.50)}
//                 className="tip_btn"
//             >
//                 50%
//             </button>

//         </div>
//     </div>
// )