import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import rootReducer from './service/action/reducer/index1'
import { createStore } from 'redux';

const store=createStore(rootReducer) 
// console.log(store)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <Provider store={store}>  
    <App />
  </Provider>,  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); 

// ./service/action/reducer/index1.js

// import { combineReducers } from 'redux';
// import someReducer from './someReducer'; // import your actual reducers here

// const rootReducer = combineReducers({
//   // add your reducers here
//   someReducer,
//   // other reducers...
// });

// export default rootReducer;

