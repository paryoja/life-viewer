import React from 'react';
// import { Navigate } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import BankView from './pages/Bank';

const routes = [
  {
    path: '/',
    element: <DashboardLayout />,
    children: [{ path: '/', element: <BankView /> }],
  },
];

export default routes;
