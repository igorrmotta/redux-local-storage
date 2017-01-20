# redux-local-storage
Store the redux state into the localStorage.

# Usage:
import {saveState} from 'redux-local-storage';

store.subscribe(() => {
  saveState(store.getState());
})
