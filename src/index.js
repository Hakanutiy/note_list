import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/store-react.js'



const root = ReactDOM.createRoot(document.getElementById("root"));

 let rerender = (state) => {
    
    root.render(
  <React.StrictMode>
    
    <App  />
   
  </React.StrictMode>
);
}
rerender(store.getState());

store.subscribe(() => {
  let state = store.getState()
  rerender(state)
})