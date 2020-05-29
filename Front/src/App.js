import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Layout from './components/Layout';
import Home from './pages/Home';
import BadgeNew from './pages/BadgesNew';
import BadgeEdit from './pages/BadgeEdit';
import BadgeDetail from './pages/BadgeDetail';
import BadgesList from './pages/BadgesList';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/badges/new' exact component={BadgeNew} />
          <Route path='/badges/:badgeId/detail' exact component={BadgeDetail} />
          <Route path='/badges/:badgeId/edit' exact component={BadgeEdit} />
          <Route path='/badges/list' exact component={BadgesList} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
