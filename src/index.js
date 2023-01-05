import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/store-react.js'
import {Provider} from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById("root"));

 let rerender = (state) => {
    
    root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App state ={store.getState()} dispatch = {store.dispatch.bind(store)} />
    </Provider>
  </React.StrictMode>
);
}
rerender(store.getState());

store.subscribe(() => {
  let state = store.getState()
  rerender(state)
})