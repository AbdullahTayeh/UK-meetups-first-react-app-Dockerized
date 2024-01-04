import { Route , Switch } from 'react-router-dom';
import React from 'react';
import Allmeetups from './pages/Allmeetups';
import Newmeetups from './pages/Newmeetups';
import Favourites from './pages/Favourites';
import Layout from './components/layout/Layout';


function App() {
  return (
  
     <Layout>
      <Switch>
        <Route path='/' exact>
          <Allmeetups />
        </Route>
        <Route path='/Newmeetups'>
          <Newmeetups />
        </Route>
        <Route path='/Favourites'>
          <Favourites />
          </Route>
      </Switch>
      </Layout>
   
  );
}

export default App;
