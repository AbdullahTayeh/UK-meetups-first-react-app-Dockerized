// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';
// import {favoritesContextProvider} from './store/favorites-context';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <favoritesContextProvider>
//     <BrowserRouter>
//     <App />
//     </BrowserRouter>
//     </favoritesContextProvider>
// );

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { FavoritesContextProvider } from './store/favorites-context';

ReactDOM.render(
  <FavoritesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritesContextProvider>,
  document.getElementById('root')
);