import AccountDetailView from 'pages/AccountDetail';
import BankView from 'pages/Bank';
import DashboardLayout from './layouts/DashboardLayout';
import React from 'react';

const routes = [
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      { path: '/', element: <BankView /> },
      { path: 'bank', element: <BankView /> },
      { path: 'account/:accountID', element: <AccountDetailView /> },
    ],
  },
];

export default routes;
