import React from 'react';
import ReactDOM from "react-dom";

import Root from "./components/root";
import configureStore from "./store/store";

// import { fetchAttrs } from './util/attributes_api_util';
// import { fetchProducts } from './util/product_api_util';

document.addEventListener("DOMContentLoaded", () => {
  
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // TESTING START
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.fetchAttrs = fetchAttrs;
  // TESTING END
  


  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});