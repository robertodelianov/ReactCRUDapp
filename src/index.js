import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Redirect } from 'react-router-dom';

import App from './App';
import Read from './Read';

const HashRoutedApp = () => {
  return (
    <HashRouter>
      <Redirect from='/' to='/app' />
        <Route exact path={'/app'} component={App}/>
        <Route exact path={'/app/:product'} component={Read} />
    </HashRouter>
  )
}

ReactDOM.render(<HashRoutedApp />, document.getElementById('root'));
