// import React from 'react'
// import { render } from 'react-dom'
// import { BrowserRouter as Router } from "react-router-dom";
// import App from './App'

// render(<Router><App /></Router>, document.querySelector('#root'))

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import cartReducer from './components/reducers/cartReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(cartReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));