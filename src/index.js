import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import "./css/header.css"

const router= 
<Router>
  <Route path="/" exact component={App} />
</Router>


ReactDOM.render(router,document.getElementById('root'));

