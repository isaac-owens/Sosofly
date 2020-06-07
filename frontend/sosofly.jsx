import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { fetchUserPlaylists } from './actions/playlist_actions'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;

  // bootstrap current user to window
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

    // clear currentUser from window to avoid confusion with state currentUser
    delete window.currentUser;
  } else {
    store = configureStore();
  }
   
  //TEST
    window.getState = store.getState;
    window.fetchUserPlaylists = fetchUserPlaylists; 
    window.store = store;
  //TEST
  ReactDOM.render(<Root store={store} />, root)
})