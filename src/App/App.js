import React from 'react';
import { Provider } from '../Context/Context';
import { AppUI } from './AppUI';
import '../Styles/main.scss';


const App = () => {
  return (
    <Provider>
      <AppUI />
    </Provider>
  );
}

export { App };
