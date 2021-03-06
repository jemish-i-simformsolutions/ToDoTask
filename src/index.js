import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import MainComponent from './Component/MainComponent'
import { Provider } from 'react-redux';
import { configureStore } from './redux/configureStore';
const store=configureStore();
ReactDOM.render(
  <Provider store={store}>
  <MainComponent/>
  </Provider>
 ,
  document.getElementById('root')
);


reportWebVitals();
