import React from "react";
import { Route } from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from './session_form/signup_form_container';

const App = () => (
  <div>
    <header id="header">
      <h1>Scarpa Proj</h1>
    </header>

    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
    <Route path="/" component={GreetingContainer} />
  </div>
);

export default App;