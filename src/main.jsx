import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Portfoliohome from './Components/Portfoliohome';
import Point_Expert_Case_Study from './Components/Point_Expert_Case_Study'; // adjust path as needed

import './PortfolioAnimation.js';
import './Navigation.js';
import Hotel from './Components/Hotel.jsx';
import Portfolio from './Components/Portfolio.jsx';
import Avt from './Components/Atv.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Portfoliohome />,
  },
  {
    path: '/case-study',
    element: <Point_Expert_Case_Study />,
  },
  {
    path: '/hotel',
    element: <Hotel />,
  },
  {
    path: '/portfolio',
    element: <Portfolio />,
  },
  {
    path: '/avt',
    element: <Avt />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
