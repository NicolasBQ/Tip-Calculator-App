import React from "react";

const Context = React.createContext();

const BUTTONS = [
    { id: 0, title: "5%", val: 0.05, selected: false },
    { id: 1, title: "10%", val: 0.10, selected: false },
    { id: 2, title: "15%", val: 0.15, selected: false },
    { id: 3, title: "25%", val: 0.25, selected: false },
    { id: 4, title: "50%", val: 0.50, selected: false }
]

const Provider = (props) => {
    const [bill, setBill] = React.useState('');
    const [tip, setTip] = React.useState(0);
    const [people, setPeople] = React.useState('');
    const [total, setTotal] = React.useState(0);
    const [tipAmount, setTipAmount] = React.useState(0);
    const [buttons, setButtons] = React.useState(BUTTONS);
    const [inputError, setInputError] = React.useState(false);


    React.useEffect(() => {
        const totalPerPerson = () => {
            setInputError(false);
            if(!bill) {
                setTotal(0);
                setTipAmount(0)
            } else {
                const tipA = bill * tip;
                const totalBill = parseFloat(bill) + parseFloat(tipA);
                const total = totalBill / people;
                setTotal(total.toFixed(2));
                setTipAmount((tipA / people).toFixed(2));    
            }
        }


        if(people <= 0 && people !== '') {
            setInputError(true);
            return
        };
        totalPerPerson();
    }, [bill, tip, people])

    const resetBtns = () => {
        const newBtns = buttons.map(btn => {
            btn.selected = false
            return btn
        })
        setButtons(newBtns)
    }

    return (
        <Context.Provider
            value={{
                bill,
                setBill,
                setTip,
                people,
                setPeople,
                total,
                tipAmount,
                buttons,
                setButtons,
                resetBtns,
                setTipAmount,
                setTotal,
                inputError
            }}
        >
            {props.children}
        </Context.Provider>
    )
}

export { Context, Provider }    