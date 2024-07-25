import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoutesFromElements, createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import "./index.css"

import { Root, jsonLoader, } from "./routes/root";
import { ErrorPage } from "./routes/error/error"
import { MainPage } from './routes/page-main';
import { HtmlPage, htmlLoader } from './routes/page-html';
import { ReactPage, reactLoader } from './routes/page-react';
import { WorkPage, workLoader } from './routes/page-work';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" loader={jsonLoader} element={<Root />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />} >
        <Route index element={<MainPage />} loader={jsonLoader} />
        <Route path='html' element={<HtmlPage />} loader={htmlLoader} />
        <Route path='react' element={<ReactPage />} loader={reactLoader} />
        <Route path='work' element={<WorkPage />} loader={workLoader} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);