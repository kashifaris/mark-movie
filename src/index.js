import React from 'react';
import ReactDOM from 'react-dom/client';
import thunk from 'redux-thunk';

import {createStore, applyMiddleware} from "redux";
import './index.css';
import App from './components/App';
import rootReducer from "./reducers";

//function logger(obj,next,action)
//logger(obj)(next)(action)

// const logger =function ({dispatch,getstate})
// {
//   return function (next){
//     return function (action){
//       //middleware code
//       console.log("action_type",action.type);
//       next(action);
//     }
//   }
// }


//modified 
const logger= ({dispatch,getstate})=>(next)=>(action)=>{
  if(action.type!=='function')
   console.log("action_type",action.type);
  next(action);
}

// const thunk= ({dispatch,getstate})=>(next)=>(action)=>{
//     if(typeof action==='function'){
//       action(dispatch);
//       return;
//     }
//     next(action);
// }

//movies in parameter is reducer fun
const store= createStore(rootReducer,applyMiddleware(logger,thunk));

// store.dispatch({
// type:'ADD_MOVIES',
// movies: [{name:"Superman"}]
// });

// console.log("after State",store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

