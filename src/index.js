import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom'

/*My css */
import "./css/myCss.css"
import 'semantic-ui-css/semantic.min.css'
import 'material-components-web/dist/material-components-web.min.css';


const router= 
<Router>
  <Route path="/" exact component={App} />
</Router>

ReactDOM.render(router,document.getElementById('root'));

