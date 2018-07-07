import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter} from 'react-router-dom';

// Styles
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Main styles for this application
import '../scss/style.scss'
// Temp fix for reactstrap
import '../scss/core/_dropdown-menu-right.scss'

// Containers
import Home from './containers/Home';
//Redux
import createStore from './redux/createStore';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
     <BrowserRouter>
        <Home />
     </BrowserRouter>
  </Provider>
  , document.getElementById('root'));