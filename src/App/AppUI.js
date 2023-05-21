import React from 'react';
import { Bill } from '../Bill/Bill';
import { Tip } from '../Tip/Tip';
import { People } from '../People/People';
import { TipAmount } from '../TipAmount/TipAmount';
import { Total } from '../Total/Total';
import { ResetButton } from '../ResetButton/ResetButton';

const AppUI = () => {
    return(
        <React.Fragment>
            <div>
                <Bill />
                <Tip />
                <People />
            </div>
            <div>   
                <TipAmount />
                <Total />
                <ResetButton />
            </div>
        </React.Fragment>

    )
}

export { AppUI }