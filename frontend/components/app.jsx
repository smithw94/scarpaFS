import React from "react";
import { Route, Switch } from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from './session_form/signup_form_container';
import ProductIndexContainer from './products/product_index_container';



import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <header id="header">
      <GreetingContainer />
    </header>

    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route path="/" component={ProductIndexContainer} />
    </Switch>
  </div>
);

export default App;