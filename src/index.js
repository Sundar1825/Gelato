import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux';
import initialState from './reducers';
import { Provider } from 'react-redux';
import { addTask } from './actions/index';

// const rootReducer = combineReducers({
//   allReducers : allReducers,
//   form: formReducer
// })

export const store = createStore(initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// store.dispatch({
//   type:'ADD-TASK',
//   payload: {
//     executionAddress : "123",
//     functionName : "345",
//     resolverAddress : "567",
//     resolverFunction : "789"
//   }
// });

// store.dispatch(addTask(123, 123, 123, 123));

console.log("Printing store : ", store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
