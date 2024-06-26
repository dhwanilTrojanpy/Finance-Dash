import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider }  from "react-router-dom";
import { router } from './Routes/Routes';
import { Provider } from "react-redux";

import {store} from "./Store/Store";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Provider store = {store}>
      <RouterProvider router = {router} />
    </Provider>
  </React.StrictMode>
);

