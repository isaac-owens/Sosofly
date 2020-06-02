import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const { currentUser } = window;
    const { id } = currentUser;
    const preloadedState = {
      entities: {
        users: {
          [id]: currentUser
        }
      },
      session: { id }
      };

    store = configureStore(preloadedState);

    delete window.currentUser;
  } else {
    store = configureStore();
  }
   
  //TEST
    window.getState = store.getState;
  //TEST
  ReactDOM.render(<Root store={store} />, root)
})