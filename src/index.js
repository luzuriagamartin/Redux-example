import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; 
import store from './store/store'
//Provider permite conectar Redux con React
import {Provider} from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
   </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

