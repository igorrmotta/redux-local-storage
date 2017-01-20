# redux-local-storage
Store the redux state into the localStorage.

import {saveState} from 'redux-local-storage';

Usage:
store.subscribe(() => {
  saveState(store.getState());
})
