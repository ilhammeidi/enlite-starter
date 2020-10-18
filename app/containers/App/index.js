import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from '../Pages/Standalone/NotFoundDedicated';
import LoginDedicated from '../Pages/Standalone/LoginDedicated';
import Auth from './Auth';
import Application from './Application';
import ThemeWrapper from './ThemeWrapper';
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

function App() {
  return (
    <ThemeWrapper>
      <Switch>
        <Route path="/" exact component={LoginDedicated} />
        <Route path="/app" component={Application} />
        <Route component={Auth} />
        <Route component={NotFound} />
      </Switch>
    </ThemeWrapper>
  );
}

export default App;
