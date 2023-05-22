import React from "react";

const Context = React.createContext();

const Provider = (props) => {
    const [bill, setBill] = React.useState(0);
    const [tip, setTip] = React.useState(0);
    const [people, setPeople] = React.useState(1);
    const [total, setTotal] = React.useState(0);
    const [tipAmount, setTipAmount] = React.useState(1);


    React.useEffect(() => {
        totalPerPerson();
    }, [bill, tip, people])

    const totalPerPerson = () => {
        if(bill == 0 || people == 0) {
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

    return (
        <Context.Provider
            value={{
                bill,
                setBill,
                setTip,
                people,
                setPeople,
                total,
                tipAmount
            }}
        >
            {props.children}
        </Context.Provider>
    )
}

export { Context, Provider }