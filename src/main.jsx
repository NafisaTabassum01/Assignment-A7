import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css';

import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import RootLayout from './Layout/RootLayout';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Banner from './Component/Banner/Banner';
import HomePage from './Pages/HomePage/HomePage';



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[
      {
        index:true,
        element: <HomePage></HomePage>
      }
    ],
    errorElement: <ErrorPage></ErrorPage>
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
      <RouterProvider router={router} />,

  </StrictMode>,
)
