import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import App from './Components/App';
import Root from './Root';
import { StoreProvider } from "./Store/store";

import './index.scss';

// ReactDOM.render(
//   <Root>
//     <App />
//   </Root>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
