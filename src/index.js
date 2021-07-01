import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './Redux/Reducers/index';

// // 1. Store - Global state
// // 2. Action - Define what to do
// const petIncrement = () => {
//   return {
//     type: "PET_INCREASED"

//   }
// const petDecrement = () => {
//   return {
//     type:" PET_DECREASED"
//   }
// }
// }
// // 3. Reducer - Describe how an action change from one state into another
// //            - Reducer will check which action is called and store will be modified.
// const petCounter = (state = 0, action)  => {
//   switch (action.type) {
//     case "PET_INCREASED":
//       return state + 1;
//     case "PET_DECREASED":
//       return state - 1;
//     default:
//       return state;
//   }
// }

// let store = createStore(petCounter);
// store.subscribe(() => console.log(store.getState()));

// // 4. Dispatch - Perform the action to reducer
// store.dispatch(petIncrement());
// store.dispatch(petIncrement());


const store = createStore(
  reducers,  
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
);

ReactDOM.render(
  <Provider store={store}> 
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Provider>,
  

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
