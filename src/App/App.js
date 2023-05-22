import React from 'react';
import { Provider } from '../Context/Context';
import { AppUI } from './AppUI';
import '../Styles/main.scss';


const App = () => {
  return (
    // <h1>Splitter</h1>
    <Provider>
      <h1>Splitter</h1>
      <AppUI />
    </Provider>
  );
}

export { App };
