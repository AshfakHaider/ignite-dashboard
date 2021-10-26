import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,

} from 'react-router-dom';
import Layout from './Layout/Layout';

import Welcome from './Pages/Welcome';
import DashboardHome from './Pages/DashboardHome';
import HomeContents from './Pages/HomeContents';
import HomeEdit from './Pages/HomeEdit';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/dashboard/homeEdit'>
          <Layout>
            <HomeEdit />
          </Layout>
        </Route>
        <Route path='/dashboard/home'>
          <Layout>
            <HomeContents />
          </Layout>
        </Route>
        <Route path='/dashboard'>
          <Layout>
            <DashboardHome />
          </Layout>
        </Route>
        <Route path="/" component={Welcome} />
        <Route exact path="/" component={Welcome} />
      </Switch>
    </Router>
  );
}

export default App;
