import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

// React Router
import { BrowserRouter } from 'react-router-dom';

// Translation
import './Services/Translation';

// React Toastify
import { ToastContainer } from 'react-toastify';

// Application
import Application from './App';

// Vendors Styles
import 'react-toastify/dist/ReactToastify.css';

import '@splidejs/react-splide/css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <Suspense>
      <BrowserRouter basename='/'>
        <Application />
        <ToastContainer />
      </BrowserRouter>
    </Suspense>
  </React.Fragment>
);