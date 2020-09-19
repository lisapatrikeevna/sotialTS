import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import store from "./redux/ReduxStore"
import {Provider} from "react-redux";

ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
       <Provider store={store}>
       <App
           // store={store}
           // state={state}
            // dispatch={store.dispatch.bind(store)}
      //  changeNewPostText={store.changeNewPostText.bind(store)}
      //  sendMessage={store.sendMessage.bind(store)}
      //  changeNewMessage={store.changeNewMessage.bind(store)}
       />
       </Provider>
   </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// .bind(store)-связать со стором



serviceWorker.unregister();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

