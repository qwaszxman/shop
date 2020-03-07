
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App2 from './Components/App';
// import App from './Components/App';
import * as serviceWorker from './serviceWorker';



import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';

import App from './asample/components/App';
import Root from './asample/Root';

import './index.scss';

ReactDOM.render(
    <Root>
        <App />
    </Root>,
    document.getElementById('root')
);



// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
