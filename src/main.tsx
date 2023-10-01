import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
    BrowserRouter as Router,
    Routes,
    Route,
    Link

} from "react-router-dom"
//import * as React from "react";
//import * as ReactDOM from "react-dom/client";
import Root, { loader as rootLoader } from "./routes/root";

//import App from './App.tsx'
/* previous imports */
import ErrorPage from "./error-page";
''

//import Root from "./routes/root.tsx";
import Contact from "./routes/contact.tsx";
//import 'bootstrap/dist/css/bootstrap.css'

import './App.css'
import Deal from "./routes/Deals.tsx";

//import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        loader: rootLoader,
        children: [
            {
                path: "contacts/:contactId",
                element: <Contact />,
            },
        ],

    },
    {
        path: "deals/:contactId",
        element: <Deal />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
    {/*<App />*/}
  </React.StrictMode>,
)
