import React from 'react';
import { Bill } from '../Bill/Bill';
import { Tip } from '../Tip/Tip';
import { People } from '../People/People';
import { TipAmount } from '../TipAmount/TipAmount';
import { Total } from '../Total/Total';
import { ResetButton } from '../ResetButton/ResetButton';

const AppUI = () => {
    return(
        <React.Fragment >
            <h1 className='title'>SPLI <br /> TTER</h1>
            <main className="main">
                <section className='data'>
                    <Bill />
                    <Tip />
                    <People />
                </section>
                <section className='output'> 
                    <TipAmount />
                    <Total />
                    <ResetButton />
                </section>
            </main>
            <footer className='footer'>
                <p className='footer_text'>
                    Created by 
                    <span> </span>
                    <a 
                        href="https://github.com/NicolasBQ"
                        className='footer_link'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                    NicolasBQ
                    </a>
                    -
                    <a 
                        href="https://www.frontendmentor.io/home"
                        className='footer_link'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                    frontendmentor.io
                    </a>
                </p>
            </footer>
        </React.Fragment>

    )
}

export { AppUI }