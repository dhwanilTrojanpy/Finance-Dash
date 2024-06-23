import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import CardList from './Components/CardList';
import { searchCompanies } from './api';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(searchCompanies("TSLA"));
root.render(
  <React.StrictMode>
    <CardList />
  </React.StrictMode>
);

