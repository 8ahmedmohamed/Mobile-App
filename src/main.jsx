import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

// React Router
import { BrowserRouter } from 'react-router-dom';

// Application
import Application from './App';

import '@splidejs/react-splide/css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <Suspense>
      <BrowserRouter basename='/'>
        <Application />
      </BrowserRouter>
    </Suspense>
  </React.Fragment>
);