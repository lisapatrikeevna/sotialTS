import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store, { rootStateType } from './redux/store';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

let rerenderEntireTree = (state:rootStateType) =>{
ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
   <App
       // state={state}
        store={store}
        dispatch={store.dispatch.bind(store)}
  //  changeNewPostText={store.changeNewPostText.bind(store)} 
  //  sendMessage={store.sendMessage.bind(store)} 
  //  changeNewMessage={store.changeNewMessage.bind(store)}
   />
   </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
}
// .bind(store)-связать со стором

rerenderEntireTree(store.getState());
    store.subscribe(() => {
        let state = store.getState();
        rerenderEntireTree(state);
    });

serviceWorker.unregister();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

